//= require underscore
//= require backbone
//= require handlebars

/**
 * @fileoverview Common javascript code between the desktop and mobile versions
 * of Skate Hamilton.  Contains all the Backbone objects including models and
 * collections as well as useful utility functions and application constants 
 * used by both "clients".
 */

// Container for all application code
var SH = SH || {};
SH.models = SH.models || {};
SH.collections = SH.collections || {};
SH.views = SH.views || {};
SH.app = SH.app || {};
SH.utils = SH.utils || {};
SH.consts = SH.consts || {
  /**
   * Textual abbreviations of days of the week.
   * @type {array}
   */
  days: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],

  /**
   * URLs for all the map marker images.
   * @type {array}
   */
  marker_images: {
    'indoor': '/assets/indoor.png',
    'outdoor': '/assets/outdoor.png',
    'shadow': '/assets/marker-shadow.png'
  },

  /**
   * Coordinates on which the map is currently centered.
   * @type {google.maps.LatLng}
   */
  default_center: new google.maps.LatLng(43.24895389686911, -79.86236572265625),
};

SH.utils.geocoder = new google.maps.Geocoder();


SH.models.ActivityTime = Backbone.Model.extend({
  /**
   * Creates a UI-ready listing of all the days this activity is offered 
   * seperated by commas.
   * @return {string} A commas seperated list of days by abbreviation.
   */
  days: function() {
    var s = '';
    for(var j = 0, n = this.get('days'), nl = n.length; j < nl; j++)
      if (n[j] == '1')
        s += SH.consts.days[j] + ', ';
    
    return s.slice(0, -2);
  },

  /**
   * Reformats the stored time and converts it into a 12-hour time.
   * @return {string} User displayable time.
   */
  times: function() {
    // Force base-10 integer parsing
    var startHour    = parseInt(this.get('start_time').slice(0,2), 10);
    var startMinutes = parseInt(this.get('start_time').slice(3,5), 10);
    var endHour      = parseInt(this.get('end_time').slice(0,2), 10);
    var endMinutes   = parseInt(this.get('end_time').slice(3,5), 10);

    startMinutes = (startMinutes == 0) ? '' : ':' + startMinutes;
    endMinutes   = (endMinutes == 0)   ? '' : ':' + endMinutes;

    if (startHour > 12)
      startHour = '' + (startHour - 12);

    if (endHour >= 12)
      endHour = ((endHour > 12) ? (endHour - 12) : endHour) + endMinutes + 'pm';
    else if (endHour < 12)
      endHour += endMinutes + 'am';

    return startHour + startMinutes + '-' + endHour;
  },
});

// Activity Model
SH.models.Activity = Backbone.Model.extend({
  initialize: function() {
    this.set({ times: new SH.collections.ActivityTimes(this.get('activity_times')) });
  }
});

// Rink model
SH.models.Rink = Backbone.Model.extend({
  initialize: function() {
    this.set({
      type: this.get('rink_type').charAt(0).toUpperCase() + 
            this.get('rink_type').slice(1),
      lat: this.get('latitude'),
      lng: this.get('longitude')
    });

    this.bind('change', _.bind(this.update_rink, this));
  },

  update_rink: function() {
    this.set({
      activities: new SH.collections.Activities(this.get('activities')),
      hasActivities: ((this.get('activities').length == 0) ? false : true)
    });
  },

  // Basic accessor methods
  activities: function() { return this.get('activities'); },
  address: function() { return this.get('address'); },
  hasActivities: function() { return this.get('hasActivities'); },
  lat: function() { return this.get('latitude'); },
  lng: function() { return this.get('longitude'); },
  name: function() { return this.get('name'); },
  note: function() { return this.get('note'); },
  type: function() { return this.get('type'); },
  _type: function() { return this.get('rink_type'); },
});

SH.collections.Rinks = Backbone.Collection.extend({
  model: SH.models.Rink,
  url: '/rinks'
});

SH.collections.Activities = Backbone.Collection.extend({
  model: SH.models.Activity
});

SH.collections.ActivityTimes = Backbone.Collection.extend({
  model: SH.models.ActivityTime
});

// Renders the details of a rink
SH.views.RinkView = Backbone.View.extend({
  template_id: '#rink-view-template',

  render: function() {
    // Render the "parent" view
    var template = Handlebars.compile($(this.template_id).html());
    $(this.el).html(template(this.model.toJSON()));

    // Render the activities
    if (this.model.hasActivities())
      this.model.get('activities').each(function(activity) {
        (new SH.views.ActivityView({
          el: '#activities',
          model: activity})).render();
      });

    return this;
  }
});

// Renders the details of each activity
SH.views.ActivityView = Backbone.View.extend({
  template_id: '#activity-view-template',

  render: function() {
    var template = Handlebars.compile($(this.template_id).html());
    var activity = this.model;
    var el = $(this.el);

    //console.log(JSON.stringify(this.model));

    // Render the times
    this.model.get('times').each(function(time, index) {
      el.append(template({
        'name':  (index > 0) ? '' : activity.get('name'),
        'day':   time.days(),
        'times': time.times(),
        'class': (index + 1 == activity.get('times').length) ? 'last' : '',
        'rows':  (index == 0) ? activity.get('times').length : null
      }));
    });

    return this;
  }
});


SH.views.MapMarkerView = Backbone.View.extend({
  initialize: function(a) {
    this.lat = a.lat;
    this.lng = a.lng;
    this.title = a.name;
    this.id = a.id;
    this.click = a.cb;

    this.markerIcon = new google.maps.MarkerImage(
      SH.consts.marker_images[a.type],
      new google.maps.Size(22, 31),
      new google.maps.Point(0,0),
      new google.maps.Point(0,31)
    );

    this.markerShadow = new google.maps.MarkerImage(
      SH.consts.marker_images['shadow'], 
      new google.maps.Size(42,31), 
      new google.maps.Point(0,0), 
      new google.maps.Point(0,30)
    );

    this.marker_ = this.generateMarker();
    google.maps.event.addListener(this.marker_, 'click', _.bind(this.click, this));
  },

  generateMarker: function() {
    var a = {
      position: new google.maps.LatLng(this.lat, this.lng),
      map: SH.app.map,
      icon: this.markerIcon,
      shadow: this.markerShadow,
      id: this.id,
      title: this.title
    };

    return new google.maps.Marker(a);
  },
});
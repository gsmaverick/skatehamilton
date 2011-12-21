//= require zepto
//= require common

/**
 * @fileoverview Mobile javascript file to enable a native-like
 * experience on Android/iOS devices.
 * @author gavin.schulz@gmail.com (Gavin Schulz)
 */

// Application event bus
SH.app.vent = _.extend({}, Backbone.Events);

SH.views.HeaderView = Backbone.View.extend({
  el: '#header',

  events: {
    'click #search': 'search',
    'click #back': 'back'
  },

  initialize: function() {
    this.vent = SH.app.vent;
    _.bindAll(this, 'showBack', 'hideBack', 'showSearch', 'hideSearch');
  },

  search: function(e) {
    e.preventDefault();
    _gaq.push(['_trackEvent', 'Search', 'Start']);
    this.vent.trigger('search:start');
  },

  back: function(e) {
    e.preventDefault();
    this.vent.trigger('index');
  },

  hideBack: function() {
    $(this.el).children('#back').first().css('display', 'none');
  },

  showBack: function() {
    $(this.el).children('#back').first().css('display', 'block');
  },

  hideSearch: function() {
    $(this.el).children('#search').first().css('display', 'none');
  },

  showSearch: function() {
    $(this.el).children('#search').first().css('display', 'block');
  }
});

SH.views.CoverView = Backbone.View.extend({
  el: '#bubble_container',

  events: {
    'click .tap-closeable': 'close'
  },

  close: function() {
    $('#bubble_container').remove();
    $('#cover').remove();
  },

  initialize: function() {
    _.bindAll(this, 'close');
    $('#bubble_container').css('display', 'block');
    $('#cover').css('display', 'block');
  }
});

SH.views.SearchView = Backbone.View.extend({
  template_id: '#search-template',
  el: 'body',

  events: {
    'submit form': 'submit',
    'click #current': 'center'
  },

  initialize: function() {
    this.vent = SH.app.vent;
  },

  submit: function(e) {
    e.preventDefault();
    _gaq.push(['_trackEvent', 'Search', 'Submit']);
    this.vent.trigger('search:submit');
  },

  center: function() {
    _gaq.push(['_trackEvent', 'Search', 'Geolocate']);
   this.vent.trigger('search:geolocate');
  },

  render: function() {
    $('body').append('<div id="search_container"></div>');
    this.el = '#search_container';

    var template = Handlebars.compile($(this.template_id).html());
    $(this.el).html(template({
      geo: (navigator.geolocation) ? true : false
    }));

    return this;
  }
});

SH.views.RinkPopupView = Backbone.View.extend({
  template_id: '#rink-popup-template',
  el: 'body',

  events: {
    'click #insid_e': 'click'
  },

  render: function() {
    var template = Handlebars.compile($(this.template_id).html());
    $('body').append(template(this.model.toJSON()));
    this.el = '#rink_popup';

    return this;
  },

  click: function() {
    SH.app.Router.navigate('/rinks/' + this.model.get('id'), true);
  }
});

_.extend(SH.app, {
  /**
   * Map marker that shows the current location on which the map
   * is centered.
   * @type {google.maps.marker}
   */
  locationMarker: null,

  /**
   * Google Map map object that ties to the main map canvas.
   * @type {google.maps.map}
   */
  map: null,

  /**
   * Object containing google maps options.
   * @type {object}
   */
  mapOpts: {
    zoom: 13,
    center: SH.consts.default_center,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: false,
    zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER }
  },
});

SH.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    '/rinks/:id': 'rink'
  },

  initialize: function() {
    this.vent = SH.app.vent;

    this.vent.bind('search:start', this.search_start, this);
    this.vent.bind('search:submit', this.search_submit, this);
    this.vent.bind('search:geolocate', this.search_geo, this);
    this.vent.bind('index', this.index, this);

    this.header = new SH.views.HeaderView();
    this.cover = new SH.views.CoverView();
  },

  search_start: function() {
    this.header.showBack();
    this.header.hideSearch();
    this.search_view = new SH.views.SearchView();
    this.search_view.render();
  },

  search_submit: function() {
    var self = this;

    SH.utils.geocoder.geocode(
      {'address' : $('#query').val() + ' Hamilton, Ontario'},
      function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          self.updateCenter(results[0].geometry.location);
          self.closeSearchView();
        } else {
          // errors
        }
      }
    );
  },

  search_geo: function() {
    this.closeSearchView();
    var self = this;

    navigator.geolocation.getCurrentPosition(function(pos) {
      self.updateCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    });
  },

  /**
   * Updates the position of the map marker to denote the position
   * the map is centered on.
   */
  updateCenter: function(center) {
    // Remove existing marker from the map
    if (SH.app.locationMarker)
      SH.app.locationMarker.setMap(null);

    // Center on current location
    SH.app.locationMarker = new google.maps.Marker({
      position: center,
      map: SH.app.map,
      title: "Current Location"
    });

    SH.app.map.setZoom(13);
    SH.app.map.setCenter(center);
  },

  addMarkers: function() {
    SH.app.RinkMarkers = SH.app.RinksMarkers || [];

    SH.app.Rinks.each(function(rink) {
      var a = {
        lat: rink.lat(),
        lng: rink.lng(),
        name: rink.name(),
        id: rink.get('id'),
        type: rink._type(),
        cb: function() {
          if (SH.app.popup)
            SH.app.popup.remove(), SH.app.popup = null;
          
          SH.app.popup = (new SH.views.RinkPopupView({ model: rink })).render();
        }
      };

      SH.app.RinkMarkers[rink.get('id')] = new SH.views.MapMarkerView(a);
    });
  },

  index: function() {
    if (this.search_view)
      this.closeSearchView();
    
    if (!SH.app.map) {
      SH.app.map = new google.maps.Map(document.getElementById('map'), SH.app.mapOpts);
      SH.app.Rinks = new SH.collections.Rinks(window.rinks);
      this.addMarkers();
    }

    this.updateCenter(SH.app.mapOpts.center);

    if ($('#rink_details'))
      $('#rink_details').remove(), 
      $('#map').show(), 
      google.maps.event.trigger(SH.app.map, 'resize'), 
      this.updateCenter(SH.app.mapOpts.center);
  },

  rink: function(id) {
    $('#map').hide();
    this.cover.close();

    _gaq.push(['_trackEvent', 'Rink', 'Load', id]);

    var ent = false;
    if (!SH.app.map) {
      SH.app.map = new google.maps.Map(document.getElementById('map'), SH.app.mapOpts);
      SH.app.Rinks = new SH.collections.Rinks(window.rinks);
      this.addMarkers();
      ent = true;
    }

    if (SH.app.popup)
      SH.app.popup.remove(), SH.app.popup = null;

    this.updateCenter(SH.app.mapOpts.center);

    var template = Handlebars.compile($('#rink-details-template').html());
    $('body').append(template());

    // Get the rest of the rink information from the server
    var rink = SH.app.Rinks.get(id);

    var self = this;

    rink.fetch({success: function() {
      // Render a RinkView in the left panel
      (new SH.views.RinkView({el: '#rink_details', model: rink})).render();

      if (ent)
        $('#entrance').show();
      self.header.showBack();
      self.header.showSearch();
    }, data: {deep: true}});
  },

  closeSearchView: function() {
    this.search_view.remove();
    this.search_view = null;
    this.header.hideBack();
    this.header.showSearch();

    if ($('#rink_details'))
      $('#rink_details').remove(), 
      $('#map').show(),
      google.maps.event.trigger(SH.app.map, 'resize');
  },
});

$(document).ready(function() {
  SH.app.Router = new SH.Router();
  Backbone.history.start();
});
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
    this.vent.trigger('search:submit');
  },

  center: function() {
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
    zoom: 14,
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
          // stuff here
          self.closeSearchView();
        } else {
          // errors!!!
        }
      }
    );
  },

  search_geo: function() {
    this.closeSearchView();

    navigator.geolocation.getCurrentPosition(function(pos) {
      // update center of the map
    });
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
          (new SH.views.RinkPopupView({ model: rink })).render();
        }
      };

      SH.app.RinkMarkers[rink.get('id')] = new SH.views.MapMarkerView(a);
    });
  },

  index: function() {
    if (this.search_view)
      this.closeSearchView();
    
    if (!this.map) {
      SH.app.map = new google.maps.Map(document.getElementById('map'), SH.app.mapOpts);
      SH.app.Rinks = new SH.collections.Rinks(window.rinks);
      this.addMarkers();
    }
  },

  rink: function(id) {
    
  },

  closeSearchView: function() {
    this.search_view.remove();
    this.search_view = null;
    this.header.hideBack();
    this.header.showSearch();
  },

  updateCenter: function() {
    
  },
});

$(document).ready(function() {
  SH.app.Router = new SH.Router();
  Backbone.history.start();
});
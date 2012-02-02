//= require jquery
//= require underscore
//= require backbone
//= require handlebars

//= require bootstrap
//= require_tree ./models
//= require_tree ./views

/**
 * @fileoverview Mobile javascript file to enable a native-like experience on 
 * Android/iOS devices.
 */

// Application event bus
SH.app.vent = _.extend({}, Backbone.Events);

// State of "index" front
SH.app.state = 'map';

// Main application router
SH.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    '/rinks/:id': 'rink'
  },

  index: function() {
    SH.app.coverView  = new SH.views.CoverView();
    SH.app.vent.trigger('index');
  },

  rink: function(id) {
    SH.app.vent.trigger('rink', id);
  }
});

/**
 * Destroys the search UI and adjusts the header state accordingly.  If a rink
 * detail pop-up exists it will delete that as well.
 */
SH.app.closeSearchView = function() {
  this.searchView.remove();
  this.searchView = null;
  this.headerView.setState(['bottom', 'search']);
};

SH.app.closeRinkDetails = function() {
  if (this.detailsView)
    this.detailsView.remove(), this.detailsView = null;
  this.headerView.setState(['bottom', 'search']);
};

SH.app.closeRinkList = function() {
  this.listView.remove();
  this.listView = null;
  this.headerView.setState(['bottom', 'search']);
};

SH.app.closeMap = function() {
  this.mapView.remove();
  this.mapView = null;
  this.headerView.setState(['bottom', 'search']);
};

// Index page handler
SH.app.index = function() {
  this.Router.navigate('');

  this.headerView.setState(['search', 'bottom']);

  if (this.searchView)
    this.closeSearchView();
  
  if (this.detailsView)
    this.closeRinkDetails();  

  (this.state === 'map') ? this.showMap() : this.showList();
};

SH.app.showMap = function() {
  this.state = 'map';
  console.log('map');
  $('#map').show();
  $('#rink_list').hide();
  this.mapView.trigger('resize');
  this.mapView.updateCenter(this.mapView.locationMarker.position);
};

// Sets up UI for searching and adjusts the header setup accordingly.
SH.app.search_start = function() {
  this.headerView.setState(['back', 'search_title']);
  this.searchView = new SH.views.SearchView();
  $('body').append(this.searchView.el);
};

/**
 * Handles a user search and geocodes the form input and then closes the search
 * view if the request succeeded.  Otherwise it should display an error message.
 */
SH.app.search_submit = function() {
  var self = this;

  SH.utils.geocoder.geocode({
    'address': $('#query').val() + ' Hamilton, Ontario'
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      self.mapView.updateCenter(results[0].geometry.location);
      self.closeSearchView();
      self.showMap();
      self.headerView.setState(['back', 'bottom', 'search'])
      self.headerView.toMap();
      self.Router.navigate('');
    } else {
      // errors
    }
  });
};

/**
 * Handles a request by the user to center the map on their location using the
 * browser's geolocation capabilities.
 */
SH.app.search_geo = function() {
  var self = this;

  this.closeSearchView();
  navigator.geolocation.getCurrentPosition(function(pos) {
    // Update the map's center position
    self.mapView.updateCenter(
      new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
    );
    self.showMap();
    self.headerView.setState(['back', 'bottom', 'search'])
    self.headerView.toMap();
    self.Router.navigate('');
  });
};

// Shows the details of a specific rink
SH.app.rink = function(id) {
  if (this.popupView)
    this.popupView.remove(),
    this.popupView = null;

  $('#rink_list').hide();
  $('#map').hide();

  _gaq.push(['_trackEvent', 'Rink', 'Load', id]);    
  this.headerView.setState(['back', 'details', 'search']);

  this.detailsView = new SH.views.RinkView({ model: this.Rinks.get(id) });
  $('body').append(this.detailsView.render().el);
};

/**
 * Displays a pop-up at the bottom of the screen when a pin is tapped.
 * @param {Number} id Selected rink's database ID value.
 */
SH.app.popup = function(id) {
  if (this.popupView)
    this.popupView.remove(),
    this.popupView = null;

  this.popupView = new SH.views.RinkPopupView({ model: this.Rinks.get(id) });
  $('body').append(this.popupView.render().el);
};

SH.app.focus = function() {
  if (this.popupView)
    this.popupView.remove(),
    this.popupView = null;
};

SH.app.showList = function() {
  console.log('showList');

  this.closeRinkDetails();
  
  this.state = 'list';
  
  this.listView = new SH.views.RinkListView({ collection: this.Rinks });

  $('#rink_list').remove();
  $('body').append(this.listView.render().el);
  $('#map').hide();
  $('#rink_list').show();
};

SH.app.init = function() {
  this.Rinks = new SH.collections.Rinks(window.rinks);

  this.headerView = new SH.views.MobileHeaderView();
  this.mapView = new SH.views.MapView({ collection: this.Rinks });
  //this.detailsView = new SH.views.RinkListView({ collection: this.Rinks });

  $('body').append(this.mapView.el);
}

$(document).ready(function() {
  SH.app.init();

  SH.app.vent.bind('search:start', SH.app.search_start, SH.app);
  SH.app.vent.bind('search:submit', SH.app.search_submit, SH.app);
  SH.app.vent.bind('search:geolocate', SH.app.search_geo, SH.app);
  SH.app.vent.bind('index', SH.app.index, SH.app);
  SH.app.vent.bind('rink', SH.app.rink, SH.app);
  SH.app.vent.bind('map:clicked', SH.app.popup, SH.app);
  SH.app.vent.bind('map:focus', SH.app.focus, SH.app);
  SH.app.vent.bind('map:show', SH.app.showMap, SH.app);
  SH.app.vent.bind('list:show', SH.app.showList, SH.app);

  SH.app.Router = new SH.Router();
  Backbone.history.start();
});
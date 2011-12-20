//= require jquery
//= require common

/**
 * @fileoverview Desktop specific javascript code for SkateHamilton.
 * @author gavin.schulz@gmail.com (Gavin Schulz)
 */

SH.views.HeaderView = Backbone.View.extend({
  el: '#header',

  events: {
    'submit form': 'submitForm',
    'click #search_submit': 'submitForm',
    'focus #search_address': 'focus',
    'blur #search_address': 'blur'
  },

  submitForm: function(e) {
    e.preventDefault();
    SH.utils.geocoder.geocode(
      {'address' : $('#search_address').val() + ' Hamilton, Ontario'}, 
      function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          SH.app.centerToLocation(results[0].geometry.location);
          $('#search_address').val(SH.app.search_text);
          $('#search_address').blur();
        }
      }
    );
  },

  focus: function(e) {
    var self = this;
    if (e.target.value.trim() == SH.app.search_text)
      e.target.value = "";

    // When clicking on the google map it does not cause the search_address
    // have to simulate it
    var mapFocus = google.maps.event.addListener(SH.app.map, 'mousedown', 
      function() {
        $('#search_address').trigger('blur');
        google.maps.event.removeListener(mapFocus);
      }
    );
  },
  
  blur: function(e) {
    if (e.target.value.trim() == '')
      e.target.value = SH.app.search_text;
  }
});

SH.views.LeftPanelControlView = Backbone.View.extend({
  el: '#left_panel_control',

  events: {
    'click #button_in': 'togglePanel',
    'click #button_out': 'togglePanel'
  },

  initialize: function() {
    _.bindAll(this, 'togglePanel');
  },

  /**
   * Toggles the left panel 
   * @param {bool} show Flag to force the showing of the panel.
   *
   */
  togglePanel: function(show) {
    if ($('#contents').css('display') == 'none' || 
        (typeof show === 'boolean' && show == true)) {
      $('#button_in').css('display', 'none');
      $('#button_out').css('display', 'block');
      $('#contents').css('display', 'block');
      $('#left_panel').css('width', '400px');
      $('#button_out').css('left', '404px');
      $('#button_in').css('left', '404px');
      $('#map').css('margin-left', '400px');
    } else {
      $('#contents').css("display", "none");
      $('#left_panel').css("width", "0px");
      $('#button_out').css('display', 'none');
      $('#button_in').css('display', 'block');
      $('#button_out').css('left', '4px');
      $('#button_in').css('left', '4px');
      $('#map').css("margin-left", "0px");
    }

    if (SH.app.map)
      google.maps.event.trigger(SH.app.map, 'resize');
  }
});

SH.views.LeftPanelView = Backbone.View.extend({
  el: '#left_panel',

  events: {
    'click #find_rink': 'find',
    'click #add_rink': 'add',
    'click #mobile': 'mobile',
    'click #home_link': 'home'
  },

  home: function(e) {
    console.log('home');
    e.preventDefault();
    var template = Handlebars.compile($('#home-template').html());
    $('#left_content').html(template());
  },

  find: function(e) {
    e.preventDefault();

    if (navigator.geolocation) { // Geolocate ourselves to the user's position
      navigator.geolocation.getCurrentPosition(function(pos) {
        SH.app.centerToLocation(new google.maps.LatLng(pos.coords.latitude, 
                                                       pos.coords.longitude));
      }, function(error) {
        console.log(error);
      });
    }

    // Display a helpful info bubble
    if ($('#info_bubble').length == 0) {
      var template = Handlebars.compile($('#info-bubble-template').html());
      $('body').append(template());
      $('.close').bind('click', function() {
        $('#bubble_container').remove();
      });
    }

    SH.app.togglePanel();
  },

  add: function(e) {
    e.preventDefault();
    var template = Handlebars.compile($('#add-rink-template').html());
    $('#left_content').html(template());
  },

  mobile: function(e) {
    e.preventDefault();
    var template = Handlebars.compile($('#mobile-template').html());
    $('#left_content').html(template());
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
  mapOptions: {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: false
  },

  /**
   * Default contents of the header search input field.
   * @type {string}
   */
  search_text: 'Enter address or rink name',

  /**
   * Utility function to get size of browser viewport.
   * @return {array} An array containing the height, width and scrollTop of the browser.
   */
  getViewport: function() {
    var w = h = o = 0,
        a = 'undefined',
        b = document.getElementsByTagName('body')[0],
        c = document.documentElement,
        d = window.innerWidth;
    if (typeof d != a)
      w = d, h = window.innerHeight;
    else if (typeof c != a && typeof c.clientWidth != a && c.clientWidth != 0)
      w = c.clientWidth, h = c.clientHeight, o = c.scrollTop;
    else
      w = b.clientWidth, h = b.clientHeight, o = b.scrollTop;
    return [w, h, o];
  },

  /**
   * Centers the map to the new location specified and updates 
   * the center location marker.
   * @param {google.maps.LatLng} location New position to center map on.
   */
  centerToLocation: function(location) {
    // Remove existing marker from the map
    if (SH.app.locationMarker)
      SH.app.locationMarker.setMap(null);
    
    SH.app.map.setCenter(location || SH.consts.default_center);
    SH.app.locationMarker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: location || SH.consts.default_center,
      map: SH.app.map,
      title: 'Current Location'
    });
  },

  /**
   * Adjusts the height of all fixed height elements when the screen is resized 
   * so as to prevent scrollbars from appearing.
   */
  doLayout: function() {
    var bodyHeight = SH.app.getViewport()[1];
    bodyHeight = (bodyHeight < 400) ? 400 : bodyHeight;

    var contentHeight = (bodyHeight - 44);

    $('#map').css('height', contentHeight + 'px');    
    $('#left_panel').css('height', contentHeight + 'px');
    $('#map_canvas').css('height', contentHeight + 'px');
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
        cb: function(e) {
          // Get the rest of the rink information from the server
          rink.fetch({success: function() {
            // Render a RinkView in the left panel
            (new SH.views.RinkView({el: '#left_content', model: rink})).render();
            window.addthis_share = {
              url: 'http://skatehamilton.herokuapp.com/rinks/' + rink.get('id'),
              title: rink.get('name') + ' - Skate Hamilton',
              description: 'Find skating rinks in Hamilton!'
            };
            window.addthis.toolbox('#share');
            SH.app.left_panel_control.togglePanel(true);
          }, data: {deep: true}});
        }
      };

      SH.app.RinkMarkers[rink.get('id')] = new SH.views.MapMarkerView(a);
    });
  },

  // Initializes the google map and adds the rink markers to the map
  initMap: function() {
    SH.app.map = new google.maps.Map(document.getElementById('map'), SH.app.mapOptions);
    SH.app.centerToLocation();
    google.maps.event.addListener(SH.app.map, 'tilesloaded', SH.app.addMarkers);
  }
});

SH.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    '/rinks/:id': 'rink',
    '.*actions': 'index'
  },

  index: function() {
    this.init();
  },

  rink: function(id) {
    this.init();

    // Get the rest of the rink information from the server
    var rink = SH.app.Rinks.get(id);

    rink.fetch({success: function() {
      // Render a RinkView in the left panel
      (new SH.views.RinkView({el: '#left_content', model: rink})).render();
      var addthis_share = {
        url: 'http://skatehamilton.herokuapp.com/rinks/' + rink.get('id'),
        title: rink.get('name') + ' - Skate Hamilton',
        description: 'Find skating rinks in Hamilton!'
      };
      window.addthis.toolbox('#share', {}, addthis_share);
      SH.app.left_panel_control.togglePanel(true);
      $('#entrance').show();
    }, data: {deep: true}});
  },

  /**
   * Common initialization tasks that need to be done on every page load.  This
   * sets up all the views and the map callbacks.
   */
  init: function() {
    // Load rink data
    SH.app.Rinks = new SH.collections.Rinks(window.rinks);

    google.maps.event.addDomListener(window, 'load', SH.app.initMap);
    window.onresize = SH.app.doLayout; // TODO: orientation change event

    // Construct all our views and attach them to existing elements
    SH.app.left_panel_control = new SH.views.LeftPanelControlView();
    SH.app.left_panel = new SH.views.LeftPanelView();
    SH.app.header = new SH.views.HeaderView();

    SH.app.doLayout();
    // Make sure panel is displayed
    SH.app.left_panel_control.togglePanel(true);
  },
});

$(document).ready(function() {
  var Router = new SH.Router();
  Backbone.history.start();
});
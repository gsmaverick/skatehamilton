SH.views.LeftPanelView = Backbone.View.extend({
  el: '#left_panel',

  events: {
    'click #find_rink': 'find',
    'click #add_rink': 'add',
    'click #mobile': 'mobile',
    'click #home_link': 'home'
  },

  home: function(e) {
    e.preventDefault();
    _gaq.push(['_trackEvent', 'Panel', 'Home']);
    var template = Handlebars.compile($('#home-template').html());
    $('#left_content').html(template());
  },

  find: function(e) {
    e.preventDefault();
    _gaq.push(['_trackEvent', 'Panel', 'Find']);

    if (navigator.geolocation) { // Geolocate ourselves to the user's position
      navigator.geolocation.getCurrentPosition(function(pos) {
        SH.app.mapView.updateCenter(new google.maps.LatLng(pos.coords.latitude, 
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
  },

  add: function(e) {
    e.preventDefault();
    _gaq.push(['_trackEvent', 'Panel', 'Add']);
    var template = Handlebars.compile($('#add-rink-template').html());
    $('#left_content').html(template());
  },

  mobile: function(e) {
    e.preventDefault();
    _gaq.push(['_trackEvent', 'Panel', 'Mobile']);
    var template = Handlebars.compile($('#mobile-template').html());
    $('#left_content').html(template());
  }

});
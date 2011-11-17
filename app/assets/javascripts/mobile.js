//= require zepto
//= require handlebars

var gMap;
var markers = [];

/**
 * Closes the info bubble shown the first time someone visits 
 * the site based on the existence of the _IS cookie.
 *
 */
function closeInfo() {
  $("#info_bubble").remove();
  $("#cover").remove();
  $.cookie('_IS', true, { expires: 7 });
}

/**
 * Called when the map is touched after a marker has been pressed.  
 * Close the marker information div and unbinds itself.
 *
 */
function mapTouch() {
  $("#rink_popup").hide();
  $("#map").unbind('touchstart', mapTouch);
}

/**
 * Updates the pop-up when clicking on a map marker.
 * Renders a Handlebars template with the provided information.
 *
 */
function updateBubble( title ) {
  var parts = title.split("||");
  var template = Handlebars.compile($("#rink-popup-template").html());
  $("body").append(template({
    name:    parts[1],
    address: parts[2],
    type:    parts[3].charAt(0).toUpperCase() + parts[3].slice(1)
  }));
  $("#rink_popup").attr('rink-id', parts[0]);
}

/**
 * Initializes the Google Map and centers on Hamilton if
 * their exists no values in the cookies where we store
 * previous locations this device was at.
 *
 */
function initializeMap() {
  var _center = ($.cookie('last_lat') && $.cookie('last_lng')) ? new google.maps.LatLng($.cookie('last_lat'), $.cookie('last_lng')) : new google.maps.LatLng(43.24895389686911, -79.86236572265625);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      _center = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      $.cookie('last_lat', pos.coords.latitude);
      $.cookie('last_lng', pos.coords.longitude);
    }, function() {});
  }

  var mapOpts = {
    zoom: 13,
    center: _center,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: false,
    zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER }
  };

  gMap = new google.maps.Map(document.getElementById('map'), mapOpts);

  // Adds all the markers once the tiles have loaded
  google.maps.event.addListener(gMap, 'tilesloaded', function() {
    for( var i = 1; i < rinks.length; i++ ) {
      markers[i] = new google.maps.Marker({
        position: new google.maps.LatLng(rinks[i].latitude, rinks[i].longitude),
        map: gMap,
        title: rinks[i].name,
        info: [rinks[i].id, rinks[i].name, rinks[i].address, rinks[i].rink_type].join("||")
      });

      google.maps.event.addListener(markers[i], 'click', function (e) {
        updateBubble(this.info);
        $("#map").bind('touchstart', mapTouch);
      })
    }
  });
}

google.maps.event.addDomListener(window, 'load', initializeMap);

$(document).ready(function() {
  // Determine whether to display the info bubble or not
  //if ($.cookie('_IS'))
  //  closeInfo();
  //else
  $(".tap-closeable").bind('click', function() {
    closeInfo();
    $(".tap-closeable").unbind();
  });

  // Action 
  $("#rink_popup").live('click', function() {
    $.getJSON(path + '/' + $("#rink_popup").attr("rink-id"), function(data) {
      var template = Handlebars.compile($("#rink-detail-template").html());
      $("#rink_details").html(template({ rink: data }));
    });

    var template = Handlebars.compile($("#rink-details-template").html());
    $("body").append(template({}));

    $("#rink_popup").remove();
    $("#header").append('<a href="#" id="back">&laquo;</a>');
    $("#map").hide();
  });

  // Action fired when you click on the back button
  $("#back").live('click', function(e) {
    $("#map").show();
    $("#back").remove();
    $("#rink_details").remove();
    e.preventDefault();
  })
});
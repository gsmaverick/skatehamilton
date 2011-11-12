//= require jquery
//= require jquery_ujs
//= require handlebars
var gMap;
var markers = [];
var _a = "Address...";
var _b = 'undefined';

window.onresize = function() { doLayout(); }

function getViewport() {
  var vw, vh, vo = 0;
  if (typeof window.innerWidth != _b) {
    vw = window.innerWidth, vh = window.innerHeight
  } else if (typeof document.documentElement != _b && typeof document.documentElement.clientWidth != _b &&
             document.documentElement.clientWidth != 0) {
    vw = document.documentElement.clientWidth,
    vh = document.documentElement.clientHeight,
    vo = document.documentElement.scrollTop
  } else {
    vw = document.getElementsByTagName('body')[0].clientWidth, 
    vh = document.getElementsByTagName('body')[0].clientHeight,
    vo = document.getElementsByTagName('body')[0].scrollTop
  }

  return new Array(vw, vh, vo);
}

function showInfo( info ) {
  
  console.log(info);
}

function initialize() {
  var myOptions = {
    zoom: 13,
    center: new google.maps.LatLng(43.24895389686911, -79.86236572265625),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: false
  };

  gMap = new google.maps.Map(document.getElementById('map'), myOptions);

  // Adds all the markers once the tiles have loaded
  google.maps.event.addListener(gMap, 'tilesloaded', function() {
    for( var i = 0; i < rinks.length; i++ ) {
      markers[i] = new google.maps.Marker({
        position: new google.maps.LatLng(rinks[i].latitude, rinks[i].longitude),
        map: gMap,
        title: rinks[i].name,
        info: [rinks[i].id, rinks[i].name, rinks[i].address, rinks[i].rink_type].join("||")
      });

      google.maps.event.addListener(markers[i], 'click', function () { showInfo(this.info); });
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function() {
  doLayout();

  Handlebars.registerPartial('footer', Handlebars.compile($("#footer-template").html()));

  $("#left_panel_control").click(function() {
    if ($("#contents").css("display") == "none") {
      $("#contents").css("display", "block");
      $("#left_panel").css("width", "400px");
      $("#left_panel_control img").css("left", "404px");
      $("#left_panel_control img").attr("src", button_tab_out);
      $("#map").css("margin-left", "400px");
      google.maps.event.trigger(gMap, 'resize');
    } else {
      $("#contents").css("display", "none");
      $("#left_panel").css("width", "0px");
      $("#left_panel_control img").css("left", "4px");
      $("#left_panel_control img").attr("src", button_tab_in);
      $("#map").css("margin-left", "0px");
      google.maps.event.trigger(gMap, 'resize');
    }
  });

  $("#search_submit").click(function(e) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address' : document.getElementById("search_address").value }, function(results, status) {
      if ( status == google.maps.GeocoderStatus.OK ) {
        gMap.setCenter(results[0].geometry.location);
        gMap.setZoom(14);
      }
    });
    e.preventDefault();
  });

  $("#search_address").focus(function() {
    this.value = (this.value == _a) ? this.value = "" : this.value;

    // When clicking on the google map it does not receive focus so we
    // have to simuate it
    var self = google.maps.event.addListener(gMap, 'mousedown', function() {
      $("#search_address").trigger('blur');
      google.maps.event.removeListener(self);
    });
  });

  $("#search_address").blur(function() {
    this.value = (this.value.trim() == '') ? this.value = _a : this.value;
  });

  // Since we're not using an actual form atm
  // we must fake the ``enter`` to submit functionality
  $("#search_address").keydown(function(e) {
    if (e.keyCode == '13') 
      $("#search_submit").trigger("click");
  });

  $("#find_rink").live('click', function(e) {
    e.preventDefault();
    $("#left_panel_control").click();
  });

  $("#add_rink").live('click', function(e) {
    var template = Handlebars.compile($("#add-rink-template").html());
    $("#contents").html(template());
    e.preventDefault();
  });

  $("#mobile").live('click', function(e) {
    var template = Handlebars.compile($("#mobile-template").html());
    $("#contents").html(template());
    e.preventDefault();
  });

  $("#home_link").live('click', function(e) {
    var template = Handlebars.compile($("#home-template").html());
    $("#contents").html(template());
    e.preventDefault();
  });
});


/**
 * Adjusts the height of all the elements when the screen 
 * is resized so as to prevent scrollbars from appearing.
 *
 */
function doLayout() {
  var bodyHeight = getViewport()[1];
  bodyHeight = (bodyHeight < 400) ? 400 : bodyHeight;

  var contentHeight = (bodyHeight - 44);
  
  $('#map').css('height', contentHeight + "px");
  $('#left_panel').css('height', contentHeight + "px");
  $("#map_canvas").css('height', contentHeight + "px");
}
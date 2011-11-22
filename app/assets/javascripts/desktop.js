//= require jquery
//= require jquery_ujs
//= require handlebars

var gMap;
var markers = [];
var days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];
var locationMarker = null;
var _a = "Address...";

window.onresize=function(){doLayout();}
function getViewport(){var w=h=o=0,a='undefined',b=document.getElementsByTagName('body')[0],c=document.documentElement,d=window.innerWidth;if(typeof d!=a)w=d,h=window.innerHeight;else if(typeof c!=a&&typeof c.clientWidth!=a&&c.clientWidth!=0)w=c.clientWidth,h=c.clientHeight,o=c.scrollTop;else w=b.clientWidth,h=b.clientHeight,o=b.scrollTop;return[w,h,o];}

function centerToLocation( location ) {
  // Remove existing marker from the map
  if (locationMarker)
    locationMarker.setMap(null); 

  gMap.setCenter(location);
  gMap.setZoom(14); // TODO: fix zoom levels based on screen size
  locationMarker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: location,
    map: gMap,
    icon: green_url,
    title: "Current Location"
  });
}

function showInfo(id) {
  $.getJSON(path + '/' + id, function(data) {
      var template = Handlebars.compile($("#rink-details-template").html());
      data.activitiesLen = [];
      $("#contents").html(template(data));

      if ($("#contents").css("display") == "none") {
        $("#contents").css("display", "block");
        $("#left_panel").css("width", "400px");
        $("#left_panel_control img").css("left", "404px");
        $("#left_panel_control img").attr("src", button_tab_out);
        $("#map").css("margin-left", "400px");
        google.maps.event.trigger(gMap, 'resize');
      }
    });
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
        id: rinks[i].id
      });

      google.maps.event.addListener(markers[i], 'click', function () { showInfo(this.id); });
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function() {
  doLayout();

  /**
   * Returns the html for showing a static google map
   * @param {object} context The handlebars context that this helper is called from
   * @return {string} The html need for showing the static map
   */
  Handlebars.registerHelper('staticMap', function(context) {
    return '<img src="http://maps.googleapis.com/maps/api/staticmap?center=' + 
         context.latitude + ',' + context.longitude + 
         '&zoom=15&size=353x240&maptype=roadmap&sensor=false&markers=color:red%7C' +
         context.latitude + ',' + context.longitude + '" class="map" />';
  });

  Handlebars.registerHelper('capRink', function(rink_type) {
    return rink_type.charAt(0).toUpperCase() + rink_type.slice(1);
  });

  Handlebars.registerHelper('toString', function(times) {
    var s = t = u = '', v = false;
  
    // Looping through all the times that activities take place
    for(var i = 0, l = times.length; i < l; i++) {
      v = (i+1==l)?true:false;

      t = u = '';

      if (i != 0)
        t += v ? '<tr><td class="last"></td>' : '<tr><td></td>';

      // Extracting out the days the activity time takes place
      for(var j = 0, m = times[i].days.length; j < m; j++)
        if (times[i].days[j] == '1')
          u += days[j] + ', ';
      
      t += v ? '<td width="35%" class="last">' : '<td width="35%">';
      t += u.slice(0,-2);
      t += '</td>';
      t += ( v ? '<td class="last">' : '<td>' ) + times[i].start_time + '-' + times[i].end_time + '</td>';
      t += '</tr>';

      s += t;
    }

    return s;
  });

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
    geocoder.geocode({ 'address' : document.getElementById("search_address").value + ' Hamilton, Ontario' }, function(results, status) {
      if ( status == google.maps.GeocoderStatus.OK )
        centerToLocation(results[0].geometry.location);
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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        centerToLocation(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      }, function(error) { console.log(error); });
    } else if ($("#info_bubble").length == 0) {
      var template = Handlebars.compile($("#info-bubble-template").html());
      $("body").append(template());
      $(".tap-closeable").bind('click', function() { $("#info_bubble").remove(); $(".tap-closeable").unbind(); });
    }
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
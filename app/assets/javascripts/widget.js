/**
 * Creates a contained Google Map and exposes a number of common methods to 
 * simplify the use of the map.
 * @param {Element} el DOM element that will hold the Google Map.  It should be
 *     of a fixed height and width otherwise the map will not show up.
 * @param {Object=} opts Various optional parameters such as where to center the
 *     map or the zoom level.
 */
var MapWidget = function(el, opts) {
  var opts = opts || {};
  this.center = new google.maps.LatLng(43.24895389686911, -79.86236572265625);

  var a = {
    center: opts['center'] || this.center,
    zoom: opts['zoom'] || 15,
    mapTypeId: opts['type'] || google.maps.MapTypeId.ROADMAP
  };

  this.map = new google.maps.Map(el, a);

  // Creates a new geocoder for use by this widget
  this.geocoder = new google.maps.Geocoder();
}

/**
 * Centers the map via geocoding an address.
 * @param {String} address The address to be geocoded and then center the map
 *    on afterwards.
 */
MapWidget.prototype.geocode = function(address) {
  var self = this;
  this.geocoder.geocode({ 'address' : address }, 
    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
        self.centerToLocation(results[0].geometry.location);
      else
        self.centerToLocation(self.center);
    });
};

/**
 * Centers the map on the specified location and updates the location marker if
 * necessary.
 * @param {google.maps.LatLng} loc New map center point.
 */
MapWidget.prototype.centerToLocation = function(loc) {
  // Remove existing marker from the map
  if (this.locationMarker)
    this.locationMarker.setMap(null);
  
  this.map.setCenter(loc);
  this.locationMarker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: loc,
    map: this.map,
    title: 'Current Location'
  });
};

(function() {
  var global = this;

  var SH = window.SH
    , root = 'http://localhost:3000/'
    , asset = root + 'assets/'
    , placeholder = 'Enter address or rink name';

  var isDefined = function(a) {
    return "undefined" != typeof a;
  };

  var isUndefinedOrNull = function(a) {
    return void 0 == a;
  };

  /**
   * Since certain versions of IE do not have this function we need to write a
   * wrapper around it and fake it if it doesn't exist.
   */
  SH._trim = function(str) {
    if (typeof String.prototype.trim !== 'function') {
      return str.replace(/^\s+|\s+$/g, '');
    } else {
      return str.trim();
    }
  };
  
  /**
   * Returns a string representation of an image element.
   * @param {string} src Name of image file to be loaded from the asset path
   * @param {object} opts Optional id and class values to be added to the image
   */  
  var image = function(src, opts) {
    return [
      '<img src="', asset, src, '" id="', opts['id'],
      '" class="', opts['class'], '" />'
    ].join('');
  };

  var addEvent = function (el, ev, fn) {
    if (el.addEventListener) {
      el.addEventListener(ev, fn, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + ev, fn);
    } else {
      el['on' + ev] = fn;
    }
  };

  /**
   * Returns the html representing the header bar of the widget.
   */
  SH.header = function() {
    return [
      '<div id="SH_header">', image('logo.png', {'id': 'SH_logo'}),
      '<h1>Skate Hamilton</h1>', '<div id="SH_input"><form id="SH_form">', 
      image('search.png', {'id': 'SH_submit'}), 
      '<input type="text" id="SH_q" value="', placeholder ,'" />',
      '</form></div>', '<div class="clearfix"></div>', '</div>'
    ].join('');
  };

  SH.loadRinks =  function() {
    var widget = document.getElementById('SH_container');

    // Hack to do a proper border without distorting the width of the map
    var con = document.createElement('div');
    con.style.border = '1px solid #999';
    con.style.borderTop = 'none';

    SH.mapCanvas = document.createElement('div');
    SH.mapCanvas.style.width = (SH.width - 2) + 'px';
    SH.mapCanvas.style.height = (SH.height - 44) + 'px';

    con.appendChild(SH.mapCanvas);
    widget.appendChild(con);

    SH.map = new MapWidget(SH.mapCanvas);

    var rinks = document.createElement('script');
    rinks.type = 'text/javascript';
    rinks.src = root + 'rinks/widget.json?callback=SH.rinks';

    (document.getElementsByTagName('head')[0]).appendChild(rinks);
  };

  SH.rinks = function(rinks) {
    SH._rinks = rinks;
    for (var key in rinks) {
      var rink = rinks[key];
      var a = {
        position: new google.maps.LatLng(rink.latitude, rink.longitude),
        map: SH.map.map,
        icon: asset + rink.rink_type + '.png',
        shadow: asset + 'marker-shadow.png',
        id: rink.id,
        title: rink.name
      };
      var y = rink.id;

      google.maps.event.addListener(new google.maps.Marker(a), 'click', function() {
        var r  = document.createElement('script');
        r.type = 'text/javascript';
        r.src  = root + 'rinks/' + this.id + '.json?callback=SH.popup&deep=true';

        (document.getElementsByTagName('head')[0]).appendChild(r);
      });
    }
  };

  SH.popup_tmpl = function(rink) {
    return [
      '<h1>', rink['name'], '</h1>', '<div class="close" id="SH_close">',
      '<div class="image"></div></div>', '<h3>', rink['address'], '&nbsp;&nbsp;', 
      '<span class="type">(', rink['rink_type'], ' Rink)</span></h3>',
    ].join('');
  };

  SH.popup = function(rink) {
    var d = document.getElementById('SH_popup');
    d.style.display = 'block';
    d.innerHTML = SH.popup_tmpl(rink);

    addEvent(document.getElementById('SH_close'), 'click', function() {
      d.style.display = 'none';
    })
  };

  SH.submit = function() {
    SH.map.geocode(document.getElementById('SH_q').value);
  };

  console.log(window.SH.el);

  // We need an element to attach ourselves to
  if (!isDefined(window.SH.el))
    return;
  else
    SH.el = window.SH.el;

  // Get widget confirguration options
  SH.height = (isUndefinedOrNull(window.SH.height)) ? 400 : window.SH.height;
  SH.width  = (isUndefinedOrNull(window.SH.width))  ? 400 : window.SH.width;

  var widget_container = document.getElementById(SH.el);

  console.log(widget_container);

  SH.widget              = document.createElement('div');
  SH.widget.id           = 'SH_container';
  SH.widget.style.height = SH.height + 'px';
  SH.widget.style.width  = SH.width + 'px';
  widget_container.appendChild(SH.widget);

  SH.widget.innerHTML = [
    SH.widget.innerHTML, SH.header(), '<div id="SH_popup">',
    '<div class="close">Close<div class="image"></div><div class="clearfix">',
    '</div></div></div>'
  ].join('');

  addEvent(document.getElementById('SH_q'), 'focus', function() {
    if (SH._trim(document.getElementById('SH_q').value) === placeholder)
      document.getElementById('SH_q').value = '';
  });

  addEvent(document.getElementById('SH_q'), 'blur', function() {
    if (SH._trim(document.getElementById('SH_q').value) === '')
      document.getElementById('SH_q').value = placeholder;
  });

  addEvent(document.getElementById('SH_submit'), 'click', function() {
    SH.submit();
    return false;
  });

  addEvent(document.getElementById('SH_form'), 'submit', function(e) {
    SH.submit();
    e.preventDefault();
    return false;
  });

  var gMap  = document.createElement("script");
  gMap.type = "text/javascript";
  gMap.src  = "https://maps.google.com/maps/api/js?sensor=true&callback=SH.loadRinks";
  (document.getElementsByTagName('head')[0]).appendChild(gMap);
})();
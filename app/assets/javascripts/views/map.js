SH.views.MapView = Backbone.View.extend({
  id: 'map',
  tagName: 'div',

  /**
   * Location the map is centered on if none is provided otherwise.
   * @type {google.maps.LatLng}
   */
  default_center: new google.maps.LatLng(43.24895389686911, -79.86236572265625),

  /**
   * Google maps configuration properties.
   * @type {object}
   */
  config: {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  },

  /**
   * Map marker that shows the current location on which the map is centered.
   * @type {google.maps.marker}
   */
  locationMarker: null,

  initialize: function() {
    _.bindAll(this, 'render', 'loaded', 'changed', 'focus', 'trigger');
    this.render();
  },

  /**
   * Initialize all the pins for this map once the map tiles are loaded.  Register
   * event handler to detect bounds changes on map which are triggered by scroll
   * or zoom actions.
   */
  loaded: function() {
    var self = this;

    // Setup all the pins but don't add to map
    this.pins = [];
    this.collection.each(function(rink) {
      self.pins.push(new SH.views.PinView({ model: rink }));
    });

    // Add listeners for when the map bounds may have changed
    var wait = _.bind(this.waitForIdle, this);
    google.maps.event.addListener(this.map_
                                , 'dragend'
                                , wait);
    google.maps.event.addListener(this.map_
                                , 'zoom_changed'
                                , wait);
    // Used by the application to hide certain UI elements when the map is moved
    google.maps.event.addListener(this.map_
                                , 'mousedown'
                                , _.bind(this.focus, this));

    // Now show pins within map bounds
    this.changed();

    google.maps.event.removeListener(this.loadEv);
  },

  /**
   * Updates the center the of the map.
   * @param {google.maps.LatLng} center New location the map should be centered on.
   */
  updateCenter: function(center) {
    // Remove existing marker from the map
    if (this.locationMarker)
      this.locationMarker.setMap(null);

    // Center on current location
    this.locationMarker = new google.maps.Marker({
      position: center,
      map: this.map_,
      title: "Current Location"
    });

    this.map_.setZoom(14);
    this.map_.setCenter(center);
  },

  /**
   * @param {String} ev Google maps API event trigger.
   */
  trigger: function(ev) {
    google.maps.event.trigger(this.map_, ev);
  },

  /**
   * After the map's bounds have been changed; wait for all events to finish 
   * firing before we update the pins on the map.
   */
  waitForIdle: function() {
    this.idle = google.maps.event.addListener(this.map_
                                            , 'idle'
                                            , _.bind(this.changed, this));
  },

  /**
   * Update the status of all the pins and determine whether they should be 
   * displayed on the map or not.
   */
  changed: function() {
    var self = this
      , bounds = this.getMapBounds();

    _.each(this.pins, function(pin) {
      if (bounds.contains(pin.marker_.position)) {
        if (pin.marker_.map == null) {
          pin.setMap(self.map_);
        }
      } else {
        pin.setMap(null);
      }
    });

    // Remove the event handler so that our changing function can reset it
    if (this.idle)
      google.maps.event.removeListener(this.idle);
  },

  /**
   * @return {google.maps.LatLngBounds} Bounding rectangle of the map
   */
  getMapBounds: function() {
    var b = this.map_.getBounds(),
      c = b.getNorthEast(),
      d = b.getSouthWest();
    return new google.maps.LatLngBounds(d, c)
  },

  render: function() {
    this.map_ = new google.maps.Map(this.el, this.config);
    this.updateCenter(this.default_center);
    this.loadEv = google.maps.event.addListener(this.map_
                                              , 'tilesloaded'
                                              , _.bind(this.loaded, this));
    return this;
  },

  /**
   * Called when the focus is "on" the map as a result of a mouse click/tap.
   * Triggers an action on the application event bus.
   */
  focus: function() {
    SH.app.vent.trigger('map:focus');
  }
});
SH.views.PinView = Backbone.View.extend({
  /**
   * URLs for all the map pin images.
   * @type {Object.<string, string>}
   */
  images: {
    'indoor': '/assets/indoor.png',
    'outdoor': '/assets/outdoor.png',
    'shadow': '/assets/marker-shadow.png'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'setMap');
    this.render();
  },

  /**
   * Generate the map marker images for this pin.
   */
  generateImages: function() {
    this.markerIcon = new google.maps.MarkerImage(
      this.images[this.model.get('rink_type')],
      new google.maps.Size(22, 31),
      new google.maps.Point(0,0),
      new google.maps.Point(0,31)
    );

    this.markerShadow = new google.maps.MarkerImage(
      this.images['shadow'], 
      new google.maps.Size(42,31), 
      new google.maps.Point(0,0), 
      new google.maps.Point(0,30)
    );
  },

  /**
   * Returns a new google map marker for use in this view.
   * @return {google.maps.Marker}
   */
  generateMarker: function() {
    this.generateImages();

    var a = {
      position: new google.maps.LatLng(this.model.lat(), this.model.lng()),
      map: null,
      icon: this.markerIcon,
      shadow: this.markerShadow,
      id: this.model.get('id'),
      title: this.model.name()
    };

    return new google.maps.Marker(a);
  },

  render: function() {
    this.marker_ = this.generateMarker();
    google.maps.event.addListener(this.marker_
                                , 'click'
                                , _.bind(this.click, this));
    return this;
  },

  /**
   * Changes the map this pin is attached to.
   * @param {google.maps.LatLng}
   */
  setMap: function(map) {
    this.marker_.setMap(map);
  },

  /**
   * Triggers an action on the event bus to have someone respond to this pin
   * being clicked.
   */
  click: function() {
    SH.app.vent.trigger('map:clicked', this.model.get('id'));
  }
});
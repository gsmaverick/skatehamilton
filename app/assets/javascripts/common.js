//= require underscore
//= require backbone
//= require handlebars
//= require bootstrap
//= require views/pin
//= require views/map

SH.views.MapMarkerView = Backbone.View.extend({
  /**
   * URLs for all the map marker images.
   * @type {array}
   */
  marker_images: {
    'indoor': '/assets/indoor.png',
    'outdoor': '/assets/outdoor.png',
    'shadow': '/assets/marker-shadow.png'
  },

  initialize: function(a) {
    this.lat = a.lat;
    this.lng = a.lng;
    this.title = a.name;
    this.id = a.id;

    this.markerIcon = new google.maps.MarkerImage(
      this.marker_images[a.type],
      new google.maps.Size(22, 31),
      new google.maps.Point(0,0),
      new google.maps.Point(0,31)
    );

    this.markerShadow = new google.maps.MarkerImage(
      this.marker_images['shadow'],
      new google.maps.Size(42,31), 
      new google.maps.Point(0,0), 
      new google.maps.Point(0,30)
    );

    this.marker_ = this.generateMarker();
    google.maps.event.addListener(this.marker_, 'click', _.bind(this.click, this));
  },

  generateMarker: function() {
    var a = {
      position: new google.maps.LatLng(this.lat, this.lng),
      map: SH.app.map,
      icon: this.markerIcon,
      shadow: this.markerShadow,
      id: this.id,
      title: this.title
    };

    return new google.maps.Marker(a);
  },
});
SH.views.DesktopHeaderView = Backbone.View.extend({
  el: '#header',

  /**
   * Default contents of the header search input field.
   * @type {string}
   */
  search_text: 'Enter address or rink name',

  events: {
    'submit form': 'submitForm',
    'click #search_submit': 'submitForm',
    'focus #search_address': 'focus',
    'blur #search_address': 'blur'
  },

  initialize: function() {
    // Google map glitch doesn't cause a blur event to be called
    // on the search input
    SH.app.vent.bind('map:focus', function() {
      this.$('#search_address').trigger('blur');
    }, this);
  },

  submitForm: function(e) {
    var self = this;
    _gaq.push(['_trackEvent', 'Search', 'Submit']);

    e.preventDefault();
    SH.utils.geocoder.geocode(
      {'address' : self.$('#search_address').val() + ' Hamilton, Ontario'}, 
      function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          SH.app.mapView.updateCenter(results[0].geometry.location);
          self.$('#search_address').val(self.search_text);
          self.$('#search_address').blur();
        }
      }
    );
  },

  /**
   * Event responders to fake placeholder capabilities for the search 
   * input.
   * @param {Event} e
   */
  focus: function(e) {
    if (e.target.value.trim() == this.search_text)
      e.target.value = "";
  },
  
  /**
   * @param {Event} e
   */
  blur: function(e) {
    if (e.target.value.trim() == '')
      e.target.value = this.search_text;
  }
});
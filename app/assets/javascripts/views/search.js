SH.views.SearchView = Backbone.View.extend({
  id: 'search_container',
  tagName: 'div',
  template_id: '#search-template',

  events: {
    'submit form': 'submit',
    'click #current': 'center'
  },

  initialize: function() {
    this.vent = SH.app.vent;

    this.render();
  },

  submit: function(e) {
    e.preventDefault();
    _gaq.push(['_trackEvent', 'Search', 'Submit']);
    this.vent.trigger('search:submit');
  },

  center: function() {
    _gaq.push(['_trackEvent', 'Search', 'Geolocate']);
   this.vent.trigger('search:geolocate');
  },

  render: function() {
    var template = Handlebars.compile($(this.template_id).html());
    $(this.el).html(template({
      geo: (navigator.geolocation) ? true : false
    }));

    return this;
  }
});
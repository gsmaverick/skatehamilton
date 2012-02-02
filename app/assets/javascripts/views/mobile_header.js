SH.views.MobileHeaderView = Backbone.View.extend({
  el: '#header',

  events: {
    'click #search': 'search',
    'click #back': 'back',
    'click #map_btn': 'map',
    'click #list_btn': 'list'
  },

  elems: ['back', 'details', 'search_title', 'bottom', 'search'],

  initialize: function() {
    this.vent = SH.app.vent;
    _.bindAll(this, 'setState');
  },

  /**
   * Fires off a search event when the search button is clicked.  Also tracks
   * this event in Google Analytics.
   * @param {Event} e Zepto event information.
   */
  search: function(e) {
    e.preventDefault();
    _gaq.push(['_trackEvent', 'Search', 'Start']);
    this.vent.trigger('search:start');
  },

  /**
   * Returns the application back to the index state by triggering an event on
   * the application event bus.
   * @param {Event} e Zepto event information.
   */
  back: function(e) {
    e.preventDefault();
    this.vent.trigger('index');
  },

  /**
   * Sets the state of the header
   * @param {Array.<String>} s List of all the elements that should be visible 
   * in the header.
   */
  setState: function(s) {
    for (var i in this.elems) {
      var item = this.elems[i];
      $(this.el).children('#' + item).first()
                .css('display', (_.include(s, item)) ? 'block' : 'none');
    }
  },

  /**
   * Event handler for showing rinks in map form.
   */
  map: function(e) {
    $(this.el).children('#bottom').first().children('#list_btn').first().removeClass('active_right');
    $(this.el).children('#bottom').first().children('#map_btn').first().addClass('active_left');

    SH.app.vent.trigger('map:show');
  },

  toMap: function() {
    $(this.el).children('#bottom').first().children('#list_btn').first().removeClass('active_right');
    $(this.el).children('#bottom').first().children('#map_btn').first().addClass('active_left');
  },

  /**
   * Event handler for showing rinks in list form.
   */
  list: function(e) {
    $(this.el).children('#bottom').first().children('#list_btn').first().addClass('active_right');
    $(this.el).children('#bottom').first().children('#map_btn').first().removeClass('active_left');

    SH.app.vent.trigger('list:show');
  }
});
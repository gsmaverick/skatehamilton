SH.views.RinkListItemView = Backbone.View.extend({
  className: 'rink_item',
  tagName: 'li',
  template_id: '#rink-list-item-template',

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    var template = Handlebars.compile($(this.template_id).html());
    $(this.el).html(template(this.model.toJSON()));

    return this;
  }
});

SH.views.RinkListView = Backbone.View.extend({
  id: 'rink_list',
  tagName: 'div',
  template_id: '#rink-list-template',
  active_page: 1,

  events: {
    'click .rink_item': 'rink',
    'click .filter': 'filter',
    'scroll #rinks': 'scroll'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'filter', 'scroll');

    this.currentCollection = this.collection;
    this.scrollListener = null;
  },

  filter: function(e) {
    var type = $(e.target).attr('data-type');
    this.currentCollection = new SH.collections.Rinks(
      this.collection.filter(function(rink) {
        return (rink.get('rink_type').indexOf(type) != -1);
      })
    );

    this.render();
  },

  /**
   * Renders a collection of ListItemViews and appends them to the UL child 
   * element.
   * @param {Array.<SH.models.Rink>} col Set of rinks to append to the list.
   */
  renderItems: function(col) {
    var self = this;

    _.each(col, function(rink) {
      var view = new SH.views.RinkListItemView({
        model: rink,
        id: rink.get('id')
      });
      self.$('ul').append(view.el);
    });
  },

  /**
   * Returns the next set of 10 items in the current active collection.
   */
  getItems: function() {
    var n = this.active_page
      , arr = this.currentCollection.toArray();
    
    this.active_page += 1;
    return arr.slice((n - 1) * 10, n * 10);
  },

  render: function() {
    var self = this
      , template = Handlebars.compile($(this.template_id).html())
      , location = SH.app.mapView.locationMarker;

    $(this.el).html(template());

    this.active_page = 1;

    // Sort by closest to this location
    this.currentCollection = new SH.collections.Rinks(
      this.currentCollection.sortBy(function(rink) {
        return Math.sqrt(Math.pow(rink.lat() - location.position.lat(), 2) 
                       + Math.pow(rink.lng() - location.position.lng(), 2));
      })
    );

    this.renderItems(this.getItems());

    if (!this.scrollListener)
      this.scrollListener = this.$(window).scroll(this.scroll);

    return this;
  },

  /**
   * Handles a click on a list element and updates the browser location, calling
   * the appropriate handler.
   */
  rink: function(e) {
    SH.app.Router.navigate('/rinks/' + e.currentTarget.id, true);
  },

  /**
   * Loads more rinks when the user reaches the bottom of the list view.  Once 
   * the bottom of the page is reached it no longer shows the loading view.
   */
  scroll: function(e) {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      var rinks = this.getItems();
      if (rinks.length == 0 || rinks.length < 10)
        this.$('#loader').hide(), this.scrollListener = null;
      else
        this.renderItems(this.getItems());
    }
  }
});
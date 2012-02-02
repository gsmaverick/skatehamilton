//= require jquery
//= require underscore
//= require backbone
//= require handlebars

//= require bootstrap
//= require_tree ./models
//= require_tree ./views

/**
 * @fileoverview Desktop specific javascript code for SkateHamilton.
 * @author gavin.schulz@gmail.com (Gavin Schulz)
 */

 // Application event bus
SH.app.vent = _.extend({}, Backbone.Events);

/**
 * Utility function to get size of browser viewport.
 * @return {array} An array containing the height, width and scrollTop of the browser.
 */
SH.getViewport = function() {
  var w = h = o = 0,
      a = 'undefined',
      b = document.getElementsByTagName('body')[0],
      c = document.documentElement,
      d = window.innerWidth;
  if (typeof d != a)
    w = d, h = window.innerHeight;
  else if (typeof c != a && typeof c.clientWidth != a && c.clientWidth != 0)
    w = c.clientWidth, h = c.clientHeight, o = c.scrollTop;
  else
    w = b.clientWidth, h = b.clientHeight, o = b.scrollTop;
  return [w, h, o];
};

/**
 * Adjusts the height of all fixed height elements when the screen is resized 
 * so as to prevent scrollbars from appearing.
 */
SH.doLayout = function() {
  var bodyHeight = SH.getViewport()[1];
  bodyHeight = (bodyHeight < 400) ? 400 : bodyHeight;

  var contentHeight = (bodyHeight - 44);

  $('#map').css('height', contentHeight + 'px');    
  $('#left_panel').css('height', contentHeight + 'px');
  $('#map_canvas').css('height', contentHeight + 'px');
};

SH.app.rink = function(id) {
  _gaq.push(['_trackEvent', 'Rinks', 'Load', id]);

  var rink = SH.app.Rinks.get(id);

  // Render a RinkView in the left panel
  (new SH.views.RinkView({el: '#left_content', model: rink})).render();
  window.addthis_share = {
    url: 'http://skatehamilton.herokuapp.com/rinks/' + rink.get('id'),
    title: rink.get('name') + ' - Skate Hamilton',
    description: 'Find skating rinks in Hamilton!'
  };
  window.addthis.toolbox('#share');
  SH.app.left_panel_control.togglePanel(true);
};

SH.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    '/rinks/:id': 'rink',
    '.*actions': 'index'
  },

  index: function() {
    this.init();
  },

  rink: function(id) {
    this.init();

    // Get the rest of the rink information from the server
    var rink = SH.app.Rinks.get(id);

    rink.fetch({success: function() {
      // Render a RinkView in the left panel
      (new SH.views.RinkView({el: '#left_content', model: rink})).render();
      var addthis_share = {
        url: 'http://skatehamilton.herokuapp.com/rinks/' + rink.get('id'),
        title: rink.get('name') + ' - Skate Hamilton',
        description: 'Find skating rinks in Hamilton!'
      };
      window.addthis.toolbox('#share', {}, addthis_share);
      SH.app.left_panel_control.togglePanel(true);
      $('#entrance').show();
    }, data: {deep: true}});
  },

  /**
   * Common initialization tasks that need to be done on every page load.  This
   * sets up all the views and the map callbacks.
   */
  init: function() {
    // Load rink data
    SH.app.Rinks = new SH.collections.Rinks(window.rinks),
    SH.app.mapView = new SH.views.MapView({ collection: SH.app.Rinks, el: '#map' });

    window.onresize = SH.doLayout; // TODO: orientation change event

    // Construct all our views and attach them to existing elements
    SH.app.left_panel_control = new SH.views.LeftPanelControlView();
    SH.app.left_panel = new SH.views.LeftPanelView();
    SH.app.header = new SH.views.DesktopHeaderView();

    SH.doLayout();
    // Make sure panel is displayed
    SH.app.left_panel_control.togglePanel(true);

    SH.app.vent.bind('map:clicked', SH.app.rink);
  },
});

$(document).ready(function() {
  var Router = new SH.Router();
  Backbone.history.start();
});
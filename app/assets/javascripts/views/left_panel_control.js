SH.views.LeftPanelControlView = Backbone.View.extend({
  el: '#left_panel_control',

  events: {
    'click #button_in': 'togglePanel',
    'click #button_out': 'togglePanel'
  },

  initialize: function() {
    _.bindAll(this, 'togglePanel');
  },

  /**
   * Toggles the left panel 
   * @param {bool} show Flag to force the showing of the panel.
   *
   */
  togglePanel: function(show) {
    if ($('#contents').css('display') == 'none' || 
        (typeof show === 'boolean' && show == true)) {
      $('#button_in').css('display', 'none');
      $('#button_out').css('display', 'block');
      $('#contents').css('display', 'block');
      $('#left_panel').css('width', '400px');
      $('#button_out').css('left', '404px');
      $('#button_in').css('left', '404px');
      $('#map').css('margin-left', '400px');
    } else {
      $('#contents').css("display", "none");
      $('#left_panel').css("width", "0px");
      $('#button_out').css('display', 'none');
      $('#button_in').css('display', 'block');
      $('#button_out').css('left', '4px');
      $('#button_in').css('left', '4px');
      $('#map').css("margin-left", "0px");
    }

    if (SH.app.mapView)
      SH.app.mapView.trigger('resize');
  }
});
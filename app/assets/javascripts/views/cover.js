SH.views.CoverView = Backbone.View.extend({
  el: '#bubble_container',

  events: {
    'click .tap-closeable': 'close'
  },

  close: function() {
    var x = document.getElementsByTagName("body")[0];
    x.style.cssText = "padding-bottom: 0px !important";
    $('#bubble_container').remove();
    $('#cover').remove();
  },

  initialize: function() {
    _.bindAll(this, 'close');
    $('#bubble_container').css('display', 'block');
    $('#cover').css('display', 'block');
  }
});
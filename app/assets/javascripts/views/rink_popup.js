SH.views.RinkPopupView = Backbone.View.extend({
  id: 'rink_popup',
  tagName: 'div',
  template_id: '#rink-popup-template',

  events: {
    'click #inside': 'click'
  },

  render: function() {
    var template = Handlebars.compile($(this.template_id).html());
    $(this.el).html(template(this.model.toJSON()));

    return this;
  },

  click: function() {
    SH.app.Router.navigate('/rinks/' + this.model.get('id'), true);
  }
});
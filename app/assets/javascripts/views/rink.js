SH.views.RinkView = Backbone.View.extend({
  id: 'rink_details',
  className: 'rink_details',
  tagName: 'div',
  template_id: '#rink-view-template',

  render: function() {
    var self = this;

    // Render the "parent" view
    var template = Handlebars.compile($(this.template_id).html());
    $(this.el).html(template(this.model.toJSON()));

    if (this.model.hasActivities()) {
      this.model.get('activities').each(function(activity) {
        var view = new SH.views.ActivityView({ model: activity });
        self.$('#activities').append(view.render().el);
      });
    }

    return this;
  }
});
SH.views.ActivityView = Backbone.View.extend({
  tagName: 'tbody',

  render: function() {
    var self = this;

    this.model.get('times').each(function(time, index) {
      var view = new SH.views.ActivityTimeView({ model: time });
      $(self.el).append(view.render(index, self.model).el);
    });

    return this;
  }
});

SH.views.ActivityTimeView = Backbone.View.extend({
  tagName: 'tr',
  template_id: '#activity-view-template',

  initialize: function() {
    // Add some inline HTML attributes
    $(this.el).attr('width', '100%');
    $(this.el).attr('style', 'vertical-align: top');
  },
  
  render: function(index, activity) {
    var template = Handlebars.compile($(this.template_id).html());
    $(this.el).html(template({
      'name':  (index > 0) ? '' : activity.get('name'),
      'day':   this.model.days(),
      'times': this.model.times(),
      'class': (index + 1 == activity.get('times').length) ? 'last' : '',
      'rows':  (index == 0) ? activity.get('times').length : null
    }));

    return this;
  }
});
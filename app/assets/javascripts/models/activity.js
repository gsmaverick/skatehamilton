// Activity Model
SH.models.Activity = Backbone.Model.extend({
  initialize: function() {
    this.set({
      times: new SH.collections.ActivityTimes(this.get('activity_times'))
    });
  }
});

SH.collections.Activities = Backbone.Collection.extend({
  model: SH.models.Activity
});

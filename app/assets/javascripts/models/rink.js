SH.models.Rink = Backbone.Model.extend({
  initialize: function() {
    this.set({
      type: this.get('rink_type').charAt(0).toUpperCase() + 
            this.get('rink_type').slice(1),
      lat: this.get('latitude'),
      lng: this.get('longitude'),
      activities: new SH.collections.Activities(this.get('activities')),
      hasActivities: ((this.get('activities').length == 0) ? false : true)
    });
  },

  // Basic accessor methods
  activities: function()    { return this.get('activities'); },
  address: function()       { return this.get('address'); },
  hasActivities: function() { return this.get('hasActivities'); },
  lat: function()           { return this.get('latitude'); },
  lng: function()           { return this.get('longitude'); },
  name: function()          { return this.get('name'); },
  note: function()          { return this.get('note'); },
  type: function()          { return this.get('type'); },
  _type: function()         { return this.get('rink_type'); },
});

SH.collections.Rinks = Backbone.Collection.extend({
  model: SH.models.Rink,
  url: '/rinks'
});
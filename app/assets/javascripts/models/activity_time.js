SH.models.ActivityTime = Backbone.Model.extend({
  /**
   * Textual abbreviations of days of the week.
   * @type {Array.<string>}
   */
  abbr: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],

  /**
   * Creates a UI-ready listing of all the days this activity is offered 
   * seperated by commas.
   * @return {string} A commas seperated list of days by abbreviation.
   */
  days: function() {
    var s = '';
    for(var j = 0, n = this.get('days'), nl = n.length; j < nl; j++)
      if (n[j] == '1')
        s += this.abbr[j] + ', ';
    
    return s.slice(0, -2);
  },

  /**
   * Reformats the stored time and converts it into a 12-hour time.
   * @return {string} User displayable time.
   */
  times: function() {
    // Force base-10 integer parsing
    var startHour    = parseInt(this.get('start_time').slice(0,2), 10);
    var startMinutes = parseInt(this.get('start_time').slice(3,5), 10);
    var endHour      = parseInt(this.get('end_time').slice(0,2), 10);
    var endMinutes   = parseInt(this.get('end_time').slice(3,5), 10);

    startMinutes = (startMinutes == 0) ? '' : ':' + startMinutes;
    endMinutes   = (endMinutes == 0)   ? '' : ':' + endMinutes;

    if (startHour > 12)
      startHour = '' + (startHour - 12);

    if (endHour >= 12)
      endHour = ((endHour > 12) ? (endHour - 12) : endHour) + endMinutes + 'pm';
    else if (endHour < 12)
      endHour += endMinutes + 'am';

    return startHour + startMinutes + '-' + endHour;
  },
});


SH.collections.ActivityTimes = Backbone.Collection.extend({
  model: SH.models.ActivityTime
});

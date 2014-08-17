SUNCHAMBER.Router.map(function() {
  // put your routes here
});

SUNCHAMBER.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('Temperature').then(function (temp) {
            return temp.sortBy('date').objectAt(temp.get('length') - 1);
        });
    }
});

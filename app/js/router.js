SUNCHAMBER.Router.map(function() {
  // put your routes here
});

SUNCHAMBER.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('CurrentTemp').then(function (temp) {
            return temp.objectAt(temp.get('length') - 1);
        });
    }
});

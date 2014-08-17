SUNCHAMBER.Router.map(function() {
    this.route("test");
});

SUNCHAMBER.IndexRoute = Ember.Route.extend({
    // model: function() {
    //     return this.store.find('Temperature').then(function (temp) {
    //         return temp.sortBy('date').objectAt(temp.get('length') - 1);
    //     });
    // },
    setupController: function(controller, song) {
        controller.set('model', {
            acStatus : 'off',
            temps : this.store.find('Temperature'),
            currentTemp: 10
        });
    },
    // model: function() {
    //     return {
    //         acStatus : 'off',
    //         temps : this.store.find('Temperature').then(function (temp) {
    //             return temp.sortBy('date').objectAt(temp.get('length') - 1);
    //         })
    //     }
    // },
    activate: function() {
            _this = this;

        SUNCHAMBER.socket.on('ac-status', function (data) {
            //toggleButton(data.status);
        });

        SUNCHAMBER.socket.on('current-temp', function (data) {
            console.log(data);
            var temp = _this.store.createRecord('Temperature',   {
                    value:  data.f,
                    date: Date.now()
                });
        });
    }
});

SUNCHAMBER.TestRoute = Ember.Route.extend({
    model: function() {
        return {
            acStatus : 'off',
            temp : this.store.find('Temperature')
        }
    },
    activate: function() {
        var socket = io.connect('http://' + location.host),
            _this = this;

        SUNCHAMBER.socket.on('ac-status', function (data) {
            //toggleButton(data.status);
        });

        SUNCHAMBER.socket.on('current-temp', function (data) {
            var temp = _this.store.createRecord('Temperature',   {
                    value:  data.f,
                    date: Date.now()
                });
        });
    }
});

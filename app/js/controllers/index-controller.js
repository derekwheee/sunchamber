SUNCHAMBER.IndexController = Ember.ObjectController.extend({

    currentTemp : function() {
        var temps = this.get('model.temps'),
            temp = function () {
                var lastTemp = temps.objectAt(temps.get('length') - 1);

                if (lastTemp && lastTemp.hasOwnProperty('value')) {
                    console.log(lastTemp.value);
                    return lastTemp.value;
                } else {
                    console.log(0);
                    return 0;
                }
            };



        return temps.then(function() {
            var lastTemp = temps.objectAt(temps.get('length') - 1);

            if (lastTemp && lastTemp.hasOwnProperty('value')) {
                console.log(lastTemp.value);
                return lastTemp.value;
            } else {
                console.log(0);
                return 0;
            }
        });
    }.property('model.temps')

});

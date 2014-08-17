window.SUNCHAMBER = Ember.Application.create();

SUNCHAMBER.ApplicationAdapter = DS.FixtureAdapter.extend();

// Setup websockets
SUNCHAMBER.socket = io.connect('http://' + location.host);

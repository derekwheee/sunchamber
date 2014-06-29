var express = require('express');
    app     = express(),
    server  = require('http').Server(app),
    io      = require('socket.io')(server),
    port    = Number(process.env.PORT || 5000);

server.listen(port, function() {
    console.log("Listening on " + port);
});

app.use(express.static(__dirname + '/'));

io.on('connection', function (socket) {

    socket.emit('connected', { status : 'Something will go here' });

    socket.on('event', function (data) {
        console.log('Some event data will go here');
    });

});

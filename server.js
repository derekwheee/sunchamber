var express = require('express');
    app     = express(),
    server  = require('http').Server(app),
    io      = require('socket.io')(server),
    port    = Number(process.env.PORT || 5000),

    acStatus = {
        status : 'off'
    };

server.listen(port, function() {
    console.log("Listening on " + port);
});

app.use(express.static(__dirname + '/app/'));

io.on('connection', function (socket) {

    socket.emit('ac-status', acStatus);

    socket.on('ac', function (data) {
        acStatus = data;
        io.emit('ac-status', acStatus);
    });

    socket.on('new-temp', function (data) {
        io.emit('current-temp', data);
    });

});

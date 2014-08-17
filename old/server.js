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

app.use(express.static(__dirname + '/'));

io.on('connection', function (socket) {

    socket.emit('ac-status', acStatus);

    socket.on('ac', function (data) {
        console.log(data);
        acStatus = data;
        io.emit('ac-status', acStatus);
    });

    socket.on('new-temp', function (data) {
        console.log(data);
        io.emit('current-temp', data);
    });

});

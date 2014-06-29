var socket = io.connect('http://' + location.host);

socket.on('connected', function (data) {
    console.log(data);
});

$('button').click(function () {
    socket.emit('event', { my: 'data' });
});

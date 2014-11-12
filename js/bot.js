var socket = io();

$(function () {

    var $button = $('.button');

    $button.on('mousedown', function () {

        var data = {
            direction : $(this).attr('data-direction'),
            state     : 1
        };

        socket.emit('control', { data : data });

    });

    $button.on('mouseup', function () {

        var data = {
            direction : $(this).attr('data-direction'),
            state     : 0
        };

        socket.emit('control', { data : data });

    });

});

var socket = io.connect('http://' + location.host),
    toggleButton = function (status) {
        var $button = $('.ac-toggle'),
            text = status === 'on' ? 'Off' : 'On';

        if (status === 'on') {
            $button.addClass('on');
        } else {
            $button.removeClass('on');
        }

        $button.text('Turn A/C ' + text);
    }

socket.on('ac-status', function (data) {
    toggleButton(data.status);
});

socket.on('current-temp', function (data) {
    $('.current-temp').text(data.f);
});

$('.ac-toggle').click(function () {
    var acStatus = $(this).hasClass('on') ? 'off' : 'on';
    toggleButton(acStatus);
    socket.emit('ac', { status: acStatus });
});

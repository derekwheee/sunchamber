The Sun Chamber
==========

### What is this?

The Sun Chamber is a Node/Socket.io web application. I use it in conjunction with
[arduino](https://github.com/frxnz/arduino) to monitor the temperature of my
apartment and turn my air conditioner on and off.

### How does it work?
The Sun Chamber is a websocket server that lives on The Internet. I run a Node
websocket client on my local machine. The client uses
[johnny-five](https://github.com/rwaldron/johnny-five) to control an Arduino.
The Arduino has a temperature sensor for monitor temperature, and a relay for
controlling the air conditioner.

The whole setup is written 100% in JavaScript.

### Can I control your air conditioner?
Technically you could, but usually I'm not actually running the Node client.

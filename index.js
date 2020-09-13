var net = require('net');
var five = require('johnny-five'); 
var mock = require('mock-require');
mock('@serialport/bindings', '@serialport/binding-mock'); //Elegant way to disable hardware SerialPort that is not available in Termux
var firmata = require('firmata'); //Firmata implementation for Johnny-Five

var options = {
  host: 'localhost',  //host name or IP address
  port: 8000  //some port
}
var client = net.connect(options, function() { 

  console.log('Connected to the server!');
  
  var socketClient = this;
  var io = new firmata.Board(socketClient);

  io.once('ready', function(){
    console.log('IO ready!');
    io.isReady = true;

    var board = new five.Board({io: io, repl: true});

    board.on('ready', function(){
      console.log('Board connected!');
      //Full Johnny-Five code here:

      var led = new five.Led(13);
      led.blink();

      //End of user code
    });
  });

});
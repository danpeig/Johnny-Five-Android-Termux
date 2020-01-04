var net = require('net');
var five = require('johnny-five');
var mock = require('mock-require');

mock('@serialport/bindings', '@serialport/binding-mock'); //Elegant way to disable hardware SerialPort that is not available in Termux
//process.env.IS_TEST_MODE = true; //Dirty trick to disable hardware SerialPort that is not available in Termux

var firmata = require('firmata');


var options = {
  host: 'localhost',  //host name or IP address
  port: 8000  //some port
}
var client = net.connect(options, function() { //'connect' listener
  console.log('connected to server!');
  
  var socketClient = this;

  //we can use the socketClient instead of a serial port as our transport
  var io = new firmata.Board(socketClient);

  io.once('ready', function(){
    console.log('io ready');
    io.isReady = true;

    var board = new five.Board({io: io, repl: true});

    board.on('ready', function(){
      console.log('five ready');

      //Full Johnny-Five support and your code here:

      var led = new five.Led(13);
      led.blink();

      //End of user code

    });
  });

});
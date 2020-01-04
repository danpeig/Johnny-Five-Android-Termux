# Johnny-Five-Android-Termux
 Johnny-Five TCP script for Android devices running Termux. Works with USB-OTG connected boards.

 Based on the code snippets from [Luis Montes](https://github.com/monteslu).

 ## Introduction

 Johnny-Five is an outstanding library that allows the remote control of Arduino or other IoT boards using Node.js scripts running in virtually in any system.

 Android mobile phones have all the perks you would want for your Arduino board (screen, real time clock, storage, LTE/GSM, sensors, WiFi, Bluetooth, Cameras, UPS, charging circuits, microphones, etc...). Combining the processing power of an old phone with the IO ports offered by the Arduino circuits is the ultimate ecological and cheap way to have the perfect IoT device.

 This script allows Johnny-Five to run from a Termux terminal communicating with other Android apps or external devices by using the TCP protocol without root. The reason for the TCP protocol is that Termux still does not implement USB-OTG to Serial drivers, and the vanilla Johnny-Five would hang right out the box.

 If you want to connect the board in the same device using the USB-OTG port you will just need a TCP bridge application. I added bellow some free and paid options.

 ## Requirements

 ### Android apps
 * [Termux](https://termux.com/)
 * [ServerBridgeX](https://play.google.com/store/apps/details?id=com.cidtepole.serverbridge&hl=en) or [UART-TCP/IP Bridge](https://play.google.com/store/apps/details?id=com.t2techhub.iot.uarttcpbridge&hl=en) if the board is connected via USB-OTG

 ### PC apps
 * [Bitvise SSH client](https://www.bitvise.com/ssh-client-download) (optional to access the Android Termux terminal)
 * [Arduino IDE](https://www.arduino.cc/en/Main/Software) to program the Arduino board with the Firmata sketch
 * [COMbyTCP](https://sourceforge.net/projects/combytcp/) to use the PC as server (optional)

 ### Termux packages
 * node-lte
 * python
 * clang
 * make
 * [openssh](https://wiki.termux.com/wiki/Remote_Access) (optional to make your life easy)

 ## Installation
 1. Install the Firmata sketch in your Arduino/IoT board. Detailed instructions can be found [in the Johnny-Five platform pages](http://johnny-five.io/platform-support/).
 2. Install the Termux packages using the command *pkg install* followed by each one of the package names.
 3. Download the *index.js* and *package.json* to a directory in your Termux file system.
 4. Run the command *npm install* from the same folder where the previous files were placed.
 5. Edit the *index.js* file and configure for your TCP-Serial Server host and port.
 6. Test the script running *node index.js* from the same directory.

## Node-Red integration
Node-Red, the ultimate IoT interface can be run from Termux and the following [tutorial in my web page](https://www.danbp.org) explains how to make use of Johnny-Five library in this framework.

## FAQ
* **What is the default baud rate for Firmata?**
Start with 57600bps and then increase/decrease if necessary.

* **Do I need to root my Android device in order to access the Arduino board using USB?**
No. Just use a USB-Serial to TCP bridge app and you are fine.

* **I can't connect to a TCP server broadcasting in my own WiFi network**
Please make sure that your Android is not running a VPN or a Firewall.

* **Running out of disk space in the Android device**
After the installation you can remove the python, clang and make packages.

## Troubleshooting
1. Install Node.js in your Laptop/Desktop and run exactly the same installation procedures above.
2. Run the TCP server (like the COMbyTCP) in the same computer and try to connect between the board and the local installation of this script. If it does not work, you might have a problem with the Firmata installation in the Arduino board.
3. If the connection works, keep the TCP server running in the computer and try to connect from the mobile device. If does not work you have a connectivity problem in the Android device.
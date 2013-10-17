// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var demo2 = require('titutorial.demo2');
Ti.API.info("module is => " + demo2);

var proxy = demo2.createExample({
	height : '65dp',
	top: '50dp',
	backgroundColor:'orange'
});
win.add(proxy);

win.open();


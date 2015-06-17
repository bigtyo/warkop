

var net = require('net');

var _chat_cont = require("./Controllers/connection");

var server = net.createServer(function (socket) {
	console.log("server created");
  //socket.write('Welcome to warkop chat, have a coffee!');
  //socket.pipe(socket);
  
});
var _io = require('socket.io')(server);

_chat_cont.init(_io);

server.listen(1337, '127.0.0.1');

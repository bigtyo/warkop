/**
 * New node file
 */

var _io;


var handler = function(socket){
	console.log("connection ready");
	socket.on('chat message', function(msg){
		console.log("msg :" + msg);
		_io.emit('chat message', msg);
		
	});
};

var init = function(io){
	_io = io;
	_io.on('connection', handler);
};




exports.init = init;
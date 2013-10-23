var _ = require('underscore'),
	

var Server = function (serverOptions) {
	var io = require('socket.io').listen(serverOptions.port);

	io.sockets.on('connection', function (socket) {
		socket.on('hello', function (data) {
			socket.on('action', function (data) {

			});
		});
	});

}

exports.start = function (serverOptions) {
	var defaultServerOptions = require('./default.js').serverOptions;
	_.extend(defaultServerOptions, serverOptions);

	var server = new Server(serverOptions);
}
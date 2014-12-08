var fs = require('fs');

exports.createLogFile = function(log) {

	var stream = fs.createWriteStream("./log.txt");

	stream.once('open', function(fd) {
		stream.write(log);
		stream.end();
	});

};
var fs = require('fs');

exports.createLogFile = function(log) {

	var stream = fs.createWriteStream("./log.txt");

	stream.once('open', function(fd) {
		for (var i = 0; i < log.length; i++) {
			stream.write(log[i]);
		}
		stream.end();
	});

}
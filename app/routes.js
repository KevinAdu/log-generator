module.exports = function(app) {

	var logFile = '';

	app.post('/log', function(req, res) {
		var log = buildLog(req.body);
		console.log(log);
		res.send(log);
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

	function buildLog(logFormat) {
		var log = [];
		for (var j = 0; j < logFormat.count; j++) {
			log.push(generateLogEntry(logFormat.types));
		}

		return log;
	}

	function generateLogEntry(dataTypes) {
		var logEntry = [];
		for (var i = 0; i < dataTypes.length; i++) {
			logEntry.push(generateField(dataTypes[i]));
		}

		return logEntry;
	}

	function generateField(dataType) {
		var field;

		if (dataType = 'Number') {
			field = Math.floor(Math.random() * 1000);
		}

		return field;
	}
	
}
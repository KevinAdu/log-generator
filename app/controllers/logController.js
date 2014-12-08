	var Chance = require('chance');
	var moment = require('moment');

	exports.buildLog = function(logFormat) {
		var log = '';
		for (var j = 0; j < logFormat.count; j++) {
			log += generateLogEntry(logFormat.types);
		}

		return log;
	};

	function generateLogEntry(dataTypes) {
		
		var logEntry = '',
		formatChar = ' ';
		for (var i = 0; i < dataTypes.length; i++) {

			if (dataTypes.length - 1 == i) {
				formatChar = '\n';
			}

			logEntry += generateField(dataTypes[i]) + formatChar;

		}

		return logEntry;
	}

	function generateField(dataType) {
		var field,
			chance = new Chance(Math.random);

		if (dataType == 'Number') {
			field = Math.floor(Math.random() * 1000);
		} else if (dataType == 'IP Address') {
			field = chance.ip();
		} else if (dataType == 'Date/Time') {
			field = moment(chance.timestamp()).format();
		} else if (dataType == 'Name') {
			field = chance.name();
		} else if (dataType == 'Credit Card Number') {
			field = chance.cc();
		}
		
		return field;
	}
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
	chance = new Chance(Math.random),
	type = dataType.name;

	if (type == 'Number') {
		field = Math.floor(Math.random() * 1000);
	} else if (type == 'IP Address') {
		field = chance.ip();
	} else if (type == 'Date/Time') {
		var minDate =  moment(dataType.options.fromDate).valueOf(),
		maxDate = moment(dataType.options.toDate).valueOf();
		field = moment(chance.timestamp({
			min: minDate,
			max: maxDate
		})).format();


	} else if (type == 'Name') {
		field = chance.name();
	} else if (type == 'Credit Card Number') {
		field = chance.cc();
	}

	return field;
}
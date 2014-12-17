	var Chance = require('chance');
	var moment = require('moment');

	exports.buildLog = function(logFormat) {
		var log = '';
		for(var i = 0; i < logFormat.count; i++) {

			log += generateLogEntry(logFormat.types, logFormat.count, i);
		}

		return log;
	};

	function generateLogEntry(dataTypes, count, entryIteration) {
		
		var logEntry = '',
		formatChar = ' ';
		
		for (var i = 0; i < dataTypes.length; i++) {

			if (dataTypes.length - 1 == i) {
				formatChar = '\n';
			}

			logEntry += generateField(dataTypes[i], count, entryIteration) + formatChar;
		}

		return logEntry;
	}

function generateField(dataType, count, iteration) {

	var field,
	chance = new Chance(Math.random),
	type = dataType.name,
	rate = (dataType.options.rate > 0 ? Math.round((dataType.options.rate/100) * count) : 0);

	if (type == 'Number') {
		field = chance.floating({fixed: dataType.options.decimal});
	} else if (type == 'IP Address') {
		field =  (rate > iteration) ?  dataType.options.repeated : chance.ip();
	} else if (type == 'Date/Time') {

		var minDate =  moment(dataType.options.fromDate).valueOf(),
		maxDate = moment(dataType.options.toDate).valueOf();
		field = moment(chance.timestamp({
			min: minDate,
			max: maxDate
		})).format();

	} else if (type == 'Name') {
		field =  (rate > iteration) ?  dataType.options.repeated : chance.name();
	} else if (type == 'Credit Card Number') {
		field =  (rate > iteration) ?  dataType.options.repeated : chance.cc();
	}

	return field;
}
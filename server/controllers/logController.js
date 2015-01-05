	var Chance = require('chance');
	var moment = require('moment');

	exports.buildLog = function(logFormat) {
		var log = [],
			dateIndex = indexOfDate(logFormat.types);

		for(var i = 0; i < logFormat.count; i++) {
			log.push(generateLogEntry(logFormat.types, logFormat.count, i));
		}

		return stringify(sort(log, dateIndex));
	};

	function indexOfDate(logTypes) {
		var index = -1;

		for (var i = 0; i < logTypes.length; i++) {
			if (logTypes[i].name === 'Date/Time') {
				index = i;
			}
		}

		return index;
	}

	function sort(log, index) {
		return log.sort(function(a, b) {
			return new Date(a[index]) - new Date(b[index]);
		});
	}

	function stringify (log) {

		var logString = '';

		for (var i = 0; i < log.length; i++) {

			var formatChar = ',',
			logEntrySting = '';

			for (var j = 0; j < log[i].length; j++) {
				formatChar =  (log[i].length - 1 == j) ? '\n' : formatChar;
				logEntrySting += log[i][j] + formatChar;
			}

			logString += logEntrySting;

		}

		return logString;
	}

	function generateLogEntry(dataTypes, count, entryIteration) {

		var logEntry = [];
		
		for (var i = 0; i < dataTypes.length; i++) {
			logEntry.push(generateField(dataTypes[i], count, entryIteration));
		}

		return logEntry;
	}

	function generateField(dataType, count, iteration) {

		var field,
		chance = new Chance(Math.random),
		type = dataType.name,
		rate = (dataType.options.rate > 0 ? Math.round((dataType.options.rate/100) * count) : 0);

		if (type == 'Number') {
			field = Math.floor(Math.random() * Math.pow(10, dataType.options.digit));
		} else if (type == 'IP Address') {
			field =  (rate > iteration) ?  dataType.options.repeated : chance.ip();
		} else if (type == 'Date/Time') {
			field = moment(chance.date({
				min: new Date(dataType.options.fromDate),
				max: new Date(dataType.options.toDate)
			})).format('YYYY-MM-DD HH:mm');

		} else if (type == 'Name') {
			field =  (rate > iteration) ?  dataType.options.repeated : chance.name();
		} else if (type == 'Credit Card Number') {
			field =  (rate > iteration) ?  dataType.options.repeated : chance.cc({type: 'visa'});
		} else if (type == 'Expiration Date') {
			field = moment(chance.date({
				min: new Date(dataType.options.fromDate),
				max: new Date(dataType.options.toDate)
			})).format('MM/YY');
		} else if (type == 'Boolean') {
			field = chance.weighted([dataType.options.valueOne, dataType.options.valueTwo], [dataType.options.rateOne, dataType.options.rateTwo]);
		}

		return field;
	}
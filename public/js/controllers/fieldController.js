app.controller('FieldController', function ($scope, httpService) {

	$scope.fieldTypes = [
		'Date/Time',
		'IP Address',
		'Number',
		'Name',
		'Credit Card Number',
		'Expiration Date',
		'Boolean'
	];
	var oldRateOne = 50;

	$scope.selectedFieldType = $scope.fieldTypes[0];
	$scope.dataTypes = [];
	$scope.entryCount = 1;
	$scope.downloadLink = '/download';
	$scope.options = {
		repeated: '',
		rate: 0,
		digit: 0,
		valueOne: 'Success',
		valueTwo: 'Failure',
		rateOne: 50,
		rateTwo: 50
	};

	$scope.balanceRate = function() {
		if ($scope.options.rateOne != oldRateOne) {
			$scope.options.rateTwo = 100 - $scope.options.rateOne;
			oldRateOne = $scope.options.rateOne;
		} else {
			$scope.options.rateOne = 100 - $scope.options.rateTwo;
			oldRateTwo = $scope.options.rateTwo;
		}
	};

	$scope.setOptions = function(field, value) {
		$scope.options[field] = value;
	};

	$scope.selectField = function() {
		$scope.dataTypes.push({
			name: $scope.selectedFieldType,
			options: $scope.options 
		});
		$scope.options = {
			repeated: '',
			rate: 0,
			digit: 0,
			valueOne: 'Success',
			valueTwo: 'Failure',
			rateOne: 50,
			rateTwo: 50
		};
	};

	$scope.clearLogDetail = function(index) {
		$scope.dataTypes.splice(index, 1);
	};

	$scope.submitLogDetails = function() {
		//Create service
		var logDetails = {
			types: $scope.dataTypes,
			count: $scope.entryCount
		};

		httpService.create(logDetails).then(function(response) {
			$scope.logData = response.data;
		});
	};
});
app.controller('FieldController', function ($scope, httpService) {

	$scope.fieldTypes = [
		'Date/Time',
		'IP Address',
		'Number',
		'Name',
		'Credit Card Number'
	];

	$scope.selectedFieldType = $scope.fieldTypes[0];
	$scope.dataTypes = [];
	$scope.entryCount = 1;
	$scope.downloadLink = '/download';
	$scope.options = {
		repeated: '',
		rate: 0,
		digit: 0
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
			digit: 0
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
angular.module('logGeneratorApp').controller('FieldController', function ($scope, httpService) {
		$scope.fieldTypes = [
			'Date/Time',
			'IP Address',
			'Number',
			'Name',
			'Credit Card Number'
		];

		$scope.inputType = $scope.fieldTypes[0];

		//Possibly make into a service
		$scope.logDetails = {
			types: [],
			count: 1
		};

		$scope.downloadLink = '/download';

		$scope.selectField = function() {
			if ($scope.inputType !== undefined) {
				$scope.logDetails.types.push($scope.inputType);
			}
		};

		$scope.clearLogDetail = function(index) {
			$scope.logDetails.types.splice(index, 1);
		};

		$scope.submitLogDetails = function() {
			httpService.create($scope.logDetails).then(function(response) {
				$scope.logData = response.data;
			});
		};
	}
);
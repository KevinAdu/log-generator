angular.module('logGeneratorApp').controller('FieldController', function ($scope, httpService) {
		$scope.fieldTypes = [
			'Date/Time',
			'IP Address',
			'Number'
		];

		//Possibly make into a service
		$scope.logDetails = {
			types: [],
			count: 0
		};

		$scope.downloadLink = '/download';

		$scope.selectField = function() {
			if ($scope.inputTypes !== undefined) {
				$scope.logDetails.types.push($scope.inputTypes);
			}
		};

		$scope.submitLogDetails = function() {
			httpService.create($scope.logDetails).then(function(response) {
				$scope.logData = response.data;
			})
		};
	}
);
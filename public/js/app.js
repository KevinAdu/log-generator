var module = angular.module('app', []);

module.controller('fieldController', 
	function($scope) {
		$scope.fieldTypes = [
			'Date/Time',
			'IP Address',
			'Number'
		];

		$scope.selected = [];

		$scope.selectField = function() {
			if ($scope.inputTypes !== undefined) {
				$scope.selected.push($scope.inputTypes);
			}
		}
	}
);
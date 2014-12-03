var module = angular.module('app', []);

module.controller('fieldController', ['$scope', 
	function($scope) {
		$scope.fieldTypes = [
			'Date/Time',
			'IP Address',
			'Number',
			'String'
		];
	}
]);
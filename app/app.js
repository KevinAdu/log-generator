var module = angular.module('app', []);

function mainController($scope) {
	$scope.fieldTypes = [
		'Date/Time',
		'IP Address',
		'Number',
		'String'
	];
}
app.directive('datePicker', function() {
	return {
		restrict: 'E',
		scope :{
			dateTime: '=ngModel',
			setdate: '&'
		},
		templateUrl: '../templates/dropdownPicker.html',
		link: function($scope, elem, attrs) {
			$scope.onTimeSet = function(newDate) {				
				$scope.setdate({
					date: newDate
				});
			};
		}
	};
});
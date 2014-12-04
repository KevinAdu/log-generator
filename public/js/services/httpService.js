angular.module('logGeneratorApp').service('httpService', ['$http', function ($http) {
	return {
		create : function(logFormat) {
			return $http.post('/log', logFormat);
		}
	}
}]);
angular.module('logGeneratorApp').service('httpService', ['$http', function ($http) {
	return {
		postLogFormat : function(logFormat) {
			return $http.post('/createLog', logFormat).then(function(result) {
				console.log(result);
			})
		}
	}
}]);
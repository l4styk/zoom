angular.module('eventsController', [])

	.controller('mainController', ['$scope','$http','Events', function($scope, $http, Events) {
		$scope.loading = true;

		Events.get()
			.success(function(data) {
				$scope.events = data;
				$scope.loading = false;
			});
	}]);

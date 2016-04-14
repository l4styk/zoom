angular.module('eventsController', [])


	.controller('mainController', ['$scope','$http','Events', function($scope, $http, Events) {
		$scope.formData = {};
		$scope.loading = true;

		Events.get()
			.then(function(response) {
				$scope.events = response.data.eventItem;
				$scope.loading = false;
			});

	}]);

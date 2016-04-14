angular.module('eventsController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Events', function($scope, $http, Events) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.limit300 = 300;
		$scope.setLimit = function (lim) {
        $scope.limit300 = (lim <= 0) ? $scope.event.description.length : lim;
    };

		Events.get()
			.success(function(data) {
				$scope.events = data;
				$scope.loading = false;
			});



	}]);

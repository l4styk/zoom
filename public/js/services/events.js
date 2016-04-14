angular.module('eventsService', [])


	.factory('Events', function($http) {
		return {
			get : function() {
				return $http.get('js/events.json');
			}
		}
	});

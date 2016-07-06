'use strict';

angular.
	module('okf').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/members', {
					template: '<member-list></member-list>'
				}).
				when('/members/:memberId', {
					template: '<member-detail></member-detail>'
				}).
				otherwise('/members');
		}
	]);
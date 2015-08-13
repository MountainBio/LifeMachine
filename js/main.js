angular.module('LifeMachine', ['ngRoute'])

	.controller('HomeController', function($scope) {
		
	})

	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'home.html',
				controller: 'HomeController'
			});
		$locationProvider.html5Mode(true);
	});
angular.module('myModule', ['ngRoute'])
	.config(function($routeProvider) {

		$routeProvider
			.when('/', {templateUrl:'partials/basic-template.html', controller: BasicController})
			.when('/faq', {templateUrl:'partials/faq-template.html', controller: FaqController})
			.otherwise({redirectTo: '/', templateUrl:'partials/basic-template.html', controller: BasicController})
	});

function MainController($scope) {

}

function BasicController($scope) {

	$scope.title = 'this is the title';
	$scope.body = 'Welcome...';
}

function FaqController($scope) {

	$scope.title = 'FAQ';
	$scope.body = 'What?...';
}
(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'ngMockE2E', 'ngStorage'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/pages/home/home.html',
                controller: 'Home.HomeController',
                controllerAs: 'vm'
            });
    }

    function run($rootScope, $http, $location, $localStorage) {
				
		//TODO

    }
})();
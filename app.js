(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'pages/home/index.view.html',
                controller: 'Home.HomeController',
                controllerAs: 'vm'
            });
    }

    function run($rootScope, $http, $location) {
				
		//TODO

    }
})();
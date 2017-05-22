(function () {
    'use strict';

    angular
        .module('app')
        .run(setupFakeBackend);

    // setup fake backend
    function setupFakeBackend($httpBackend) {
    
        // fake  api end point
        $httpBackend.whenPOST('/api/getartist').respond(function (method, url, data) {
            
			// get parameters from post request
            var params = angular.fromJson(data);
			
			console.log('rest api fake call... /api/getartist');
			
            return [200, {}, {}];

		});

        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.HomeController', Controller);

    function Controller($location, SpotfyService) {
        var vm = this;

        initController();

        function initController() {
			
			console.log("Home.HomeController");
			
			SpotfyService.GetArtist()
            .then(function (d) {
				
				console.log("Home.HomeController");
				
				
            })
            .catch(function (d) {
                
            })
            .finally(function () {

            });
			
        }
    }

})();
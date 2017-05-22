(function () {
    'use strict';

    angular
        .module('app')
        .factory('SpotfyService', Service);

    function Service($http, $localStorage, $q) {
        
		var service = {};

        service.GetArtist = GetArtist;
        service.GetSong = GetSong;

        return service;
		
        function GetArtist() {
			
			var defer = $q.defer();
			
            $http.post('/api/getartist')
                .then(function (response) {
						
						if(1){
							defer.resolve();
							
							console.log("GetArtist method. :"  + response);
							
						} else {
							defer.reject();
							
						}
						
                });
				
				return defer.promise;
				
        }
			

        function GetSong() {
            
			console.log("GetSong method");
            
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .factory('EntitiesService', Service);

    function Service($http, $localStorage, $rootScope) {
        var service = {};

        service.GetParticipants = GetParticipants;
       

        return service;

        function GetParticipants(filter, limit) {
                $http.get('http://localhost:3902/api/entities/', {
                    headers: {'filter': filter, 
                'limit': limit }
                })
                .success(function (response) {
                    if (response) {
                  
                       $rootScope.participants = response;
               
                    } else {
              
      
                    }
                });
        }

    }
})();
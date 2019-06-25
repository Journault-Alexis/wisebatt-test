(function () {
    'use strict';

    angular
        .module('app')
        .factory('PythonService', Service);

    function Service($http, $localStorage, $rootScope) {
        var service = {};

        service.GetData = GetData;
        service.Logout = Logout;

        return service;

        function GetData(callback) {
                $http.get('http://localhost:3904/api/python/')
                
                .success(function (response) {
                    if (response) {
                       $rootScope.python = response;
                       callback(true);
       
                    } else {
                        callback(false);
      
                    }
                });
        }

        function Logout() {
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();
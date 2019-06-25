(function () {
    'use strict';

    angular
        .module('app')
        .factory('ProfileService', Service);

    function Service($http, $localStorage, $rootScope) {
        var service = {};

        service.GetUser = GetUser;
        service.Logout = Logout;

        return service;

        function GetUser() {
                $http.get('http://localhost:3900/api/users/me', {
                    headers: {'x-auth-token': $localStorage.currentUser.token}
                })
                .success(function (response) {
                    if (response) {
                       console.log(response);
                       $rootScope.user = response;
             

       
                    } else {
              
      
                    }
                });
        }

        function Logout() {
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();
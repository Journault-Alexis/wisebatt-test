(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', Service);

    function Service($http, $localStorage) {
        var service = {};

        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(email, password, callback) {
            $http.post('http://localhost:3900/api/auth/', { email: email, password: password })
                .success(function (response) {
                    if (response) {
                        $localStorage.currentUser = { token: response };
           
                        callback(true);
                    } else {
              
                        callback(false);
                    }
                });
        }

        function Logout() {
            delete $localStorage.currentUser;
            // $http.defaults.headers.common.Authorization = '';
        }
    }
})();
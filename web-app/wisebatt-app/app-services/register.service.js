(function () {
    'use strict';

    angular
        .module('app')
        .factory('RegisterService', Service);

    function Service($http, $localStorage) {
        var service = {};

        service.CreateUser = CreateUser;


        return service;

        function CreateUser(name, password, email, callback) {
            console.log("la req", name, email, password);
            $http.post('http://localhost:3900/api/users', { name: name, password: password, email: email })
                .success(function (response) {
   
           
                    if (response) {
                
                        $localStorage.currentUser = { token: response };

                        // // add jwt token to auth header for all requests made by the $http service
                        // $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
        }

    }
})();
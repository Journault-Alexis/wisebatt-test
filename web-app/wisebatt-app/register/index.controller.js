(function () {
    'use strict';

    angular
        .module('app')
        .controller('Register.IndexController', Controller);

    function Controller($location, RegisterService) {
        var vm = this;

        vm.register = register;

        initController();

        function initController() {
           

        };


        function register() {
            console.log("dans le register");
            vm.loading = true;
            RegisterService.CreateUser(vm.name,  vm.password, vm.email, function (result) {
                if (result === true) {
                    $location.path('/');
                } else {
                    vm.error = 'Username or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }

})();
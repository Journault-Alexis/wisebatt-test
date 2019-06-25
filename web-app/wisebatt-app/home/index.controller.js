(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

        function Controller($location, $rootScope, ProfileService, PythonService, EntitiesService) {

            var vm = this;
            vm.filterParticpants = filterParticpants;
         
            vm.pythonLauncher = pythonLauncher;
    
            initController();
    
            function initController() {
           
             ProfileService.GetUser();
                  
             EntitiesService.GetParticipants('id', 25);
            console.log("inside home", $rootScope);
            
            };
            
            function filterParticpants(filter, limit) {
                EntitiesService.GetParticipants(filter, limit);
            };


            function pythonLauncher() {
                PythonService.GetData( function (result) {
                 {
               
                    if (result === false) 
                        vm.error = 'Python script failed';
       
                    }
                });
            };
        }
})();
(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('PersonalController', PersonalController);
 
    PersonalController.$inject = [];
 
    function PersonalController() {
        var vm = this;
        vm.title = 'Personal';
        vm.formData = {};

        vm.$onInit = activate;
        
        ////////////////

        function activate() {
            console.log(vm.title + ' loaded!');
            vm.formData = vm.root.getData();
        }

    }
})();

(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('PersonalController', PersonalController);
 
    PersonalController.$inject = [];
 
    function PersonalController() {
        var vm = this;
        vm.title = 'Please tell us about yourself.';
        vm.formData = {};

        vm.$onInit = activate;
        
        ////////////////

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            console.log('Personal feature loaded!');
        }

    }
})();

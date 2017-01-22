(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('WorkController', WorkController);
 
    WorkController.$inject = [];
 
    function WorkController() {
        var vm = this;
        vm.title = 'What do you do?';
        vm.formData = {};
        
        vm.$onInit = activate;

        ////////////////

        function activate() {
            // get data from the parent component
            vm.formData = vm.parent.getData();
            console.log('Work feature loaded!');
        }
    }
})();
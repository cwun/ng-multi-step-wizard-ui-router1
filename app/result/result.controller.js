(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('ResultController', ResultController);
 
    ResultController.$inject = [];
 
    function ResultController() {
        var vm = this;
        vm.title = 'Result';
        vm.formData = {};
        
        vm.$onInit = activate;

        ////////////////

        function activate() {
            console.log(vm.title + ' loaded!');
            vm.formData = vm.root.getData();
        }
    }
})();

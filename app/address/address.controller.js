(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('AddressController', AddressController);
 
    AddressController.$inject = [];
 
    function AddressController() {
        var vm = this;
        vm.title = 'Address';
        vm.formData = {};
        
        vm.$onInit = activate;

        ////////////////

        function activate() {
            console.log(vm.title + ' loaded!');
            vm.formData = vm.root.getData();
        }
    }
})();
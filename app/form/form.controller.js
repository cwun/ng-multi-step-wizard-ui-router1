(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('FormController', FormController);
 
    FormController.$inject = [];
 
    function FormController() {
        var vm = this;
        vm.title = 'Create a Profile';
        // we will store all of our form data in this object
        vm.formData = {
            firstName: ''
            ,lastName: ''
            ,email: ''
            ,work: 'Code'
            ,street: ''
            ,city: ''
            ,state: ''
            ,zip: ''
        };

        vm.$onInit = activate;
        vm.getData = getData;
        
        ////////////////

        function activate() {
            console.log(vm.title + ' loaded!');
        }

        function getData() {
            return vm.formData;
        }
    }
})();

(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('FormController', FormController);
 
    FormController.$inject = ['FormDataModel'];
 
    function FormController(FormDataModel) {
        var vm = this;
        vm.title = 'Multi-Step Wizard';
        // we will store all of our form data in this object
        vm.formData = new FormDataModel();

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

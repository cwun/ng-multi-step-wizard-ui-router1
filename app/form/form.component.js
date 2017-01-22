(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .component('formComponent', {
            templateUrl:  'app/form/form.html',
            controller: 'FormController',
            controllerAs: 'vm'
        })
})();
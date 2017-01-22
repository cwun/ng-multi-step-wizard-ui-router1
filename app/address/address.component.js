(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .component('addressComponent', {
            templateUrl:  'app/address/address.html',
            controller: 'AddressController',
            controllerAs: 'vm',
            require: {
                // access to the functionality of the parent component called 'formComponent'
                parent: '^formComponent'
            },
            bindings: {
                // send a changeset of 'formData' upwards to the parent component called 'formComponent'
                formData: '<'
            }
        })
})();
(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .component('addressComponent', {
            templateUrl:  'app/address/address.html',
            controller: 'AddressController',
            controllerAs: 'vm',
            transclude: true,
            require: {
                root: '^formComponent'
            },
            bindings: {
                formData: '<'
            }
        })
})();
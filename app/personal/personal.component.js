(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .component('personalComponent', {
            templateUrl:  'app/personal/personal.html',
            controller: 'PersonalController',
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
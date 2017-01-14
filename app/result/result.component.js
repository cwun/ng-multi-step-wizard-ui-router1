(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .component('resultComponent', {
            templateUrl:  'app/result/result.html',
            controller: 'ResultController',
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
(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .component('workComponent', {
            templateUrl:  'app/work/work.html',
            controller: 'WorkController',
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
(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .component('resultComponent', {
            templateUrl:  'app/result/result.html',
            controller: 'ResultController',
            controllerAs: 'vm',
            require: {
                // access to the functionality of the parent component called 'formComponent'
                parent: '^formComponent'
            }
        })
})();
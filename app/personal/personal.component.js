(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .component('personalComponent', {
            templateUrl:  'app/personal/personal.html',
            controller: 'PersonalController',
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
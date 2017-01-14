(function() {
    'use strict';

    // Creating our angular app and inject ngAnimate, ui-router 
    // =============================================================================
    var app = angular.module('wizardApp', ['ngAnimate', 'ui.router'])

    // Configuring our states 
    // =============================================================================
    app.config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {

            // For any unmatched url, redirect to /wizard/personal
            $urlRouterProvider.otherwise('/form/personal');
    
            $stateProvider
                // route to show our basic wizard (/form)
                .state('form', {
                    url: '/form',
                    component: 'formComponent'
                })
        
                // nested states 
                // each of these sections will have their own view
                // url will be nested (/form/personal)
                .state('form.personal', {
                    url: '/personal',
                    component: 'personalComponent'
                })
        
                // url will be /form/work
                .state('form.work', {
                    url: '/work',
                    component: 'workComponent'
                })
        
                // url will be /form/address
                .state('form.address', {
                    url: '/address',
                    component: 'addressComponent'
                })

                // url will be /form/result
                .state('form.result', {
                    url: '/result',
                    component: 'resultComponent'
                })
        }
    ]);
       
})();

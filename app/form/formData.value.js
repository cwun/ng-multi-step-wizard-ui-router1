(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .value('FormDataModel', FormDataModel);
 
    function FormDataModel() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = 'Code';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
})();
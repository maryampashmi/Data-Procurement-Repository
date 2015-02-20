/**
 * Created by pasma08 on 20/02/2015.
 */

var formController = function($scope) {
    $scope.formData = {};
    $scope.formFields = [
        {
            //the key to be used in the model values {... "username": "johndoe" ... }
            key: 'username',
            type: 'input',
            templateOptions: {
                label: 'Username',
                placeholder: 'johndoe',
                required: true,
                description: 'Descriptive text'
            }
        },
        {
            key: 'password',
            type: 'input',
            templateOptions: {
                type: 'password',
                label: 'Password',
                required: true
            },
            expressionProperties: {
                'templateOptions.disabled': '!model.username' // disabled when username is blank
            }
        }
    ];

    $scope.onSubmit = function() {
        console.log('form submitted:', $scope.formData);
    };
};

angular.module('myApp', ['formly', 'formlyVanilla']);

angular.module('myApp')
    .controller('formController', formController);
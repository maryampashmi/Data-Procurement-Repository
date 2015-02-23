angular.module('myApp').controller('formController', function () {
this.formData = {};
this.formFields = [
    {
        key: 'story',
        type: 'textarea',
        templateOptions: {
            label: 'Some sweet story',
            placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)'
        }
    }
    ];

    this.onSubmit = function() {
        console.log('form submitted:', this.formData);
    };
});

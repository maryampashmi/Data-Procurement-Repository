angular.module('myApp').controller('formController', function () {
this.formData = {};
this.formFields = [
    {
        "type": "checkbox",
        "key": "checkThis",
        "templateOptions": {
            "label": "Check this box"
        }
    }
    ];

    this.onSubmit = function() {
        console.log('form submitted:', this.formData);
    };
});

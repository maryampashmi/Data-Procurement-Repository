angular.module('formly.render').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('fields/formly-field-checkbox.html',
    "<div class=checkbox ng-class=\"{'has-error': options.formField.$invalid}\"><label><input type=checkbox id={{id}} formly-dynamic-name=options.key formly-custom-validation=options.validators aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-model=\"result[options.key || index]\"> {{options.label || 'Checkbox'}} {{options.required ? '*' : ''}}</label><p id={{id}}_description class=help-block ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-email.html',
    "<div class=form-group ng-class=\"{'has-error': options.formField.$invalid}\"><label for={{id}}>{{options.label || 'Email'}} {{options.required ? '*' : ''}}</label><input type=email class=form-control id={{id}} formly-dynamic-name=options.key formly-custom-validation=options.validators placeholder={{options.placeholder}} aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-model=\"result[options.key || index]\"><p id={{id}}_description lass=help-block ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-hidden.html',
    "<input type=hidden ng-model=\"result[options.key || index]\">"
  );


  $templateCache.put('fields/formly-field-number.html',
    "<div class=form-group ng-class=\"{'has-error': options.formField.$invalid}\"><label for={{id}}>{{options.label || 'Number'}} {{options.required ? '*' : ''}}</label><input type=number class=form-control id={{id}} formly-dynamic-name=options.key formly-custom-validation=options.validators placeholder={{options.placeholder}} aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled min={{options.min}} max={{options.max}} ng-minlength={{options.minlength}} ng-maxlength={{options.maxlength}} ng-model=\"result[options.key || index]\"><p id={{id}}_description class=help-block ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-password.html',
    "<div class=form-group ng-class=\"{'has-error': options.formField.$invalid}\"><label for={{id}}>{{options.label || 'Password'}} {{options.required ? '*' : ''}}</label><input type=password class=form-control id={{id}} formly-dynamic-name=options.key formly-custom-validation=options.validators aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-trim=\"{{options.trimWhitespace || false}}\" ng-model=\"result[options.key || index]\"><p id={{id}}_description class=help-block ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-radio.html',
    "<div class=radio-group ng-class=\"{'has-error': options.formField.$invalid}\"><label class=control-label>{{options.label}} {{options.required ? '*' : ''}}</label><div class=radio ng-repeat=\"(key, option) in options.options\"><label><input type=radio formly-dynamic-name=options.key formly-custom-validation=options.validators id=\"{{id + '_'+ $index}}\" aria-describedby={{id}}_description ng-value=option.value ng-required=options.required ng-model=\"$parent.result[$parent.options.key || $parent.index]\"> {{option.name}}</label><p id={{id}}_description class=help-block ng-if=option.description>{{option.description}}</p></div></div>"
  );


  $templateCache.put('fields/formly-field-select.html',
    "<div class=form-group ng-class=\"{'has-error': options.formField.$invalid}\"><label for={{id}}>{{options.label || 'Select'}} {{options.required ? '*' : ''}}</label><select class=form-control id={{id}} formly-dynamic-name=options.key formly-custom-validation=options.validators aria-describedby={{id}}_description ng-model=\"result[options.key || index]\" ng-required=options.required ng-disabled=options.disabled ng-options=\"option.value as option.name group by option.group for option in options.options\"></select><p id={{id}}_description class=help-block ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-text.html',
    "<div class=form-group ng-class=\"{'has-error': options.formField.$invalid}\"><label for={{id}}>{{options.label || 'Text'}} {{options.required ? '*' : ''}}</label><input type=text class=form-control id={{id}} formly-dynamic-name=options.key formly-custom-validation=options.validators placeholder={{options.placeholder}} aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-model=\"result[options.key || index]\"><p id={{id}}_description class=help-block ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-textarea.html',
    "<div class=form-group ng-class=\"{'has-error': options.formField.$invalid}\"><label for={{id}}>{{options.label || 'Text'}} {{options.required ? '*' : ''}}</label><textarea type=text class=form-control id={{id}} formly-dynamic-name=options.key formly-custom-validation=options.validators rows={{options.lines}} placeholder={{options.placeholder}} aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-model=\"result[options.key || index]\">\n" +
    "\t</textarea><p id={{id}}_description class=help-block ng-if=options.description>{{options.description}}</p></div>"
  );

}]);

// This file adds the default templates to the formlyConfigProvider.
// It is excluded from the no-templates build.
angular.module('formly.render').config(["formlyConfigProvider", function(formlyConfigProvider) {
	'use strict';
	var fields = [
		'textarea', 'radio', 'select', 'number', 'checkbox',
		'password', 'hidden', 'email', 'text'
	];
	angular.forEach(fields, function(field) {
		formlyConfigProvider.setTemplateUrl(field, 'fields/formly-field-' + field + '.html');
	});
}]);
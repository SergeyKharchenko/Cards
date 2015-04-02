angular.module('app').directive("isTrue", function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attributes, ngModel) {
            ngModel.$validators.isTrue = function (modelValue) {
                return modelValue == true;
            };
        }
    };
});
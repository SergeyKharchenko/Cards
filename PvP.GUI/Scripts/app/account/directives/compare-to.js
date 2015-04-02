angular.module('app').directive("compareTo", function ($compile) {
    return {
        require: ['^form', 'ngModel'],
        scope: {
            modelToCompareWith: "@compareTo"
        },
        link: function (scope, element, attributes, controls) {
            var form = controls[0];
            var modelToCompareWith = form[scope.modelToCompareWith];
            var ngModel = controls[1];

            ngModel.$validators.compareTo = function (modelValue) {
                return modelValue == modelToCompareWith.$modelValue;
            };

            scope.$watch(function() {
                return modelToCompareWith.$modelValue;
                }, function() {
                     ngModel.$validate();
                }
            );
        }
    };
});
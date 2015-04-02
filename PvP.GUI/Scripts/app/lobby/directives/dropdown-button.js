angular.module('app').directive('dropdownButton', function ($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/dropdown-button.html',
        replace: true,
        require: 'ngModel',
        scope: {
            items: "=",
            selectedItem: "=ngModel"
        },
        link: function (scope, element, attrs, ngModel) {
            $timeout(function() {
                $(element).find('li a').on("click", function () {
                    var item = $(this).text();
                    ngModel.$setViewValue(item);
                });
            });
        }
    };
});
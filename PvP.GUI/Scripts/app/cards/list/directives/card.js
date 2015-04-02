angular.module('app').directive('card', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/card.html',
        scope: {
            word: "=",
            translation: "=",
            imageUrls: "="
        },
        link: function (scope, element, attrs, ngModel) {

            
        }
    };
});
angular.module('app').controller('NavigationBarController', function($scope, $location) {
    $scope.userName = "Jack";

    $scope.signUp = function() {
        $location.path('/register');
    };
});
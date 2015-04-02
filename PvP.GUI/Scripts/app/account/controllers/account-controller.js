angular.module('app').controller('AccountController', function ($scope, accounts) {

    $scope.password = "11111111";
    $scope.confirmPassword = $scope.password;

    function errorCalback(errors) {
        $scope.errors = errors;
    };

    $scope.register = function () {

        accounts.add($scope, function(e) {
                $scope.errors = null;
            },
            errorCalback
        );
    };

    $scope.signIn = function () {
        
        accounts.add($scope, function(e) {
            $scope.errors = null;
            accounts.signIn($scope, function(e) {
                    
                },
                errorCalback);
            },
            errorCalback
        );
    };
});
angular.module('app').controller('LobbyController', function ($scope) {

    $scope.items = ['Puck', 'Traxex', 'Pudge'];
    $scope.selectedItem = $scope.items[0];


    $scope.onStream = function(stream) {

    };

});
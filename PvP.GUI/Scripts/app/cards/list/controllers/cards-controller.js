angular.module('app').controller('CardsController', function ($scope, cards) {

    $scope.loading = true;
    $scope.cards = [];

    cards.get(1, function(cardsData) {
        $scope.cards = cardsData;
    }, function(error) {
        
    });

});
angular.module('app').controller('NewCardController', function ($scope, wordProvider, imageProvider, translateProvider, cards) {

    $scope.loading = true;

    $scope.cards = [];

    function getNextWord() {
        $scope.loading = true;
        $scope.images = [];
        wordProvider.getNewWord(function (word) {
            translateProvider.translate(word, function (translatedWord) {
                if (translatedWord == word) {
                    getNextWord();
                    return;
                }
                $scope.word = word;
                $scope.translation = translatedWord;
                imageProvider.getImage(word, function (imageUrls) {
                    $scope.images = [];
                    imageUrls.forEach(function (imageUrl) {
                        $scope.images.push({
                            url: imageUrl,
                            selected: true
                        });
                    });
                    $scope.loading = false;
                    $scope.$apply();
                }, function() {
                    $scope.imageUrl = '/images/img-not-found.jpg';
                });
            }, function (error) {
                console.log(error);
            });

        }, function (error) {
            console.log(error);
        });
    }

    $scope.getNextWord = getNextWord;

    $scope.selectOrUnselectImage = function (image) {
        image.selected = !image.selected;
    };

    $scope.addCard = function () {
        var images = [];
        $scope.images.forEach(function (image) {
            if (image.selected) {
                images.push(image.url);
            }
        });
        cards.add({
            word: $scope.word,
            translation: $scope.translation,
            imageUrls: images,
            userId: 1
        }, function() {
            console.log("Card was added");
        }, function(error) {
            
        });
    };
});
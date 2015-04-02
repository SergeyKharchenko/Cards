angular.module('app').factory('cards', function ($http, $q) {
    var cardsApiRoot = "http://localhost:45643/api/Cards/";
    return {
        get: function (userId, successCallback, errorCallback) {
            var deferred = $q.defer();
            $http.post(cardsApiRoot, userId).success(deferred.resolve).error(deferred.reject);
            deferred.promise.then(successCallback, errorCallback);
        },
        add: function (card, successCallback, errorCallback) {
            var deferred = $q.defer();
            $http.post(cardsApiRoot + "add", {
                word: card.word,
                translation: card.translation,
                imageUrls: card.imageUrls,
                userId: card.userId,
            }).success(deferred.resolve).error(deferred.reject);

            deferred.promise.then(successCallback, errorCallback);
        },
    };
});
angular.module('app').factory('wordProvider', function ($http, $q) {
    var wordnikApiRootUrl = 'http://api.wordnik.com:80/v4/words.json/randomWord';
    var requestedUrl = wordnikApiRootUrl + '?' + $.param({
        api_key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
        hasDictionaryDef: true,
        minCorpusCount: 0,
        maxCorpusCount: 0,
        minDictionaryCount: 1,
        maxDictionaryCount: -1,
        minLength: 4,
        maxLength: -1,
        //includePartOfSpeech: 'noun'
    });
    return {
        getNewWord: function (successCallback, errorCallback) {
            var deferred = $q.defer();
            $http.get(requestedUrl).success(deferred.resolve).error(deferred.reject);

            deferred.promise.then(function (data) {
                successCallback(data.word);
            }, errorCallback);
        }
    };
});
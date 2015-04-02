angular.module('app').factory('translateProvider', function ($http, $q) {
    var translateRootUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

    function getUrl(text) {
        return translateRootUrl + '?' + $.param({
            key: 'trnsl.1.1.20150214T135507Z.6e9e0da3bb60a992.065302c55a321e43bda6cdef51b7265a3fc7a4ee',
            lang: 'en-ru',
            text: text
        });
    }

    return {
        translate: function (text, successCallback, errorCallback) {
            var deferred = $q.defer();
            $http.get(getUrl(text)).success(deferred.resolve).error(deferred.reject);

            deferred.promise.then(function (data) {
                successCallback(data.text[0]);
            }, errorCallback);
        }
    };
});
angular.module('app').factory('accounts', function ($http, $q) {
    var accountApiRoot = "http://localhost:45643/api/Account/";
    return {
        add: function(user, successCallback, errorCallback) {
            var deferred = $q.defer();
            $http.post(accountApiRoot + "register", {
                firstName: user.firstName,
                lastName: user.lastName,
                displayName: user.displayName,
                email: user.email,
                password: user.password,
                confirmPassword: user.confirmPassword,
                termsAccepted: user.termsAccepted
            }).success(deferred.resolve).error(deferred.reject);

            deferred.promise.then(successCallback, errorCallback);
        },
        signIn: function(user, successCallback, errorCallback) {
            var deferred = $q.defer();

            $http.post(accountApiRoot + "signIn", {
                email: user.email,
                password: user.password,
            }).success(deferred.resolve).error(deferred.reject);

            deferred.promise.then(successCallback, errorCallback);
        }
    };
});
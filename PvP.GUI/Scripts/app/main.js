angular.module('app', ['ngRoute', 'ngResource', 'webcam', 'ui.bootstrap']).config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'AccountController'
        })
        .when('/lobby', {
            templateUrl: 'templates/lobby.html',
            controller: 'LobbyController'
        })
        .when('/new-card', {
            templateUrl: 'templates/new-card.html',
            controller: 'NewCardController'
        })
        .when('/cards', {
            templateUrl: 'templates/cards.html',
            controller: 'CardsController'
        })
        .otherwise({ redirectTo: '/' });
});
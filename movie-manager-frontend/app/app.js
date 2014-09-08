(function () {
    angular.module('moviemanager', [
        'ngRoute',
        'layout',
        'search',
        'movie.card',
        'user',
        'login'
    ])
        .config(function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/search'
            });
        });
}());
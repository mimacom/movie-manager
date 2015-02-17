(function () {
    angular.module('moviemanager', [
        'ngRoute',
        'ngMessages',
        'layout',
        'search',
        'movie.card',
        'user',
        'login',
        'util.date'
    ])
        .config(function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/search'
            });
        });
}());
(function () {
    angular.module('moviemanager', [
        'ngRoute',
        'ngMessages',
        'layout',
        'search',
        'movie.card',
        'user',
        'util.date'
    ])
        .config(function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/search'
            });
        });
}());
(function () {
    angular.module('moviemanager', [
        'ngRoute',
        'ngMessages',
        'layout',
        'search',
        'movie.card',
        'user'
    ])
        .config(function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/search'
            });
        });
}());
(function () {
    angular.module('moviemanager', [
        'ngRoute',
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
(function () {
    angular.module('moviemanager', [
        'ngRoute',
        'layout',
        'search',
        'movie.card'
    ])
        .config(function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/search'
            });
        });
}());
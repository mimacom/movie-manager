(function () {
    angular.module('moviemanager', ['ngRoute', 'layout', 'search'])
        .config(function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/search'
            });
        });
}());
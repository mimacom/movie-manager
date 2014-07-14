(function () {
    angular.module('moviemanager', ['ngRoute', 'layout', 'search'])
        .config(function($routeProvider) {
            $routeProvider.otherwise('/search');
        }).run(function () {
            console.log('salut');
        });
}());
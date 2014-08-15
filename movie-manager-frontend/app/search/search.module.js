(function () {
    angular.module('search', ['omdb']).config(function ($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'app/search/search.tpl.html',
            controller: 'SearchController',
            controllerAs: 'ctrl'
        });
    });
}());
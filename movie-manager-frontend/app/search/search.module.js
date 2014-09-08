(function () {
    angular.module('search', ['omdb', 'util.alert']).config(function ($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'app/search/search.tpl.html',
            controller: 'SearchController',
            controllerAs: 'searchCtrl',
            reloadOnSearch: false
        });
    });
}());
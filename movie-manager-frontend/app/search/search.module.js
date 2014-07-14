(function () {
    angular.module('search', []).config(function ($routeProvider) {
        $routeProvider.when('/search', { templateUrl: 'app/search/search.tpl.html', controller: 'SearchController', controllerAs: 'ctrl' });
    });
}());
(function () {
    angular.module('movie.card', [])
        .config(function ($routeProvider) {
            $routeProvider.when('/movie/:imdbid', {
                templateUrl: 'app/movie-card/movie.card.tpl.html',
                controller: 'MovieCardController',
                controllerAs: 'movieCardCtrl'
            });
        });
})();

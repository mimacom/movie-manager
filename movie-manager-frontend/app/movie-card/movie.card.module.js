(function () {
    angular.module('movie.card', ['omdb', 'util.alert'])
        .config(function ($routeProvider) {
            $routeProvider.when('/movies/:imdbid', {
                templateUrl: 'app/movie-card/movie.card.tpl.html',
                controller: 'MovieCardController',
                controllerAs: 'movieCardCtrl'
            });
        });
})();

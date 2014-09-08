(function () {
    angular.module('movie.card')
        .controller('MovieCardController', function ($routeParams, OmdbService, LoginService) {
            var self = this,
                imdbId = $routeParams.imdbid;

            this.currentUser = LoginService.getCurrentUser();

            OmdbService.movieInfo(imdbId).then(function (movie) {
                self.movie = movie;
            }, function (error) {
                self.errors = [error];
            });

        });
})();
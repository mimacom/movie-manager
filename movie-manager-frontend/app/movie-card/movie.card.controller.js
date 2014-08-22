(function () {
    angular.module('movie.card')
        .controller('MovieCardController', function ($routeParams, OmdbService) {
            var self = this,
                imdbId = $routeParams.imdbid;

            OmdbService.movieInfo(imdbId).then(function (movie) {
                self.movie = movie;
            }, function(error){
                self.error = error;
            });

        });
})();
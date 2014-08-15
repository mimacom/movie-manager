(function () {
    angular.module('search')
        .controller('SearchController', function ($scope, OmdbService, $route, $location) {
            var self = this;
            self.greeting = 'Hello Pedro';
            if ($location.search().q) {
                self.query = $location.search().q;
                searchMovie();
            }

            self.search = function () {
                delete self.error;
                delete self.movies;
                $location.search('q', self.query);
                searchMovie();
            };

            function searchMovie() {
                self.loading = true;
                OmdbService.search(self.query).then(function (movies) {
                    self.movies = movies;
                }, function (error) {
                    self.error = error;
                }).finally(function () {
                    self.loading = false;
                });
            }

        });
}());
(function () {
    angular.module('search')
        .controller('SearchController', function ($scope, OmdbService) {
            $scope.greeting = 'Hello Pedro';
//            $scope.loading = true;

            $scope.search = function () {
                $scope.loading = true;
                OmdbService.search($scope.query).then(function (movies) {
                    $scope.movies = movies;
                    $scope.loading = false;
                });
            };
        });
}());
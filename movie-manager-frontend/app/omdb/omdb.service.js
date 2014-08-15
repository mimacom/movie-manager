(function () {
    angular.module('omdb')
        .factory('OmdbService', function ($http, OMDB_URL, $q) {
            function search(query) {
                return $http.get(OMDB_URL, {params: {s: query}}).then(function (response) {
                    if (response.data.Error) {
                        return $q.reject({msg: response.data.Error});
                    } else {
                        return response.data.Search;
                    }
                });
            }

            function movieInfo(imdbid) {
                return $http.get(OMDB_URL, {params: {i: imdbid}}).then(function (response) {
                    if (response.data.Error) {
                        return $q.reject({msg: response.data.Error});
                    } else {
                        return response.data.Search;
                    }
                });
            }

            return {
                search: search,
                movieInfo: movieInfo
            };
        });
})();

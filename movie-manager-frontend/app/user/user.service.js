(function () {
    angular.module('user')
        .factory('UserService', function ($http, $q) {

            function createUser(user){
                $http.post('/api/users/', user).then(function (response) {
                    return response.data;
                }, handleHttpError);
            }

            function handleHttpError(httpError) {
                var error = {};
                if (httpError.statusText) {
                    error.msg = httpError.statusText;
                } else {
                    error.msg = 'Connection error';
                }
                return $q.reject(error);
            }
        });
})();

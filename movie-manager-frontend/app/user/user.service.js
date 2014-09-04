(function () {
    angular.module('user')
        .factory('UserService', function ($http, $q) {

            function createUser(user){
                return $http.post('/api/v1/users/', user).then(function (response) {
                    return response.data;
                }, handleHttpError);
            }

            function handleHttpError(httpError) {
                var error = {};
                if (httpError.statusText) {
                    error.text = httpError.statusText;
                } else {
                    error.text = 'Connection error';
                }
                return $q.reject(error);
            }

            return {
                createUser: createUser,
                userExists: userExists
            };
        });
})();

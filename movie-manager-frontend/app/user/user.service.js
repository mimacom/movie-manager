(function () {
    angular.module('user')
        .factory('UserService', function ($http, $q) {

            function userExists(username) {
                return $http.get('/api/v1/user/exists', {params: {username: username}}).then(function (response) {
                    return response.data === 'true';
                }, handleHttpError);
            }

            function createUser(user) {
                return $http.post('/api/v1/user/', user).then(function (response) {
                    return response.data;
                }, handleHttpError);
            }

            function getAllUsers() {
                return $http.get('/api/v1/user/').then(function (response) {
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
                getAllUsers: getAllUsers,
                createUser: createUser,
                userExists: userExists
            };
        });
})();

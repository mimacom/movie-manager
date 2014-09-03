(function () {
    angular.module('login')
        .factory('LoginService', function ($http, $q) {

            function login(username) {
                return $q.when();
            }

            function logout() {
                return $q.when();
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
                login: login,
                logout: logout
            };
        });
})();

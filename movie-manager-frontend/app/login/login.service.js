(function () {
    angular.module('login')
        .factory('LoginService', function (UserService, $rootScope) {
            var currentUser, users = {};

            function login(user) {
                currentUser = user;
                $rootScope.$emit('userChanged');
            }

            function logout() {
                currentUser = undefined;
                $rootScope.$emit('userChanged');
            }

            function getCurrentUser(){
                return currentUser;
            }

            function reloadUsers() {
                UserService.getAllUsers().then(function (users) {

                });
            }

            return {
                login: login,
                logout: logout,
                getCurrentUser: getCurrentUser,
                reloadUsers: reloadUsers
            };
        });
})();

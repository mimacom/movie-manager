(function () {
    angular.module('user')
        .controller('RegisterUserController', function (UserService, LoginService, $location) {
            var self = this;

            this.registerUser = function () {
                UserService.createUser(self.user).then(function () {
                    return LoginService.login('username').then(function () {
                        $location.path('/search');
                    });
                }).catch(function (error) {
                    self.errors = [error];
                });
            };
        });
})();
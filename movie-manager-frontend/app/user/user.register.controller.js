(function () {
    angular.module('user')
        .controller('RegisterUserController', function (UserService, LoginService, $location) {
            var self = this;

            this.registerUser = function () {
                UserService.createUser(self.user).then(function () {
                    LoginService.login(self.user);
                    $location.path('/search');
                }).catch(function (error) {
                    self.errors = [error];
                });
            };
        });
})();
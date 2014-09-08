(function () {
    angular.module('login')
        .controller('LoginController', function (UserService, LoginService, $location) {
            var self = this;

            UserService.getAllUsers().then(function (users) {
                self.users = users;
            });

            this.login = function (user) {
                LoginService.login(user);
                $location.path('/search');
            };
        });
})();
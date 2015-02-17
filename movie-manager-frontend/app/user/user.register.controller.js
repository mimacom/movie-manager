(function () {
    angular.module('user')
        .controller('RegisterUserController', function ($scope, $route, UserService) {
            var self = this;

            this.registerUser = function () {
                if ($scope.registrationForm.$valid) {
                    UserService.createUser(self.user).then(function () {
                        $route.reload();
                    }).catch(function (error) {
                        self.errors = [error];
                    });
                }
            };

        });
})();
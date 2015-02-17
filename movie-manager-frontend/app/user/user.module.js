(function () {
    angular.module('user', ['ngRoute', 'login', 'util.date'])
        .config(function ($routeProvider) {
            $routeProvider.when('/register', {
                controller: 'RegisterUserController',
                controllerAs: 'registerUserCtrl',
                templateUrl: 'app/user/user.register.tpl.html'
            });
        });
}());

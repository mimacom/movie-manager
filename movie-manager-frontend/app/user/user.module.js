(function () {
    angular.module('user', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider.when('/register', {
                controller: 'RegisterUserController',
                controllerAs: 'registerUserCtrl',
                templateUrl: 'app/user/user.register.tpl.html'
            });
        });
}());

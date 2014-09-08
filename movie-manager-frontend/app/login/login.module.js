(function () {
    angular.module('login', [])
        .config(function ($routeProvider) {
            $routeProvider.when('/login', {
                templateUrl: 'app/login/login.tpl.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            });
        });
}());

(function () {
    angular.module('layout').controller('HeaderController', function (LoginService, $rootScope) {
        var self = this;
        self.currentUser = LoginService.getCurrentUser();

        $rootScope.$on('userChanged', function () {
            self.currentUser = LoginService.getCurrentUser();
        });

        this.logout = LoginService.logout;
    });
}());
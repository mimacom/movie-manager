(function () {
    angular.module('user')
        .directive('checkUsername', function (UserService) {
            return {
                require: 'ngModel',
                link: function (scope, elem, attr, ctrl) {

                    elem.on('keyup', function (event) {
                        var userexists = UserService.userExists(event.target.value).then(function (exists) {
                            ctrl.$setValidity('username', !exists);
                        });
                    });

                }
            };
        });
}());
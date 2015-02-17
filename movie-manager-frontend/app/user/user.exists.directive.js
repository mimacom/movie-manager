(function () {
    angular.module('user')
        .directive('userExists', function ($q, UserService) {
            return {
                require: 'ngModel',
                link: function (scope, elem, attr, ngModelCtrl) {
                    ngModelCtrl.$asyncValidators.userExists = function (modelValue, viewValue) {
                        var deferred = $q.defer();

                        UserService.userExists(viewValue).then(function (userExists) {
                            if (userExists) {
                                deferred.reject();
                            } else {
                                deferred.resolve();
                            }
                        });

                        return deferred.promise;
                    };
                }
            };
        });
}());
(function () {
angular.module('util.alert')
    .directive('alert', function () {
        return {
            templateUrl: 'app/util/alert/alert.tpl.html',
            restrict: 'E',
            replace: true,
            scope: {
                messages: '=messages'
            }
        };
    });
}());

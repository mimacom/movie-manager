(function () {
    describe('The user exists validation directive', function () {

        it('should set $valid to false when the user already exist', function () {
            // Arrange
            module('user', function ($provide) {
                userServiceMock = {
                    userExists: function () {
                        return {
                            then: function(fn) {
                                fn(true);
                            }
                        }
                    }
                };
                $provide.value('UserService', userServiceMock);
            });

            var $scope;
            inject(function ($compile, $rootScope) {
                $scope = $rootScope.$new();
                var element = angular.element('<form name="testForm"><input type="email" required ng-model="email" name="email" user-exists></form>');
                $compile(element)($scope);
            });

            $scope.testForm.email.$setViewValue('home.simpson@mimacom.com');

            // Act
            $scope.$digest();

            // Assert
            expect($scope.testForm.$valid).toBe(false);
        });

        it('should set $valid to true when the user does not exist', function () {
            // Arrange
            module('user', function ($provide) {
                userServiceMock = {
                    userExists: function () {
                        return {
                            then: function(fn) {
                                fn(false);
                            }
                        }
                    }
                };
                $provide.value('UserService', userServiceMock);
            });

            var $scope;
            inject(function ($compile, $rootScope) {
                $scope = $rootScope.$new();
                var element = angular.element('<form name="testForm"><input type="email" required ng-model="email" name="email" user-exists></form>');
                $compile(element)($scope);
            });

            $scope.testForm.email.$setViewValue('home.simpson@mimacom.com');

            // Act
            $scope.$digest();

            // Assert
            expect($scope.testForm.$valid).toBe(true);
        });

    });
}());
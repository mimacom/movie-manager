(function () {
    describe('The RegisterUserController', function () {
        var $rootScope, $q, createController, ctrlScope, UserService, LoginService;

        beforeEach(function () {
            module('user');
            inject(function (_$rootScope_, $controller, _$q_, _UserService_, _LoginService_, $location) {
                UserService = _UserService_;
                LoginService = _LoginService_;
                $q = _$q_;
                $rootScope = _$rootScope_;
                ctrlScope = $rootScope.$new();

                createController = function (UserServiceMock) {
                    return $controller('RegisterUserController as registerUserCtrl', {
                        '$scope': ctrlScope,
                        'UserService': UserServiceMock,
                        'LoginService': LoginService,
                        '$location': $location
                    });
                }
            });
        });

        it('should be created an not undefined', function () {
            // Arrange & Act
            var ctrl = createController();

            // Assert
            expect(ctrl).not.toBeUndefined();
        });

        it('should call the UserService with the user model data', function () {
            // Arrange
            var deferred = $q.defer();
            spyOn(UserService, 'createUser').and.returnValue(deferred.promise);
            spyOn(LoginService, 'login');
            var registerUserCtrl = createController(UserService);
            var user = {
                firstName: 'Homer',
                lastName: 'Simpson',
                birthDate: '21.02.1958',
                email: 'homer.simpson@mimacom.com',
                gender: 'M'
            };
            ctrlScope.registerUserCtrl.user = user;

            // Act
            registerUserCtrl.registerUser();
            deferred.resolve();
            $rootScope.$digest();

            // Assert
            expect(UserService.createUser).toHaveBeenCalledWith(user);
            expect(LoginService.login).toHaveBeenCalled();
        });

        it('should add an error to the error list when an error occurs', function () {
            // Arrange
            var deferred = $q.defer();
            spyOn(UserService, 'createUser').and.returnValue(deferred.promise);
            var registerUserCtrl = createController(UserService);
            ctrlScope.registerUserCtrl.user = {
                firstName: 'Homer',
                lastName: 'Simpson',
                birthDate: '21.02.1958',
                email: 'homer.simpson@mimacom.com',
                gender: 'M'
            };

            // Act
            registerUserCtrl.registerUser();
            deferred.reject('error!');
            $rootScope.$digest();

            // Assert
            expect(ctrlScope.registerUserCtrl.errors).toContain('error!');
        });

    });
})();
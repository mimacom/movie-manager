(function () {
    describe('The behavior of the UserService', function () {
        var UserService, $httpBackend;

        beforeEach(function () {
            module('user');
            inject(function (_UserService_, _$httpBackend_) {
                UserService = _UserService_;
                $httpBackend = _$httpBackend_;
            });
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should return true when userExists is called with an existing user', function () {
            // Arrange
            $httpBackend.expectGET('/api/v1/user/exists?username=homer.simpson@mimacom.com').respond(200, 'true');
            var userExists;

            // Act
            UserService.userExists('homer.simpson@mimacom.com').then(function(userExistsResponse) {
                userExists = userExistsResponse;
            });

            // Assert
            $httpBackend.flush();
            expect(userExists).toBe(true);
        })
    });
}());
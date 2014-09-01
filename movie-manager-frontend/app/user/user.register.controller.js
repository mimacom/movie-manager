(function () {
    angular.module('user')
        .controller('RegisterUserController', function () {
            var self = this;

            this.checkDate = function (strDate) {
                var dateParts = strDate.split('.');
                if (dateParts.length === 3) {
                    var date = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
                    // date must be between now and 120 years ago
                    if (date.getTime() < Date.now() && date.getTime() > (Date.now() - 1000 * 60 * 60 * 24 * 365 * 120 )) {
                        self.registrationForm.birthDate.$setValidity('range', true);
                    } else {
                        self.registrationForm.birthDate.$setValidity('range', false);
                    }
                    self.registrationForm.birthDate.$setValidity('format', true);
                } else {
                    self.registrationForm.birthDate.$setValidity('format', false);
                }
            };
        });
})();
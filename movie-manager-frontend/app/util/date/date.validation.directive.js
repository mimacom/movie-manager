(function () {
    angular.module('util.date')
        .directive('validateDate', function () {
            return {
                require: 'ngModel',
                link: function (scope, elem, attr, ctrl) {
                    var regex = /^\d{1,2}\.\d{1,2}\.\d{4}$/,
                        formatValid = true,
                        rangeValid = true;

                    // add a parser that will process each time the value is
                    // parsed into the model when the user updates it.
                    ctrl.$parsers.unshift(function (value) {
                        // test format
                        formatValid = regex.test(value);

                        // if format is valid check range
                        if (formatValid) {
                            // parse date
                            var dateParts = value.split('.');
                            var date = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
                            // date must be between now and 120 years ago
                            rangeValid = date.getTime() < Date.now() || date.getTime() > (Date.now() - 1000 * 60 * 60 * 24 * 365 * 120 );
                        }
                        ctrl.$setValidity('format', formatValid);
                        ctrl.$setValidity('range', rangeValid);


                        // if it's valid, return the value to the model,
                        // otherwise return undefined.
                        return formatValid && rangeValid ? getIsoFormat(value) : undefined;
                    });

                    function getIsoFormat(date) {
                        return date.split('.').reverse().join('-');
                    }
                }
            };
        });
}());
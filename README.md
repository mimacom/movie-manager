Exercise 3 - Directives
=============
In this exercise we are going to create two directive to add an even better validation on the registration form.

1. Create a directive that verifies that the username does not already exist (email field) and shows an error message if it is the case.
    1. Use this endpoint to check if the username already exists /api/v1/user/exists?username=...
2. Create a directive that verifies that the birth date is not in the future and not older than 120 years.

Hints
======
- The _require_ attribute on a directive might help: https://code.angularjs.org/1.3.13/docs/api/ng/service/$compile#-require-
- For the username validation directive:
    - Async validators are very useful when a request must be sent to validate something... https://code.angularjs.org/1.3.13/docs/api/ng/type/ngModel.NgModelController#$asyncValidators
- For the birth date validation directive:
    - $parsers on the ngModel might help when verifying an input value on a field: https://code.angularjs.org/1.3.13/docs/api/ng/type/ngModel.NgModelController#$parsers
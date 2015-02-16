Exercise 2 - Validation, Backend Call
=============
In this exercise we are going to add validation to a form and send the input (once it is valid) to the backend.

1. Add validation to the user.register.tpl.html
    - Bind the input fields to the attributes of the user object (it is already done for the first input).
    - You can find the possible validation directives in the angular docs: https://docs.angularjs.org/api/ng/input/input%5Btext%5D
    - Disable the submit button if the form is not valid
    - Use ngMessage(s) to show validation messages per input field: https://code.angularjs.org/1.3.13/docs/api/ngMessages/directive/ngMessages
3. Complete the controller to send the data to the backend (using the UserService)
    - Inject the UserService
    - Add a method which passes the data to the UserService.create method
    - Display error messages

Hints
======
 - The search template has an example for how to disable the submit button for an invalid form
 - To display error messages you can use the alert directive (it is already in the temple). You just have to add a array of error objects to the scope
```javascript
self.errors = [{text: 'an error occurred'}]
```
 - Optionally you can add a severity: success, info, warning or danger (default is danger) 
```javascript
self.errors = [{text: 'an error occurred', severity: 'warning'}]
```

Optional: validate username
======
Check if the username is not already used by someone.
4. Add a method in UserService to call the /api/v1/user/exists?username=... endpoint.
5. Use this method to verify if the username is not already used before creating a user.
6. Display an error message.

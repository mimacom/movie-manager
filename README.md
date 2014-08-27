Exercise 2 - Validation, Backend Call
=============
In this exercise we are going to add validation to a form and send the input (once it is valid) to the backend.

1. Add validation to the user.register.tpl.html
    - You can find the possible validation directives in the angular docs: https://docs.angularjs.org/api/ng/input/input%5Btext%5D
    - Disable the submit button if the form is not valid. 
3. Complete the controller to send the data to the backend (using the UserService)
    - Inject the UserService
    - Add a method which passes the data to the UserService.create method
    - Display error messages (you can see in the search.controller.js how this is done)
    
Optional: validate username
======
Check if the username is not already used by someone.
4. Add a method in UserService to call the /api/v1/user/exists?username=... endpoint.
5. Use this method to verify if the username is not already used before creating a user.
6. Display an error message.

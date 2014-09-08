Exception Handling and Testing
=============
1. Handle the UserExistsException that can be thrown in the _UserController_ controller.
    - A status code 400 should be returned with a reason.
2. Take a look in the _UserControllerTest_ test class and try to write some new tests to verify that the exception 
   handling works as expected.
   
Optional
=============
* Create a new endpoint in the _UserController_ controller that returns all users. Here is the mapping specification:
    * URL: /api/v1/user
    * Method: GET
    * Response: There's a sample JSON response payload in the file sample-user-list-json-payload.json.
Request Mapping and JSON Marshaling / Unmarshaling Exercise
=============
1. Create a new method in the _UserController_ controller that verifies if a user
   already exists. Inject the _UserService_ bean in your controller to verify it.
   Here is the mapping specification:
    - URL: /api/v1/user/exists?username=alain.sahli@mimacom.com
    - Method: GET
    - Response: boolean
2. Create a new method in the _UserController_ controller that creates a new user. The
   new User is sent in JSON format as request payload. Here is the mapping specification:
    - URL: /api/v1/user
    - Method: POST
    - Response: Status code 201 if the user was successfully created otherwise a status code 500 with an error message.
3. Validate the user object received as parameter in the create user method of the _UserController_. If the user is not
   valid, a status code 400 should be returned. A user is only valid if it has a first name, last name and a valid email
   address.

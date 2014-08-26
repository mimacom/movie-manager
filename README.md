Request Mapping and JSON Marshaling / Unmarshaling Exercise
=============
1. Create a new method in the _com.mimacom.movie.manager.web.UserController_ controller that verifies if a user
   already exists. Inject the _com.mimacom.movie.manager.service.UserService_ bean in your controller to verify it.
   Here is the mapping specification:
    - URL: /api/v1/user/exists?username=alain.sahli@mimacom.com
    - Method: GET
    - Response: boolean
2. Create a new method in the _com.mimacom.movie.manager.web.UserController_ controller that creates a new user. The
   new User is sent in JSON format as request payload. Here is the mapping specification:
    - URL: /api/v1/user
    - Method: POST
    - Response: Status code 201 if the user was successfully created otherwise a status code 500 with an error message.
3. Add validation to the method created for the user creation at point 2. It should return status code 400 with the
   validation error message.

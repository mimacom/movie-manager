package com.mimacom.movie.manager.web;

import com.mimacom.movie.manager.service.UserService;
import com.mimacom.movie.manager.service.domain.User;
import com.mimacom.movie.manager.service.internal.UserExistsException;
import com.mimacom.movie.manager.web.data.CreateUserRequestData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/exists", method = RequestMethod.GET)
    public boolean exists(@RequestParam("email") String email) {
        return this.userService.exists(email);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void create(CreateUserRequestData createUserRequestData) throws UserExistsException {
        User user = mapRequestUserToDomainUser(createUserRequestData);
        this.userService.create(user);
    }

    private User mapRequestUserToDomainUser(CreateUserRequestData createUserRequestData) {
        User newUser = new User(createUserRequestData.getFirstName(), createUserRequestData.getLastName(),
                createUserRequestData.getEmail());
        newUser.setBirthDate(createUserRequestData.getBirthDate());
        newUser.setGender(createUserRequestData.getGender());

        return newUser;
    }

}
package com.mimacom.movie.manager.web;

import com.mimacom.movie.manager.WebApplication;
import com.mimacom.movie.manager.service.UserService;
import com.mimacom.movie.manager.service.domain.User;
import com.mimacom.movie.manager.web.data.CreateUserRequestData;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.transaction.Transactional;
import java.nio.charset.Charset;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebApplication.class)
@Transactional
public class UserControllerTest {

    private static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));

    @Autowired
    private WebApplicationContext wac;

    @Autowired
    private UserService userService;

    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    // Tests for exercise 1 point 1
    @Test
    public void userExists_withExistingUser_shouldReturnTrue() throws Exception {
        // Arrange
        String userEmail = "homer.simpson@mimacom.com";
        this.userService.create(new User("Homer", "Simpson", userEmail));

        // Act & Assert
        this.mockMvc.perform(get("/v1/user/exists?username={email}", userEmail))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }

    @Test
    public void userExists_withNonExistingUser_shouldReturnFalse() throws Exception {
        // Act & Assert
        this.mockMvc.perform(get("/v1/user/exists?username={email}", "homer.simpson@mimacom.com"))
                .andExpect(status().isOk())
                .andExpect(content().string("false"));
    }

    // Tests for exercise 1 point 2
    public void createUser_withValidUser_shouldPersistIt() throws Exception {
        // Arrange
        CreateUserRequestData createUserRequestData = new CreateUserRequestData();
        createUserRequestData.setFirstName("Homer");
        createUserRequestData.setLastName("Simpson");
        createUserRequestData.setEmail("homer.simpson@mimacom.com");

        // Act & Assert
        this.mockMvc.perform(post("/v1/user").content(TestUtils.convertObjectToJsonString(createUserRequestData))
                .contentType(APPLICATION_JSON_UTF8))
                .andExpect(status().isCreated());
        assertTrue(this.userService.exists("homer.simpson@mimacom.com"));
    }

    // Tests for exercise 1 point 3


    @Test
    public void createUser_withInvalidUser_shouldThrowAnException() throws Exception {
        // Arrange
        CreateUserRequestData createUserRequestData = new CreateUserRequestData();
        createUserRequestData.setFirstName("Homer");
        createUserRequestData.setLastName("Simpson");

        // Act & Assert
        this.mockMvc.perform(post("/v1/user").content(TestUtils.convertObjectToJsonString(createUserRequestData))
                .contentType(APPLICATION_JSON_UTF8))
                .andExpect(status().isBadRequest());

        assertFalse(this.userService.exists("homer.simpson@mimacom.com"));
    }
}
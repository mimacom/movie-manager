package com.mimacom.movie.manager.service.internal;

import com.mimacom.movie.manager.Application;
import com.mimacom.movie.manager.service.UserService;
import com.mimacom.movie.manager.service.domain.Movie;
import com.mimacom.movie.manager.service.domain.User;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@Transactional
public class DefaultUserServiceTest {

	@Autowired
	private UserService userService;

	@PersistenceContext
	private EntityManager entityManager;

	@Rule
	public ExpectedException expectedException = ExpectedException.none();

	@Test
	public void create_withAValidUser_shouldPersistTheUser() throws Exception {
		// Arrange
		User userToCreate = new User("Homer", "Simpson", "homer.simpson@mimacom.com");

		// Act
		this.userService.create(userToCreate);

		// Assert
		flushAndClear();
		List<User> allUsers = this.userService.getAll();
		assertEquals(1, allUsers.size());
		User user = allUsers.get(0);
		assertEquals("Homer", user.getFirstName());
		assertEquals("Simpson", user.getLastName());
		assertEquals("homer.simpson@mimacom.com", user.getEmail());
	}

	@Test
	public void create_withAnAlreadyExistingUser_shouldThrowAnException() throws Exception {
		// Arrange
		User user = new User("Homer", "Simpson", "homer.simpson@mimacom.com");
		this.userService.create(user);
		flushAndClear();
		this.expectedException.expect(UserExistsException.class);
		this.expectedException.expectMessage("homer.simpson@mimacom.com");

		// Act
		this.userService.create(user);
	}

	@Test
	public void addMovie_withAValidMovieAndUser_shouldAddItToTheUserList() throws Exception {
		// Arrange
		User user = new User("Homer", "Simpson", "homer.simpson@mimacom.com");
		this.userService.create(user);
		Movie movie = new Movie("tt34575896");

		// Act
		this.userService.addMovie("homer.simpson@mimacom.com", movie);

		// Assert
		flushAndClear();
		List<User> users = this.userService.getAll();
		User userWithMovies = users.get(0);
		assertEquals(1, userWithMovies.getMovies().size());
		assertTrue(userWithMovies.getMovies().contains(movie));
	}

    @Test
    public void exists_withAnExistingUser_shouldReturnTrue() throws Exception {
        // Arrange
        User user = new User("Homer", "Simpson", "homer.simpson@mimacom.com");
        this.userService.create(user);

        // Act
        boolean exists = this.userService.exists("homer.simpson@mimacom.com");

        // Assert
        assertTrue(exists);
    }

    @Test
    public void exists_withNonExistingUser_shouldReturnFalse() throws Exception {
        // Act
        boolean exists = this.userService.exists("marge.simpson@mimacom.com");

        // Assert
        assertFalse(exists);
    }

    private void flushAndClear() {
		this.entityManager.flush();
		this.entityManager.clear();
	}

}
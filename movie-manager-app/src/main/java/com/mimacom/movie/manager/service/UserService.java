package com.mimacom.movie.manager.service;

import com.mimacom.movie.manager.service.domain.Movie;
import com.mimacom.movie.manager.service.domain.User;
import com.mimacom.movie.manager.service.internal.UserExistsException;

import java.util.List;

public interface UserService {

	/**
	 * Creates a new user and persists it
	 * @param user The user to create
	 * @throws UserExistsException in case a user with the same email address already exists
	 */
	void create(User user) throws UserExistsException;

	/**
	 * @param email The email of the user to verify
	 * @return {@code true} if the user exists otherwise {@code false}
	 */
	boolean exists(String email);

	/**
	 * @return a list of all users
	 */
	List<User> getAll();

	/**
	 * Adds a movie to the movie list of the {@code user}
	 * @param email The email of the user to which the movie must be added
	 * @param movie The new movie to add
	 */
	void addMovie(String email, Movie movie);
}

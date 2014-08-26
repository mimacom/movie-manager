package com.mimacom.movie.manager.service.internal;

import com.mimacom.movie.manager.service.domain.User;

public class UserExistsException extends Exception {
	
	private final User user;

	public UserExistsException(User user) {
		this.user = user;
	}

	@Override
	public String getMessage() {
		return String.format("User with email %s already exists", this.user.getEmail());
	}
}

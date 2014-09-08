package com.mimacom.movie.manager.service.data;

public class ShortUserDetails {
	
	private final String firstName;
	private final String lastName;
	private final String email;

	public ShortUserDetails(String firstName, String lastName, String email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public String getEmail() {
		return this.email;
	}
}

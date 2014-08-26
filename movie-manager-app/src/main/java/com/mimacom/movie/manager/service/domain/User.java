package com.mimacom.movie.manager.service.domain;

import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Entity
@Access(AccessType.FIELD)
public class User {

	@NotBlank
	private String firstName;

	@NotBlank
	private String lastName;

	@Id
	@NotBlank
	private String email;

	private LocalDate birthDate;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@ElementCollection
	@CollectionTable
	private Set<Movie> movies = new HashSet<>();

	public User(String firstName, String lastName, String email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	protected User() {
		// For JPA
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getBirthDate() {
		return this.birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public Gender getGender() {
		return this.gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public Set<Movie> getMovies() {
		return Collections.unmodifiableSet(this.movies);
	}

	public void addMovie(Movie movie) {
		this.movies.add(movie);
	}
}

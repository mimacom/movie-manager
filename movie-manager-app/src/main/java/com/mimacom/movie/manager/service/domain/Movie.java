package com.mimacom.movie.manager.service.domain;

import javax.persistence.*;
import java.util.Date;

@Embeddable
@Access(AccessType.FIELD)
public class Movie {
	
	private String imdbId;
	
	private Integer rating;
	
	private Date added;
	
	private boolean watched;

	public Movie(String imdbId) {
		this.imdbId = imdbId;
	}
	
	protected Movie() {
		// For JPA
	}

	public String getImdbId() {
		return this.imdbId;
	}

	public void setImdbId(String imdbId) {
		this.imdbId = imdbId;
	}

	public Integer getRating() {
		return this.rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public Date getAdded() {
		return new Date(this.added.getTime());
	}

	public void setAdded(Date added) {
		this.added = new Date(added.getTime());
	}

	public boolean isWatched() {
		return this.watched;
	}

	public void setWatched(boolean watched) {
		this.watched = watched;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}

		Movie movie = (Movie) o;

		if (!this.imdbId.equals(movie.imdbId)) {
			return false;
		}

		return true;
	}

	@Override
	public int hashCode() {
		return this.imdbId.hashCode();
	}
}

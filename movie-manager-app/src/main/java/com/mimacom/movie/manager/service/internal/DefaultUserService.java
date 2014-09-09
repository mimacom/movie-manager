package com.mimacom.movie.manager.service.internal;

import com.mimacom.movie.manager.service.UserService;
import com.mimacom.movie.manager.service.data.ShortUserDetails;
import com.mimacom.movie.manager.service.domain.Movie;
import com.mimacom.movie.manager.service.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DefaultUserService implements UserService {

	private final UserRepository userRepository;

	@Autowired
	public DefaultUserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	@Transactional
	public void create(User user) throws UserExistsException {
		Assert.notNull(user, "user cannot be null");
		
		if (exists(user.getEmail())) {
			throw new UserExistsException(user);
		} else {
			this.userRepository.save(user);
		}
	}

	@Override
	@Transactional(readOnly = true)
	public boolean exists(String email) {
		return this.userRepository.exists(email);
	}

	@Override
	@Transactional(readOnly = true)
	public List<ShortUserDetails> getAllShort() {
		List<User> allUsers = this.userRepository.findAll();
		return allUsers.stream().map(user -> 
				new ShortUserDetails(user.getFirstName(), user.getLastName(), user.getEmail()))
				.collect(Collectors.toList());
	}

	@Override
	public List<String> getMoviesIds(String email) {
		User user = this.userRepository.getOne(email);
		return user.getMovies().stream().map(Movie::getImdbId).collect(Collectors.toList());
	}

	@Override
	@Transactional
	public void addMovie(String email, Movie movie) {
		User user = this.userRepository.getOne(email);
		user.addMovie(movie);
	}
}

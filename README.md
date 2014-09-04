Exercise 1 - First Steps
=============
In the first exercise we are going to create a view to display details about a movie. The routing, the structure of the controller and the beginning of
view are already created. Your task will be to get the movie information from the OmdbService and display it. 

1. Complete the controller
    - Retrieve the movie information from the OmdbService service
    - Bind the movie details to the scope
3. Complete the template
    - Display the information that you fetched in the controller

Hints
======
 - Have a look at the search module to get inspiration
 - ImdbId, which is passed in the url is already assigned to a variable
 - You can call the OmdbService like this:
```javascript
 OmdbService.movieInfo(imdbId).then(function (movie) {
    self.movie = movie;
});
 ```
 - The returned object looks like this
```javascript
  {
    Title: "TRON"
    Year: "1982"
    Rated: "PG"
    Released: "09 Jul 1982"
    Runtime: "96 min"
    Genre: "Action, Adventure, Sci-Fi"
    Director: "Steven Lisberger"
    Writer: "Steven Lisberger (screenplay), Steven Lisberger (story), Bonnie MacBird (story)"
    Actors: "Jeff Bridges, Bruce Boxleitner, David Warner, Cindy Morgan"
    Plot: "A computer hacker is abducted into the digital world and forced to participate in gladiatorial games where his only chance of escape is with the help of a heroic security program."
    Language: "English"
    Country: "USA"
    Awards: "Nominated for 2 Oscars. Another 1 win & 6 nominations."
    Poster: http://ia.media-imdb.com/images/M/MV5BMTY0OTM4ODM2MF5BMl5BanBnXkFtZTgwMTI0NDIxMDE@._V1_SX300.jpg
    Metascore: "N/A"
    imdbRating: "6.8"
    imdbVotes: "81,437"
    imdbID: "tt0084827"
    Type: "movie"
    Response: "True"
  }
```

Optional: improve UI
======
Add some fancy UI elements (like progressbar for rating). Have a look at the bootstrap documentation for this:
 - http://getbootstrap.com/css
 - http://getbootstrap.com/components/
 - http://getbootstrap.com/components/#progress
 
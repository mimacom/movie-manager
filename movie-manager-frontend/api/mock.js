var express = require('express');
var app = express();

var nextView = false;

app.get('/api/example', function (req, res) {
    res.status(200).json(example);
});

var example = {salut: "Pedro"};

module.exports = app;

var starWars = {"Search": [
    {"Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "imdbID": "tt0076759", "Type": "movie"},
    {"Title": "Star Wars: Episode V - The Empire Strikes Back", "Year": "1980", "imdbID": "tt0080684", "Type": "movie"},
    {"Title": "Star Wars: Episode VI - Return of the Jedi", "Year": "1983", "imdbID": "tt0086190", "Type": "movie"},
    {"Title": "Star Wars: Episode I - The Phantom Menace", "Year": "1999", "imdbID": "tt0120915", "Type": "movie"},
    {"Title": "Star Wars: Episode III - Revenge of the Sith", "Year": "2005", "imdbID": "tt0121766", "Type": "movie"},
    {"Title": "Star Wars: Episode II - Attack of the Clones", "Year": "2002", "imdbID": "tt0121765", "Type": "movie"},
    {"Title": "Star Wars: The Clone Wars", "Year": "2008", "imdbID": "tt1185834", "Type": "movie"},
    {"Title": "Star Wars: The Clone Wars", "Year": "2008–2014", "imdbID": "tt0458290", "Type": "series"},
    {"Title": "Star Wars: Clone Wars", "Year": "2003–2005", "imdbID": "tt0361243", "Type": "series"},
    {"Title": "The Star Wars Holiday Special", "Year": "1978", "imdbID": "tt0193524", "Type": "movie"}
]};

var wolf = {"Search": [
    {"Title": "The Wolf of Wall Street", "Year": "2013", "imdbID": "tt0993846", "Type": "movie"},
    {"Title": "Teen Wolf", "Year": "2011–", "imdbID": "tt1567432", "Type": "series"},
    {"Title": "Teen Wolf", "Year": "2011–", "imdbID": "tt1998328", "Type": "series"},
    {"Title": "Wolf Creek", "Year": "2005", "imdbID": "tt0416315", "Type": "movie"},
    {"Title": "Brotherhood of the Wolf", "Year": "2001", "imdbID": "tt0237534", "Type": "movie"},
    {"Title": "Wolf", "Year": "1994", "imdbID": "tt0111742", "Type": "movie"},
    {"Title": "Teen Wolf", "Year": "1985", "imdbID": "tt0090142", "Type": "movie"},
    {"Title": "The Wolf Man", "Year": "1941", "imdbID": "tt0034398", "Type": "movie"},
    {"Title": "Hour of the Wolf", "Year": "1968", "imdbID": "tt0063759", "Type": "movie"},
    {"Title": "Jin-Roh: The Wolf Brigade", "Year": "1999", "imdbID": "tt0193253", "Type": "movie"}
]};

var lord = {"Search": [
    {"Title": "The Lord of the Rings: The Fellowship of the Ring", "Year": "2001", "imdbID": "tt0120737", "Type": "movie"},
    {"Title": "The Lord of the Rings: The Return of the King", "Year": "2003", "imdbID": "tt0167260", "Type": "movie"},
    {"Title": "The Lord of the Rings: The Two Towers", "Year": "2002", "imdbID": "tt0167261", "Type": "movie"},
    {"Title": "Lord of War", "Year": "2005", "imdbID": "tt0399295", "Type": "movie"},
    {"Title": "The Lord of the Rings", "Year": "1978", "imdbID": "tt0077869", "Type": "movie"},
    {"Title": "Lord of the Flies", "Year": "1990", "imdbID": "tt0100054", "Type": "movie"},
    {"Title": "Greystoke: The Legend of Tarzan, Lord of the Apes", "Year": "1984", "imdbID": "tt0087365", "Type": "movie"},
    {"Title": "Lord of the Flies", "Year": "1963", "imdbID": "tt0057261", "Type": "movie"},
    {"Title": "Lord of Illusions", "Year": "1995", "imdbID": "tt0113690", "Type": "movie"},
    {"Title": "Something the Lord Made", "Year": "2004", "imdbID": "tt0386792", "Type": "movie"}
]};

var jackie = {"Search": [
    {"Title": "Jackie Brown", "Year": "1997", "imdbID": "tt0119396", "Type": "movie"},
    {"Title": "Nurse Jackie", "Year": "2009–", "imdbID": "tt1190689", "Type": "series"},
    {"Title": "Jackie Chan's First Strike", "Year": "1996", "imdbID": "tt0116704", "Type": "movie"},
    {"Title": "Jackie Chan Adventures", "Year": "2000–2005", "imdbID": "tt0259141", "Type": "series"},
    {"Title": "Hilary and Jackie", "Year": "1998", "imdbID": "tt0150915", "Type": "movie"},
    {"Title": "Jackie", "Year": "2012", "imdbID": "tt2108546", "Type": "movie"},
    {"Title": "Jackie Chan: My Stunts", "Year": "1999", "imdbID": "tt0242546", "Type": "movie"},
    {"Title": "The Jackie Robinson Story", "Year": "1950", "imdbID": "tt0042609", "Type": "movie"},
    {"Title": "Looking for Jackie", "Year": "2009", "imdbID": "tt1478291", "Type": "movie"},
    {"Title": "Looking for Jackie", "Year": "2009", "imdbID": "tt1478291", "Type": "movie"}
]};


var tt0076759 = {"Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "Rated": "PG", "Released": "25 May 1977", "Runtime": "121 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing", "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.", "Language": "English", "Country": "USA", "Awards": "Won 6 Oscars. Another 35 wins & 26 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg", "Metascore": "91", "imdbRating": "8.7", "imdbVotes": "662,077", "imdbID": "tt0076759", "Type": "movie", "Response": "True"};
var tt0080684 = {"Title": "Star Wars: Episode V - The Empire Strikes Back", "Year": "1980", "Rated": "PG", "Released": "21 May 1980", "Runtime": "124 min", "Genre": "Action, Adventure, Fantasy", "Director": "Irvin Kershner", "Writer": "Leigh Brackett (screenplay), Lawrence Kasdan (screenplay), George Lucas (story)", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams", "Plot": "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.", "Language": "English", "Country": "USA", "Awards": "Won 1 Oscar. Another 12 wins & 16 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg", "Metascore": "78", "imdbRating": "8.8", "imdbVotes": "592,099", "imdbID": "tt0080684", "Type": "movie", "Response": "True"};
var tt0993846 = {"Title": "The Wolf of Wall Street", "Year": "2013", "Rated": "R", "Released": "25 Dec 2013", "Runtime": "180 min", "Genre": "Biography, Comedy, Crime", "Director": "Martin Scorsese", "Writer": "Terence Winter (screenplay), Jordan Belfort (book)", "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey", "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.", "Language": "English, French", "Country": "USA", "Awards": "Nominated for 5 Oscars. Another 25 wins & 86 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg", "Metascore": "75", "imdbRating": "8.3", "imdbVotes": "408,370", "imdbID": "tt0993846", "Type": "movie", "Response": "True"}
var tt0120737 = {"Title": "The Lord of the Rings: The Fellowship of the Ring", "Year": "2001", "Rated": "PG-13", "Released": "19 Dec 2001", "Runtime": "178 min", "Genre": "Action, Adventure, Fantasy", "Director": "Peter Jackson", "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)", "Actors": "Alan Howard, Elijah Wood, Noel Appleby, Sean Astin", "Plot": "A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.", "Language": "English, Sindarin", "Country": "New Zealand, USA", "Awards": "Won 4 Oscars. Another 96 wins & 99 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SX300.jpg", "Metascore": "92", "imdbRating": "8.8", "imdbVotes": "914,355", "imdbID": "tt0120737", "Type": "movie", "Response": "True"};
var tt0399295 = {"Title": "Lord of War", "Year": "2005", "Rated": "R", "Released": "16 Sep 2005", "Runtime": "122 min", "Genre": "Crime, Drama, Thriller", "Director": "Andrew Niccol", "Writer": "Andrew Niccol", "Actors": "Nicolas Cage, Bridget Moynahan, Jared Leto, Shake Tukhmanyan", "Plot": "An arms dealer confronts the morality of his work as he is being chased by an Interpol agent.", "Language": "English, Ukrainian, German, Spanish, Russian, French, Arabic, Turkish", "Country": "France, USA, Germany", "Awards": "1 win & 1 nomination.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjEzNDM2OTgzN15BMl5BanBnXkFtZTcwMzU3MTIzMQ@@._V1_SX300.jpg", "Metascore": "62", "imdbRating": "7.6", "imdbVotes": "213,051", "imdbID": "tt0399295", "Type": "movie", "Response": "True"};
var tt0167261 = {"Title": "The Lord of the Rings: The Two Towers", "Year": "2002", "Rated": "PG-13", "Released": "18 Dec 2002", "Runtime": "179 min", "Genre": "Action, Adventure, Fantasy", "Director": "Peter Jackson", "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Stephen Sinclair (screenplay), Peter Jackson (screenplay)", "Actors": "Bruce Allpress, Sean Astin, John Bach, Sala Baker", "Plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.", "Language": "English, Sindarin, Old English", "Country": "USA, New Zealand", "Awards": "Won 2 Oscars. Another 90 wins & 96 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg", "Metascore": "88", "imdbRating": "8.8", "imdbVotes": "806,854", "imdbID": "tt0167261", "Type": "movie", "Response": "True"};
var tt0119396 = {"Title": "Jackie Brown", "Year": "1997", "Rated": "R", "Released": "25 Dec 1997", "Runtime": "154 min", "Genre": "Crime, Drama, Thriller", "Director": "Quentin Tarantino", "Writer": "Quentin Tarantino (written for the screen by), Elmore Leonard (novel)", "Actors": "Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda", "Plot": "A flight attendant becomes a key figure in a plot between the police and an arms dealer.", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 7 wins & 14 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMzMxMzYzMDUyNV5BMl5BanBnXkFtZTgwMjI2Mzk5MDE@._V1_SX300.jpg", "Metascore": "64", "imdbRating": "7.5", "imdbVotes": "192,006", "imdbID": "tt0119396", "Type": "movie", "Response": "True"};
var express = require('express');
var request = require('request');

var app = express();

app.use('/api/omdb/', function (req, res) {
    var url = 'http://www.omdbapi.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});

module.exports = app;
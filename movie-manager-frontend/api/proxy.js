var express = require('express');
var request = require('request');

var app = express();

app.use('/api/moviemanager/', function (req, res) {
    var url = 'localhost:8080/' + req.url;
    req.pipe(request(url)).pipe(res);
});
module.exports = app;
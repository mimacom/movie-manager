var express = require('express');
var request = require('request');

var app = express();

app.use('/api', function (req, res) {
    var url = 'http://localhost:8080/api' + req.url;
    req.pipe(request(url)).pipe(res);
});

module.exports = app;
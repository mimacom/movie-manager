var express = require('express');
var app = express();

var nextView = false;

app.get('/api/example', function (req, res) {
    res.status(200).json(example);
});

var example = {salut: "Pedro"};

module.exports = app;
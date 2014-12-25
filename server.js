var http = require('http');
//var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var db;

//mongoose.connect("mongodb://:@127.0.0.1:27017/registration")

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override'));

require('./server/routes')(app);

console.log('start');
app.listen(3000);
console.log('listening');

exports = module.exports = app;  
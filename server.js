var http = require('http');
//var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials')

var app = express();
var db;

//mongoose.connect("mongodb://:@127.0.0.1:27017/registration")

app.use(bodyParser());
app.use(partials());
app.use(express.static(__dirname + '/public'));


console.log('start');
app.listen(3000);
console.log('listening');
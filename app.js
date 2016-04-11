var express = require("express");
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tradist');
var port = process.env.PORT || 3000;
var router = require('./config/routes');
var morgan = require('morgan');
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/api',router);


app.listen(port);
console.log(`server started on port ${port}`);
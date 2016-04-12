var express       = require("express");
var app           = express();
var port          = process.env.PORT || 3000;
var ejs           = require("ejs");
var path          = require("path");
var router        = require('./config/routes');
var morgan        = require('morgan');
var bodyParser    = require("body-parser");

var mongoose      = require('mongoose');
mongoose.connect('mongodb://localhost/tradist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/api',router);

var Bubble = require("./models/bubbles");
var Ticker = require("./models/tickers");

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(port);
console.log(`server started on port ${port}`);

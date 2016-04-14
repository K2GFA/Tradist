var express       = require("express");
var app           = express();
var port          = process.env.PORT || 3000;
var ejs           = require("ejs");
var path          = require("path");
// var router        = require('./config/routes');
var morgan        = require('morgan');
var bodyParser    = require("body-parser");

var mongoose      = require('mongoose');
mongoose.connect('mongodb://localhost/tradist');

var Bubble = require("./models/bubble");
var Ticker = require("./models/ticker");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// app.use('/api',router);
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/api/ticker/:name', function(req, res) {
  Ticker.find({name: req.params.name}, function (err, data) {
    if(err) res.json({message: 'Could not find commodities b/c:' + err});
    // if this is just the API, we will respond this msg
    res.json(data);
  });
});

app.get('/home', function(req, res) {
    res.render('home');
});


app.get('/timeseries/:name1/:name2', function(req, res) {
  res.render('multiple',{stockName1: req.params.name1, stockName2: req.params.name2});
});

app.get('/candlestick/:name', function(req, res) {
    res.render('candlestick', {stockName: req.params.name});
});

app.get('/heatmap', function(req, res) {
    res.render('heatmap');
});

app.get('/histogram/:name', function(req, res) {
    res.render('histogram', {stockName: req.params.name});
});

app.get('/bubbles', function(req,res) {
		Bubble.find({}, function(err, stocks) {
		if (err) res.json({Message: "Stocks cannot be found."});
		res.json(stocks);
		});
});

app.get('/bubblechart', function(req, res){
		res.render('index');
});

app.listen(port);
console.log(`server started on port ${port}`);

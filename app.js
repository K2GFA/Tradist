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
//app.use('/api',router);


var Ticker = require('./models/Ticker');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// app.use('/api',router);

// Set up our app to accept to use EJS



app.get('/api/ticker/:name', function(req, res) {
  Ticker.find({name: req.params.name}, function (err, data) {
    if(err) res.json({message: 'Could not find stocks b/c:' + err});

    // if this is just the API, we will respond this msg
    res.json(data);
  });
});

app.get('/heatmap', function(req, res) {
    res.render('heatmap');
});

app.listen(port);
console.log(`server started on port ${port}`);
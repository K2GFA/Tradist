var express = require("express");
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tradist');
var port = process.env.PORT || 3000;
// var router = require('./config/routes');
var morgan = require('morgan');
var bodyParser = require("body-parser");
var Ticker = require('./models/Ticker');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// app.use('/api',router);


// app.get('/timeseries/:name', function(req, res) {
// Ticker.find( (error, tickers) => {}
// res.json(tick)

app.get('/ticker/:name/:date', function(req, res) {
  Ticker.find({name: req.params.name,}, function (err, data) {
    // if (err)
    res.json(data);
  });
    // var data = {
    //     "ticker": {
    //         "name": req.params.name,
    //         "date": req.params.date
    //     }
    // };
});
// app.get('/ticker', function(req, res) {
//     var tick = Ticker.find();
//
//     var data = {
//         "ticker": {
//             "name": req.params.name,
//             "date": req.params.date
//         }
//     };
//     console.log(tick);
//     res.json(tick);
//
// });



app.listen(port);
console.log(`server started on port ${port}`);

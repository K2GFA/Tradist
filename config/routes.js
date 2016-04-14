var express       = require('express');
var app           = express();
var router        = express.Router();
var bcrypt        = require('bcrypt');
var jwt           = require('jsonwebtoken');

var jwtSecret = process.env.JWT_SECRET || "tradist";
app.set('secretKey', 'tradist');

var Bubble = require("../models/bubble");
var Ticker = require("../models/ticker");
var User = require("../models/user");

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/', function(req, res){
  res.send('Welcome to Tradist! The API is at http://localhost:' + port + '/api');
});



router.get('/setup', function(req, res) {

  // create a sample user
  var nick = new User({
    name: 'ABC',
    password: 'goodbye',
    email: 'a@random.com'
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

router.get('/api', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
router.get('/api/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

router.post('/authenticate', function(req, res) {
  console.log(req.body.name)
  // find the user
  User.findOne({name: req.body.name}, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found!' });
    } else if (user) {

      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) throw err;

        if (!isMatch) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {
            // if user is found and password is right
            // create a token
            var token = jwt.sign(user, router.get('secretKey'), {
              expiresIn: 360000 // expires in 100 hours
            });

            // return the information including token as JSON
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token
            });
          };
        });
      };
    });
});

// app.get('/login', function(req, res) {
//     res.render('login');
// });

router.get('/timeseries/:name1/:name2', function(req, res) {
  res.render('multiple',{stockName1: req.params.name1, stockName2: req.params.name2});
});

router.get('/candlestick/:name', function(req, res) {
    res.render('candlestick', {stockName: req.params.name});
});

router.get('/heatmap', function(req, res) {
    res.render('heatmap');
});

router.get('/histogram/:name', function(req, res) {
    res.render('histogram', {stockName: req.params.name});
});


// Bubble Chart.
// Query the bubbles collection and return the bubbles json.
router.get('/bubbles', function(req,res) {
		Bubble.find({}, function(err, stocks) {
		if (err) res.json({Message: "Stocks cannot be found."});
		res.json(stocks);
		});
});

router.get('/bubblechart', function(req, res){
		res.render('index.html');
});

//route middleware to verify a token
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, router.get('secretKey'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});


router.get('/api/ticker/:name', function(req, res) {
  Ticker.find({name: req.params.name}, function (err, data) {
    if(err) res.json({message: 'Could not find commodities b/c:' + err});
    res.json(data);
  });
});

module.exports = router;

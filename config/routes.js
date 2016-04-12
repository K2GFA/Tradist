var express = require('express');
var router = express.Router();
// var lease = require('../leases/lease');

var Bubble = require("../models/bubbles");

// Bubble Chart.
// Query the bubbles collection and return the bubbles json.
router.get('/bubbles', function(req,res) {
		Bubble.find({}, function(err, stocks) {
		if (err) res.json({Message: "Stocks cannot be found."});

		res.json(stocks);
		// res.render('index');
		});
});

router.get('/bubblechart', function(req, res){
		res.render('index.html');
});

// app.get('/api/highscores', (req,res) => {
//   res.json(data);
// })
//
// router.post('/',(req,res) =>
// {
// 	var result = candy.create(req.body.name,req.body.color);
// 	res.status(result.status).json(result.value);
// })
//
// router.get('/:id',(req,res) =>
// {
// 	var result = candy.show(req.params.id);
// 	res.status(result.status).json(result.value);
// })
//
// router.put('/:id',(req,res) =>
// {
// 	var result = candy.update(req.params.id,req.body.name,req.body.color);
// 	res.status(result.status).json(result.value);
// })
//
// router.delete('/:id',(req,res) =>
// {
// 	var result = candy.destroy(req.params.id);
// 	res.status(result.status).json(result.value);
// })

module.exports = router;

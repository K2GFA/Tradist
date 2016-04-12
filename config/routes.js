// var express = require('express');
// var router = express.Router();
// const data = require('../data.json');
// // var lease = require('../leases/lease');
//
// // INDEX
// router.get('/',(req,res) =>
// {
// 	res.json(data);
// })

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

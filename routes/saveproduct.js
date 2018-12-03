var express = require('express');
var bcrypt = require("bcrypt");
var crypto = require("crypto");
var Product = require('../models/product.model')
var router = express.Router();

router.post('/', function(req, res, next){
	let {
		ProName,
		ProPrice,
		ProCode
	} = req.body;

	let hashKey = crypto.randomBytes(5).toString('hex') + '-' + crypto.randomBytes(10).toString('hex') + '-' + crypto.randomBytes(5).toString('hex') + '-' + crypto.randomBytes(5).toString('hex');
	let hashPass = bcrypt.hashSync(ProName, bcrypt.genSaltSync(8), null);

	var productModel = new Product({
		key: hashKey,
		productName : ProName,
		productPrice: ProPrice,
		productCode: ProCode,
		hash: hashPass
	});
	productModel.save().then(item => {
		res.redirect("/products")
		console.log('heresssss');
			// res.send(item); // Chỉ bật lên khi viết APIs
		})
		.catch(err => {
			next(err);
			res.status(400).send("unable to save to database");
		});
})

module.exports = router;

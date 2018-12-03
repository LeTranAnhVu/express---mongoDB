var express = require('express');
var router = express.Router();
var Product = require("../models/product.model")

/* GET users listing. */
router.get('/', function (req, res, next) {
	User.find(function (err, items) {
		if (err) {
			return next(err);
		}
		res.render('products', {
			title: 'Product List',
			products: items
		});
		// res.json(items); // Dòng này chỉ bật khi viết API
	});

});

module.exports = router;

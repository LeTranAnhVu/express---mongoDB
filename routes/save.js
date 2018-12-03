var express = require('express');
var bcrypt = require("bcrypt")
var crypto = require("crypto")
var router = express.Router();
var User = require("../models/user.model")

router.post('/', function (req, res, next) {
	let {
		Username,
		EmailAddress,
		Tel
	} = req.body;
	let hashKey = crypto.randomBytes(5).toString('hex') + '-' + crypto.randomBytes(10).toString('hex') + '-' + crypto.randomBytes(5).toString('hex') + '-' + crypto.randomBytes(5).toString('hex');
	let hashPass = bcrypt.hashSync(EmailAddress, bcrypt.genSaltSync(8), null);

	var myData = new User({
		key: hashKey,
		username: Username,
		email: EmailAddress,
		tel: Tel,
		hash: hashPass
	});
	myData.save().then(item => {
		res.redirect("/users")
			// res.send(item); // Chỉ bật lên khi viết APIs
		})
		.catch(err => {
			next(err);
			res.status(400).send("unable to save to database");
		});
})

module.exports = router;

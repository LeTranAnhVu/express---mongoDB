var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
	res.render('formproduct',{
		title: 'Form Product'
	})
})


module.exports = router;

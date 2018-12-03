var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	key: String,
	productName: String,
	productPrice: String,
	productCode: String,
	hash: String
},{
	timestamps: true
})

var Product = mongoose.model('Product',productSchema);

module.exports = Product;

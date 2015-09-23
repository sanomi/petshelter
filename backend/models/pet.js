var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var petSchema = Schema({
	isAvailable: {type: Boolean, default: true},
	kind: String,
	variety: String,
	gender: String,
	age: Number,
	name: String,
	description: String
})

var Pet = Mongoose.model('Pet', petSchema);

module.exports = Pet
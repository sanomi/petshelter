'use strict';

var Mongoose= require('mongoose');

var userSchema = Mongoose.Schema({
	email: {type: String, required: true},
	password: {type: String, required:true},
	pets: [{type: Mongoose.Schema.ObjectId, ref: "Pet" }]
})

var User = Mongoose.model('User', userSchema);
module.exports = User;

// //////////

// Client.find({}, function(err,clients) {

// }).populate('pets');

// Client.find({}).populate('pets').exec(function(err,clients) {
	
// })

// Client.findById(clientId, function(err, client){

// }).populate('pets');

// Client.findOne({.......}, function(err, client) {
// 	Animal.findOne({.....}, function(err, pet){
// 		client.pets.push(pet._id);
// 			pet.isAvailable = false;
// 				client.save(function(err, savedClient){
// 				}pet.save(function(err, savedPet){
// 				res.send();
// 			})
// 		})
// 	});
// });
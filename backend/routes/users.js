var express = require('express');
var router = express.Router();

var User = require('../models/user')

// router.get('/', function(req, res, next) {
// 	User.find({}, function(err, users) {
// 		res.send(users);
// 	})
// });

router.post('/', function(req, res, next) {
	var user = new User(req.body);
	console.log(user);
	user.save(function(err,savedUser) {
	  res.send(savedUser);
	})
});

// router.put('/:id/adopted', function(req,res) {
// 	Item.update({_id: req.params.id}, {$set:{isAvailable: false}}, function(err){
// 		res.send('In process for adoption');
// 	});
// })

// router.delete('/:id', function(req,res,next) {
// 	Pet.findOneAndRemove({'_id': req.params.id}, function(err){
// 		res.send('Removed from system')
// 	})
// })

module.exports = router;

var express = require('express');
var router = express.Router();

var Pet = require('../models/pet')

/* GET home page. */
router.get('/', function(req, res, next) {
	Pet.find({}, function(err, pets) {
		res.send(pets);
	})
});

router.post('/', function(req, res, next) {
	var pet = new Pet(req.body);
	console.log(pet);
	pet.save(function(err,savedPet) {
	  res.send(savedPet);
	})
});

router.put('/:id/adopted', function(req,res) {
	Item.update({_id: req.params.id}, {$set:{isAvailable: false}}, function(err){
		res.send('In process for adoption');
	});
})

router.delete('/:id', function(req,res,next) {
	Pet.findOneAndRemove({'_id': req.params.id}, function(err){
		res.send('Removed from system')
	})
})

module.exports = router;

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');
const User = mongoose.model('User');

module.exports = {

    add: function(req, res){
		console.log('Users.createPet')
		var newPet = new Pet(req.body);
		newPet.save(function(err){
			if(err){
				console.log('validation errors');
				res.json(err);
			}else{
				console.log('new pet created')
				res.json(newPet);	
			}
		})
    },
    
    allUserPets: (req, res, next) => {
        console.log('Users.allUserPets');
		Pet.find().populate('_user').exec(function(err, foundPets){
			if(err){
				console.log('whoops');
				res.json(err);
			}else{
				console.log('gottem')
				res.json(foundPets);
			}
		});
	},

    edit: function(req,res){
        Pet.update({_id:req.body._id}, {$set: {pet:req.body}}, function(err, pet){
            console.log(req.body);
            if(err){
                console.log('cannot update')
            }else{
                console.log('updated', pet)
                res.json(pet)
            }
        });
    },

    destroy: (req, res) => {
		Pet.remove(req.body, function(err, pet){
		})
    },

    getRandom: function(req, res){
    
    },
    all: function(req,res){
		console.log('Users.indexPet');
		Pet.find().populate('_user').exec(function(err, foundPet){
			if(err){
				console.log('whoops');
				res.json(err);
			}else{
				console.log('gottem')
				res.json(foundPet);
			}
		});
	},
    filter: function (req, res){
        Bike.find({$or: [ 
            {'title': { '$regex': req.body.filterBy } }, 
            { 'description': { '$regex': req.body.filterBy } } 
        ]})
        .then((bikes) => { res.json(bikes); })
        .catch((err) => { res.status(488).json(err); });
    },

    show: function(req,res){
		console.log('Users.indexUsers');
		User.findOne({_id: req.params.id}, function(err, foundUsers){
			if(err){
				console.log('whoops');
				res.json(err);
			}else{
				console.log('got all the users')
				res.json(foundUsers);
			}
		});
		
	},
}
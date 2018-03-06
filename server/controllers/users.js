const mongoose = require('mongoose');
const User = mongoose.model('User');
// const bcrypt = require('bcrypt');
const session = require('express-session');

module.exports = {
	index: function(req,res){
		res.json("I haven't done this yet.");
	},


	login: function(req,res){
		res.json("I haven't done this yet.");
	},

	loginUser: function(req,res){
		// is the user in the DB?
		console.log('Users.loginUser');
		User.findOne({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email}, function(err, foundUser){
			if(err){
				console.log('whaa');
				res.json(err);
			}else if(foundUser==null){
				console.log(foundUser);
				console.log('no user in DB, creating...');
				var newUser = new User(req.body);
					console.log(newUser)
				newUser.save(function(err){
					if(err){
						console.log('failed validation');
						console.log(err)
						res.json(err);
					}else{
						console.log('created new user, adding to session');
						req.session.userId = newUser._id;
						res.json(newUser);
					}
				})
			}else{
				console.log('user IN DB, adding to session');
				req.session.userId = foundUser._id;
				res.json(foundUser);
			}
		})
	},

    current: function(req,res){
		console.log('Users.current');
		User.findOne({_id: req.session.userId}, function(err, foundUser){
			if(err){
				console.log('oops');
				res.json(err);
			}else{
				console.log('here is the user', foundUser);
				res.json(foundUser);
			}
		})
	},

    logout: function(req,res){
		req.session.destroy();
		res.json('logged out!');
	},
}


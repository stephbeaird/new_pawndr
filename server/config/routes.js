const pets = require('../controllers/pets.js');
const users = require('../controllers/users.js');
var mongoose = require('mongoose');


module.exports = function(app){
    app.get('/data/landing', users.index)
    app.get('/data/logout', users.logout);
    app.get('/data/login', users.login);
    app.get('/data/current_user', users.current);
    app.get('/petOfTheDay', pets.getRandom);
    app.get('*')
    app.post('/data/login', users.loginUser);

    app.get('/pets', pets.all);
    // app.get('/mypets', pets.allUserpets);
    app.get('/data/pet/:id', pets.show);
    app.post('/pets/search', pets.filter);
    app.post('/data/pet', pets.add);
    app.post('/pet/edit', pets.edit);
    app.post('/pet/delete', pets.destroy);

}
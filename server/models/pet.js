const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    image: {type: String},
    location: {type: String},
    user_id: {type: String}
});

mongoose.model('Pet', PetSchema);
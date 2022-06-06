const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundShema = Schema({
    title: String,
    price: String,
    description: String,
    location: String
})

module.exports = mongoose.model('Campground', CampgroundShema);
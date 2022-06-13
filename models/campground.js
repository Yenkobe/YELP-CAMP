const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundShema = Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
})

module.exports = mongoose.model('Campground', CampgroundShema);
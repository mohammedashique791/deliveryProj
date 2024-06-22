const mongoose = require('mongoose');


const HotelSchema = new mongoose.Schema({
    name: String,
    location: String
})


const Hotel = mongoose.model('Hotel', HotelSchema);


module.exports = Hotel;
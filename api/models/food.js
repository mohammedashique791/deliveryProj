const { default: mongoose } = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: String, 
    price: Number,
    category: String,
    specificity: String,
    status: Boolean,
    Hotel: String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;



const { types, ref } = require("joi");
const { default: mongoose } = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: String, 
    price: Number,
    category: String,
    specificity: String,
    status: Boolean,
    Hotel: {type:mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;



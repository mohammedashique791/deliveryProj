const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Hotel = require('./models/hotel');
const Food = require('./models/food');
const { name } = require('ejs');

mongoose.connect('mongodb://127.0.0.1:27017/deliveryApp')
    .then(() => {
        console.log("Mongo Database connected successfully");
    })
    .catch((err) => {
        console.log("Oh no Mongo Error");
    });

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));

app.get('/', (req, res) => {
    res.json('hhe');
})

app.get('/food', (req, res) => {
    res.json('ivade ethi');
})

app.post('/hotelAdding/:food/:location', async (req, res) => {
    const { food, location } = req.params;
    const hotel = new Hotel({ name: food, location: location });
    await hotel.save();
    res.json('hehe')
})

app.get('/allFoodDetails', async (req, res) => {
    const allFood = await Food.find({}).populate('Hotel');
    res.json(allFood);
})



// const foodSchema = new mongoose.Schema({
//     name: String, 
//     price: Number,
//     category: String,
//     specificity: String,
//     status: Boolean,
//     Hotel: String
// });


app.get('/dish/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Food.findById(id).populate('Hotel');
        res.json(result);
    } catch (e) {
        res.status(500).json('Cannot find any dish with the id provided.');
    }
})

app.post('/foodAdding', async (req, res) => {
    try {
        const { foodName, hotelName, price, category, specificity, isavailable } = req.body;
        newPrice = parseInt(price);
        let newavailable = ''
        if (isavailable === 'yes') {
            newavailable = true
        }
        else if (isavailable === 'no') {
            newavailable = false
        }
        else {
            res.status(500).json('type yes or no in small letter')
        }
        const newHotel = await Hotel.findOne({ name: hotelName });
        if (newHotel) {
            const newFood = new Food({ name: foodName, price: newPrice, category: category, specificity: specificity, status: newavailable, Hotel: newHotel._id });
            await newFood.save();
            res.json('Added Food')
        }
        else {
            res.status(500).json('Cannot Find Provided Hotel')
        }
    }
    catch (e) {
        console.log('Error Adding Food. ');
    }

});

app.listen(3000, () => {
    console.log(`Running on 3000 PORT`);
})
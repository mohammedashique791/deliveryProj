const express = require('express');
const cors = require('cors');   
const app = express();
const mongoose = require('mongoose');
const Hotel = require('./models/hotel');
const { name } = require('ejs');

mongoose.connect('mongodb://127.0.0.1:27017/deliveryApp')
    .then(() => {
        console.log("Mongo Database connected successfully");
    })
    .catch((err) => {
        console.log("Oh no Mongo Error");
    });

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));

app.get('/', (req, res)=>{
    res.json('hhe');
})

app.get('/food', (req, res)=>{
    res.json('ivade ethi');
})

app.post('/hotelAdding/:food/:location', async(req, res)=>{
    const {food, location} = req.params;
    const hotel = new Hotel({name: food, location: location});
    await hotel.save();
    res.json('hehe')
})

app.listen(3000, ()=>{
    console.log(`Running on 3000 PORT`);
})
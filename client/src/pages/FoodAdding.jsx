// const foodSchema = new mongoose.Schema({
//     name: String, 
//     price: Number,
//     category: String,
//     specificity: String,
//     status: Boolean,
//     Hotel: String
// });

import axios from "axios";
import { useState } from "react";



export default function FoodAdding() {
    const [foodName, setFoodName] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [specificity, setSpecificity] = useState('');
    const [isavailable, setisAvailable] = useState(true);
    async function foodAdding(ev){
        ev.preventDefault();
        const {data} = await axios.post(`/foodAdding/`, {
            foodName, hotelName, price, category, specificity, isavailable
        });
    }
    
    return (
        <div>
            <form onSubmit={foodAdding}>
                <div className="mt-10 flex flex-col gap-5">
                <div id='first' className="border p-4 mandan rounded-xl flex w-[1500px] justify-center hover:translate-x-10">
                    <input value={foodName} onChange={(ev)=> setFoodName(ev.target.value)} className="border-none outline-none" type="text" placeholder="Name of the food" />
                </div>
                <div className="border p-4 mandan rounded-xl flex w-[1450px] justify-center hover:translate-x-10">
                    <input value={hotelName} onChange={(ev)=> setHotelName(ev.target.value)} type="text" placeholder="Hotel Name" />
                </div>
                <div className="border p-4 mandan rounded-xl flex w-[1400px] justify-center hover:translate-x-10">
                    <input value={price} onChange={(ev)=> setPrice(ev.target.value)} type="text" placeholder="price which you offer" />
                </div>
                <div className="border p-4 mandan rounded-xl flex w-[1350px] justify-center hover:translate-x-10">
                    <input value={category} onChange={(ev)=> setCategory(ev.target.value)} type="text" placeholder="category" />
                </div>
                <div className="border p-4 mandan rounded-xl flex w-[1300px] justify-center hover:translate-x-10">
                    <input value={specificity} onChange={(ev)=> setSpecificity(ev.target.value)} type='text' placeholder="specificity" />
                </div>
                <div className="border p-4 mandan rounded-xl flex w-[1250px] justify-center hover:translate-x-10">
                    <input value={isavailable} onChange={(ev)=> setisAvailable(ev.target.value)} type="text" placeholder="available or not" />
                </div>
                <div className="border p-4 mandan bg-fonzzi rounded-2xl flex w-[1200px] justify-center hover:translate-x-10">
                    <button className="text-white">Add Food</button>
                </div>
                </div>
            </form>
        </div>
    )
}
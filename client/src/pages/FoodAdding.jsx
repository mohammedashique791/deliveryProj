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
import { Link, useNavigate } from "react-router-dom";


export default function FoodAdding() {
    const [foodName, setFoodName] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [specificity, setSpecificity] = useState('');
    const [isavailable, setisAvailable] = useState(true);
    const navigate = useNavigate();
    async function foodAdding(ev) {
        ev.preventDefault();
        const { data } = await axios.post(`/foodAdding/`, {
            foodName, hotelName, price, category, specificity, isavailable
        });
        return navigate('/');
    }

    return (
        <div>
            <Link to={'/'} className="border p-3 bg-fonzzi text-white rounded-xl mt-10">Go Back</Link>
            <form onSubmit={foodAdding}>
                <div className="mt-10 flex flex-col gap-5">
                    <div id='first' className="border p-2 mandan rounded-xl flex w-[1500px] justify-center hover:translate-x-10">
                        <input value={foodName} onChange={(ev) => setFoodName(ev.target.value)} className="border-none outline-none" type="text" placeholder="Name of the food" />
                    </div>
                    <div className="border p-2 mandan rounded-xl flex w-[1450px] justify-center hover:translate-x-10">
                        <input value={hotelName} onChange={(ev) => setHotelName(ev.target.value)} type="text" placeholder="Hotel Name" />
                    </div>
                    <div className="border p-2 mandan rounded-xl flex w-[1400px] justify-center hover:translate-x-10">
                        <input value={price} onChange={(ev) => setPrice(ev.target.value)} type="text" placeholder="price which you offer" />
                    </div>
                    <div className="border p-2 mandan rounded-xl flex w-[1350px] justify-center hover:translate-x-10">
                        <input value={category} onChange={(ev) => setCategory(ev.target.value)} type="text" placeholder="category" />
                    </div>
                    <label className="border p-6 mandan rounded-xl flex w-[1300px] hover:translate-x-10 hover:text-white ">
                        <input type="file" className="hidden"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-72 w-8 cursor-pointer border h-8 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </label>
                    <div className="border p-2 mandan rounded-xl flex w-[1250px] justify-center hover:translate-x-10">
                        <input value={specificity} onChange={(ev) => setSpecificity(ev.target.value)} type='text' placeholder="specificity" />
                    </div>
                    <div className="border p-2 mandan rounded-xl flex w-[1200px] justify-center hover:translate-x-10">
                        <input value={isavailable} onChange={(ev) => setisAvailable(ev.target.value)} type="text" placeholder="available or not" />
                    </div>
                    <div className="border p-3 mandan bg-fonzzi rounded-2xl flex w-[1150px] justify-center hover:translate-x-10">
                        <button className="text-white">Add Food</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
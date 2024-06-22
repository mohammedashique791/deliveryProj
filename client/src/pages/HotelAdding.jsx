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
import { Navigate, useNavigate } from "react-router-dom";




export default function HotelAdding() {
    const [foodName, setFoodName] = useState('');
    const [location, setLocation] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function HotelAdd(ev){
        ev.preventDefault();
        const {data} = await axios.post(`/hotelAdding/${foodName}/${location}`);
        setRedirect(true);
    }

    if(redirect){
        return <Navigate to={'/'} />
    }
    return (
        <div>
            <form onSubmit={HotelAdd}>
                <div className="flex flex-col gap-3 p-4 m-10">
                    <div className="">
                        <input value={foodName} onChange={(ev)=> setFoodName(ev.target.value)} type="text" placeholder="Name of Hotel" />
                    </div>
                    <div>
                        <input value={location} onChange={(ev)=> setLocation(ev.target.value)} type="text" placeholder="Location" />
                    </div>
                </div>
                <button className="bg-fonzzi px-14 py-2 rounded-3xl">Add</button>
            </form>
        </div>
    )
}
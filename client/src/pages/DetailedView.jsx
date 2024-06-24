import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function DetailedPage(){
    const {id} = useParams();
    const [dish, setDish] = useState('');

    useEffect(()=>{
        async function fetchDish(){
            const {data} = await axios.get(`/dish/${id}`);
            setDish(data);
        }
        fetchDish()
    }, []);
    return(
        <div className="pottappi">
            {dish.length === 0 && <p className="mt-5">Kurach Kanji Adukatte machaane!!!</p>}
            <h1 className="text-3xl font-semibold mt-5">{dish.name}</h1>
            <a className="underlined text-blue-400">{dish.Hotel.location}</a>
        </div>
    )
}
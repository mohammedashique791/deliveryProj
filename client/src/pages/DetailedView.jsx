import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

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
        <div className="pottappi mt-10 mx-5">
            <div className="mb-12">
            <Link to={'/'} className="border bg-fonzzi text-white px-5 py-2 rounded-xl mt-5">Go Back</Link>
            </div>
            {dish.length === 0 && <p className="mt-5">Kurach Kanji Adukatte machaane!!!</p>}
            <h1 className="text-3xl font-semibold mt-5">{dish.name}</h1>
            {dish.Hotel && (
                <div className="mt-3">
                <a className="underlined text-blue-400">{dish.Hotel.location}</a>
                </div>
            )
            }
            </div>
    )
}
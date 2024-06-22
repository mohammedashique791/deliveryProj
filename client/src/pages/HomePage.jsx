import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home(){
    const [result, setResult] = useState('');
    const [food, setFood] = useState([]);

    useEffect(()=>{
        async function fetchFood(){

        }
    })
    async function createNewUser(){
        const {data} = await axios.get('')
    }

    

    return(
        <div>
            <Link to={'/hotelAdding'} className="border p-3 rounded-xl bg-fonzzi">Add Hotel</Link>
        </div>
    )
}
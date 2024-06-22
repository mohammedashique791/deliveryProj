import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home(){
    const [result, setResult] = useState('');
    async function createNewUser(){
        const {data} = await axios.get('')
    }

    

    return(
        <div>
            <Link to={'/hotelAdding'} className="border p-3 rounded-xl bg-fonzzi">Add Hotel and Item</Link>
        </div>
    )
}
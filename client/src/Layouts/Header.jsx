import axios from "axios";
import { useEffect, useState } from "react"

export default function Header() {
    const [item, setItem] = useState('');
    // const removingPages = location.pathname === '/hotelAdding';
    // if(removingPages){
    //     return null
    // }

    useEffect(()=>{
        async function fetchFood(){
            const {data} = await axios.get('/food');
        }
        fetchFood();
}, [item]);


    return (
        <div className="">
            <header className="flex justify-between py-3">
                <div className="flex items-center">
                    <a href="">MyDelivery</a>
                </div>

                <div className="border flex gap-4 items-center px-5 py-1 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input onChange={(ev)=> setItem(ev.target.value)} className="border-none outline-none p-2" type="text" placeholder="Search For Food or Hotel" />
                </div>
                <div className="flex items-center">
                    <a href="">Poda</a>
                </div>
            </header>
        </div>
    )
}
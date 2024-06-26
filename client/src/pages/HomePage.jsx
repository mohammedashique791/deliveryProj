import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home() {
    const [result, setResult] = useState('');
    const [food, setFood] = useState([]);

    useEffect(() => {
        async function fetchFood() {
            const { data } = await axios.get('/allFoodDetails');
            setFood(data);
        }
        fetchFood();
    }, []);
    // async function createNewUser() {
    //     const { data } = await axios.get('')
    // }



    return (
        <div className="items-center">
            <div className="mb-10 mt-5">
                <Link to={'/hotelAdding'} className="border text-white p-3 rounded-xl bg-fonzzi">Add Hotel</Link>
            </div>
            <div className="flex justify-start mb-8">
                <p className="border p-3 rounded-xl">Available Dishes</p>
            </div>
            {food && food.length > 0 && (
                <div className="grid grid-cols-4 gap-10">
                    {food.map((myFood) => (
                        <>
                            {myFood.status === true && (
                                    <Link to={`/details/${myFood._id}`} key={myFood._id} className="border p-3 rounded-xl bg-fonzzi text-white">
                                        <img src="" alt="" />
                                        Name: {myFood.name}
                                        <div>
                                            Price: {myFood.price}
                                        </div>
                                        {myFood.Hotel && <p>{myFood.Hotel.name}</p>}
                                    </Link>
                            )}

                        </>
                    ))}
                </div>
            )}


        </div>
    )
}
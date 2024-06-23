import { useState } from "react"

export default function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function VerifyUser(){
        const {data} = await axios.post('/login', {username, password});
    }
    return(
        <div>
            <h1>Login</h1>
            <div className="p-4">
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <button onClick={VerifyUser}>Log In</button>
            </div>
        </div>
    )
}
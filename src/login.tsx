import { form } from "framer-motion/client";
import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [Username , setUsername] = useState("");
    const [Password , setPassword] = useState("");
    const Navigate = useNavigate();

    const handlesubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        const response =await fetch("localhost:5000/api/login",{
            method:"POST", 
            headers:{"content-type":"application/json"},
            body: JSON.stringify({Username,Password})
        });
        const data=await response.json();
        if (response.ok){
            localStorage.setItem("token" ,data.token)
            Navigate("/welcome");
        }
    };
    return(
        <form onSubmit={handlesubmit}>
            <h1>LOGIN</h1>
            <input type="text"
            value={Username}
            placeholder="username"
            onChange={(e=>setUsername(e.target.value))}
             />
             <input type="password"
            value={Password}
            placeholder="password"
            onChange={(e=>setPassword(e.target.value))}
             />
             <button type="submit" >LOGIN</button>
        </form>
    );
}
export default Login;
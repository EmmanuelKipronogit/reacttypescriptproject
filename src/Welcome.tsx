import { h1 } from "framer-motion/client";
import { useEffect,useState } from "react";
function Welcome(){
    const [Message,setMessage]= useState("");
    useEffect(()=>{
        const token =localStorage.getItem("token");
        fetch ("http://localhost:5000/api/protected",{
            headers: {"x-access-token":token ||""}
        })
            .then ((Response)=>Response.json())
            .then ((data)=>{
                if (data.message){
                    setMessage(data.message);
                }
                else{
                    setMessage("unauthorized");
                }
            });
        },[])
    
}
return(
    <h1>{message}</h1>
)
export default Welcome;
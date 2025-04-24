import React from "react";
import {motion} from "framer-motion";
 
function MainContent (){
    return(
<motion.div className="main content"
initial={{opacity:0, y:50}}
animate={{opacity:1, y:0}}
transition={{duration: 0.8}}
>
<p>this is a react app built to be very aesthetic</p>
<button onClick={()=>alert("You clicked me")}>Click me</button>
</motion.div>
    );
}
export default MainContent;
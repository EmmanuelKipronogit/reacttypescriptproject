import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./login";
import Welcome from "./Welcome";
function App(){
  return(
<Router>
  <Routes> 
    <route path= "/" element={<Login/>}/>
    <route path= "/Welcome" element={<Welcome/>}/>
     </Routes>

</Router>
  );
}
export default App;
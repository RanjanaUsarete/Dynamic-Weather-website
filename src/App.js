import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import {Route, Routes,Navigate} from 'react-router-dom';
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () =>{
  return(
    <>
    <div><Navbar/></div> 
    <div>
<Routes>

<Route exact={true}  path="/" element={<Home/>} />
<Route exact={true}  path="/About" element={<About/>} />
<Route exact={true} path="/Services" element={<Services/>} />
<Route  exact={true} path="/Contact" element={<Contact/>} />
<Route exact={true} path="/" element={<Navigate to="Home" />} />

</Routes>
</div>
<Footer/>

    </>
  );
}
export default App;
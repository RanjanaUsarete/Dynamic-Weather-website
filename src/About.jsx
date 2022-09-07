import React from "react";
import web from "../src/Images/weather.jpg";
//import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () =>{
  return(
    <>
   <Common name='Welcome to about page' 
   bname="This global website presents city wise weather information in &#8451; "
   hnmae="This website shows dynamic weather"
    imgsrc={web}
    visit="/Contact"
    btname="Contact Now"
   />
    </>
  );
};
export default About;
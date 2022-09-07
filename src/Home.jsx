import React from "react";
import './index.css';
import web from "../src/Images/cloud3.jpg";
import Common from "./Common";
const Home = () =>{
  return(
    <>
<Common name="Search dynamic Weather with" 
    bname="using my app"
    hname="I am Ranjana Usarete making this website"
    imgsrc={web}
    visit="/Services"
    btname="Get started"
   />

    </>
  );
};
export default Home;
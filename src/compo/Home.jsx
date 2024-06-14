import React, { useEffect } from "react";

import Features from "./Features";
import About from "./About";
import  Download from "./Download";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Home = ()=>{

    useEffect(() =>{
        AOS.init({duration:1000});

    },[])

   

    return(
       
     <>
        <div className="main">
        <div className="head" data-aos="fade-right" >

            <p className="lines"><span className="launch">Launch Your App</span><br/>with Confidence<br />And Creativity</p>
            
            <p className="lorem"> A product launch is the process of introducing a brand new product or service to the world. It involves various marketing and promotional activities aimed at creating buzz and demand around your new offering. The ultimate goal is to get customers excited and eager to buy the new product </p>
             
            <div class="buttons">
    <button class="btn-hover color-9">Download</button></div>
            

            </div>
       
           
            </div>
            
 
            <Features />
           
            <About />
            <Download />
        </>
    )
}



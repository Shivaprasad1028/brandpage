import React, { useEffect } from "react";

 
import AOS from "aos";
import 'aos/dist/aos.css';

const Body = ()=>{

    useEffect(() =>{
        AOS.init({duration:1000});

    },[])

   

    return(
       
        <>
        <div className="main">
        <div className="head" data-aos="fade-right" >

            <p className="lines">Launch Your App<br/>with Confidence<br />And Creativity</p>
            
            <p className="lorem"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br/>It was popularised in the 1960s with the release of Letraset sheets </p>
             
            <button className="shop"> Download</button>
         

            </div>
       
           
            </div>
        </>
    )
}
export default Body;

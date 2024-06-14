import React, { useState,useEffect } from "react";
import images from "./images/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import  {NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

import AOS from "aos";
import 'aos/dist/aos.css';




function Navbar() {
    useEffect(() =>{
        AOS.init({duration:1000});

    },[])

    const[click,setClick] = useState(false);
    const handleClick =( )=>setClick(!click);
    return(
        
   <>


       <div className="navbar" >
      <img src={images}  alt=""/>
   
        <ul className={click ? "nav-menu active" : "nav-menu "}>
        <li className="nav-item">
     
   <NavLink exact to="/" className="nav-links" activeClassName="active"  onClick={handleClick}>
                HOME  </NavLink>
            </li>
            <li className="nav-item" >
        
            <NavLink to="/features" className="nav-links" activeClassName="active" onClick={handleClick}>
                FEATURES  </NavLink>
            </li> 
            <li className="nav-item">
            <NavLink to="/about" className="nav-links" activeClassName="active" onClick={handleClick}>
                ABOUT  </NavLink>
            </li>
             <li className="nav-item">
             <NavLink to="/download" className="nav-links" activeClassName="active" onClick={handleClick}>
                DOWNLOAD  </NavLink>
            </li>
            <div className="un-btn" data-aos="fade-left" >
            <button className="button">
        LOGIN
  <div className="button__horizontal"></div>
  <div className="button__vertical"></div>

</button>
</div>
           
        
</ul>
   

<div className="nav-icon" onClick={handleClick}> {click ? ( <span className="icon"><CloseIcon  fontSize="large"   /></span>) : (  <span className="icon"><MenuIcon  fontSize="large"/></span>)}
</div>
</div>
     </>
    );
    };

    
 export default Navbar;
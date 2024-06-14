import React from 'react';
import "./Button.css";

import feature1 from './images/feature_1.png'
import feature2 from './images/feature_2.png'
import feature3 from './images/feature_3.png'
import Double from './Double';
 const Features = () => {

  return(
    <>
   <div className='feat'><span className='feat-span'> Features  </span> of Lauching App</div>
    <div className='featuring'>
    
 <Double  imgsrc={feature1} tittle="Development Course"/>
 <div className='middle'>
 <Double  imgsrc={feature2}  tittle="Money Saving Services"/></div>
 <Double  imgsrc={feature3}  tittle="Usability Interfaces"/> </div>
 </>
  )
 }
 export default Features;
 




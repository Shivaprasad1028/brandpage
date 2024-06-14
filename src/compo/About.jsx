import React ,{useEffect} from 'react';
import ig from './images/appp .jpg';
import "./Button.css";
import AOS from "aos";
import 'aos/dist/aos.css';


 export const About = () => {
    useEffect(() =>{
      AOS.init({duration:1000});

  },[])
  return (

    <>
    <div className='about'> 
    <div className='hed'>
   
    <h1 className='hd'>ABOUT</h1>
    <div className="under"> </div> </div>
    
      <div className='image' data-aos="fade-right">
        <img src={ig}/>
      </div>
      <div  className='para' data-aos="fade-left">
        <p>In today’s hyper-connected world, mobile applications have become essential tools for businesses to reach and engage their audiences. However, with millions of apps available in the App Store and Google Play, standing out from the crowd can be a difficult task.

One of the most critical components of any successful app is the app description. A well-crafted app description can make or break a user’s decision to download and use your app.

In order to craft an effective app description, it is crucial to determine the essential elements to include while also omitting unnecessary details. The description should be succinct, informative, and engaging, emphasizing the distinctive characteristics and advantages of the app. A well-crafted app description has the potential to draw in users, enhance downloads, and ultimately increase profits.</p>
      </div>
    </div>
    </>
  );
}
export default About;
import React ,{useEffect} from 'react';
import id from './images/download.png';
import "./Button.css";
import AOS from "aos";
import 'aos/dist/aos.css';


 export const Download = () => {
    useEffect(() =>{
      AOS.init({duration:1000});

  },[])

  const css ={
    margin:"3% -10%",
  }
  return (

    <>
    <div className='about'> 
    <div className='hed1'>
    <h1 className='hd'>  DOWNLOAD</h1> <div className="under"> </div></div>
    <div  className='para1' data-aos="fade-right">
        <p>In today’s hyper-connected world, mobile applications have become essential tools for businesses to reach and engage their audiences. However, with millions of apps available in the App Store and Google Play, standing out from the crowd can be a difficult task.

One of the most critical components of any successful app is the app description. A well-crafted app description can make or break a user’s decision to download and use your app.

In order to craft an effective app description, it is crucial to determine the essential elements to include while also omitting unnecessary details. The description should be succinct, informative, and engaging, emphasizing the distinctive characteristics and advantages of the app. A well-crafted app description has the potential to draw in users, enhance downloads, and ultimately increase profits.</p>
     
<div class="buttons">
    <button class="btn-hover color-9" style={css}>Get App</button></div>
              </div>
      <div className='image1' data-aos="fade-left">
        <img src={id}/>
      </div>
     
    </div>
    </>
  );
}
export default Download;

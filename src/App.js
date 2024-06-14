import React from 'react';
import './App.css';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './compo/Navbar';
import  {Home} from './compo/Home';
import Features  from './compo/Features';
import { About } from './compo/About';
import { Download } from './compo/Download';


const App=()=>{
  return(
 
   
 <>
 
<Router>
  <Navbar />
  <Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/features' element={<Features />} />
  <Route exact path='/about' element={<About />} />
  <Route exact path='/download' element={<Download />} />
</Routes>
</Router>
 





 
  </>

    
    
 
  );
}

export default App;


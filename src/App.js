import React from 'react';
import './App.css';
//import DUMMY from './components/cart/dummy';
//import Cart from './components/cart/cart';
//import { Route ,Switch} from  'react-router-dom';
import HeaderForAbout from './components/pages/headerForAbout';

import HomeBody from './components/pages/Homebody';
/*import FooterHome from './components/pages/footerHome';*/
import Contact from './components/pages/Contact';
//import Appapi from './components/AppAPI/AppAPI';

import {Route} from 'react-router-dom';


let App=()=> {
  return (
   <div>  
     <Route path='/about'>
      <HeaderForAbout/>
     </Route> 
     <Route path='/contact'>
      < Contact/>
     </Route>  
     <Route path=' '>
      <HomeBody/>
     </Route>     
   </div>
  );
}

export default App;

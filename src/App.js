import React from 'react';
import './App.css';
//import DUMMY from './components/cart/dummy';
//import Cart from './components/cart/cart';
//import { Route ,Switch} from  'react-router-dom';
//import HeaderForAbout from './components/pages/headerForAbout';
import HeaderForHome from './components/pages/headerforhome';
import HomeBody from './components/pages/Homebody';
import FooterHome from './components/pages/footerHome';
import Navigationbar from './components/pages/Navbar';


let App=()=> {
  return (
   <div>
    <Navigationbar/>
     <HeaderForHome/>
     <HomeBody/>
     <FooterHome/>
          
   </div>
  );
}

export default App;

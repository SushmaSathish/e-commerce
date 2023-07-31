import React from 'react';
import './App.css';
import Navigationbar from './components/pages/Navbar';
import DUMMY from './components/cart/dummy';
import Cart from './components/cart/cart';

let App=()=> {
  return (
   <div>
     <Navigationbar/>
     <DUMMY/>
      <Cart/>
   </div>
  );
}

export default App;

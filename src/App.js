// import React, { useState } from 'react';
import Nav from '../src/Compunents/DoorNav';
import Home from '../src/Pages/Home';
// import Admission from './Admission';
// import Founder from './Founder';
// import Facilities from './Facilities';
// import Rules from './Rules';
// import More from './More';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/Login'
// import Contact from '/';

import Book from './Pages/Book';
import Location from './Pages/Location';
import MasterClasses from './Pages/MasterClasses';
import ThePartyBox from './Pages/ThePartyBox';
import Contact from './Pages/Contact';
import DetailsPage from './Compunents/DetailsPage';
import AddToCart from './Pages/AddToCart';
import { useState } from 'react';


  
function App() {
  // const {productItems}=Data;
  //  const [cartItems,setcartItems]=useState([]);

  return (
    <>

    
   
      <Router>
        <div>
          <Nav />
          <Routes>
            
            <Route path='/home' element={<Home  />} />
     
            <Route path='/Book' element={<Book/>} />
        
            <Route path='/Location' element={<Location/>} />
        
            <Route path='/MasterClasses' element={<MasterClasses/>} />
          
          <Route path="/ThePartyBox" element={<ThePartyBox/>} />
           <Route path="/contact" element={<Contact/>} /> 
           <Route path='/' element={<Login />} /> 
           <Route path='/Detailpage' element={<DetailsPage/>} /> 
           <Route path='/AddToCart'  element={<AddToCart/>}  /> 
          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;

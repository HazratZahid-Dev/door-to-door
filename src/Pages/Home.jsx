import React from 'react';
import Filter from '../Compunents/Filter';
import Slider from '../Compunents/Slider';
import Navbar from '../Compunents/Navbar';
import { useLocation } from 'react-router-dom';
import Footer from '../Compunents/Footer';
// import DoorNav from '../Compunents/DoorNav';





const Home = () => {
  const {state}=useLocation()
  console.log(state)
  return (
    <div className=''>
    
        {/* <Navbar/> */}
        <Slider/>
          <Filter/> 
          <Footer />
          {/* <DoorNav/> */}
       
       
    
    </div>
  )
}

export default Home
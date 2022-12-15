import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/red.png'
import { FaTimes, FaBars } from "react-icons/fa";

import '../Style/Navbar.css'
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { MdPhone } from "react-icons/md";
// import { IconName } from "react-icons/fa";

// import './index.css'
// import './App.css'
function Navbar() {
  const [icon, seticon] = useState(false);
  const [state, setstate] = useState(false);

  const [DropDown, setDropDown] = useState(false);
  const HandleClicks = () => {
    setstate(!state);
    setDropDown(!DropDown);
  };
  return (


    <div className="navbar">
        <img src={logo} className=" logo  " alt=""  />   
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
        id='main-menu'
      >
        
        <li><Link to="/home" onClick={() => seticon(!icon)}>HOME</Link></li>
        <li><Link to="/Book" onClick={() => seticon(!icon)}>BOOK</Link></li> 
        <li><Link to="/location" onClick={() => seticon(!icon)} >LOCATION</Link></li> 
        <li><Link to="/MasterClasses" onClick={() => seticon(!icon)}> MASTER CLASS</Link></li> 
        <li><Link to="/ThePartyBox " onClick={() => seticon(!icon)}>THE PARTY BOX</Link></li> 
        <li><Link to="/contact" onClick={() => seticon(!icon)}>CONTACT</Link></li> 
        <li><Link to="/" onClick={() => seticon(!icon)}>Login</Link></li>
       
      </ul>
       {/* <input type='text' placeholder="Search here" className="rounded-md p-1 bg-yellow-700 border text-white"/>  */}

       <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div> 
    </div>
  );

}
export default Navbar;
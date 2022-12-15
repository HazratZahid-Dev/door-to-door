import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../Style/DoorNav.css";
import logo from "../Images/red.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [icon, seticon] = useState(false);
  
  return (
    <div className="door-navbar">
      <div>
        <img src={logo} className=" Door-Logo p-1" alt="" />
        {/* <p className="logo_p text-red-600 font-bold"><span>High </span> Drinks</p> */}
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        {/* <Link to="/">Login</Link> */}
        <li><Link to="/home" onClick={() => seticon(!icon)}>Home</Link></li>
        <li><Link to="/Book" onClick={() => seticon(!icon)}>BOOK</Link></li>
        <li><Link to="/location" onClick={() => seticon(!icon)}>LOCATION</Link></li>
        <li><Link to="/MasterClasses" onClick={() => seticon(!icon)}> MASTER CLASS</Link></li>
        <li><Link to="/ThePartyBox" onClick={() => seticon(!icon)}> THE PARTY BOX</Link></li>
        <li><Link to="/contact" onClick={() => seticon(!icon)}>CONTACT</Link></li>
        <li><Link to="/DetailPage" onClick={() => seticon(!icon)}></Link></li>
        <li><Link to="/" onClick={() => seticon(!icon)}>Login</Link></li>
        <li><Link to="/AddToCart" onClick={() => seticon(!icon)}>Icons</Link></li>
      
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;

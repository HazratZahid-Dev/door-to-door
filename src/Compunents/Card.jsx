import React, { useState } from "react";

//  import Popup from "./Popup";
import { FaCartPlus } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import '../Style/Card.css'

import img1 from "../Images/b1.jpg";
import img2 from "../Images/b2.jpg";
import img3 from "../Images/b3.jpg";
import img4 from "../Images/b4.jpg";
import img5 from "../Images/b5.jpg";
import img6 from "../Images/b6.jpg";
import img7 from "../Images/b7.jpg";
import img8 from "../Images/b8.jpg";
import img9 from "../Images/b9.jpg";
import img10 from "../Images/b10.jpg";
import img11 from "../Images/b11.jpg";
import img12 from "../Images/b12.jpg";
import img13 from "../Images/b13.jpg";
import img14 from "../Images/b10.jpg";
import img15 from "../Images/21.jpg";
import img16 from "../Images/b11.jpg";
import img17 from "../Images/b9.jpg";
import img18 from "../Images/b8.jpg";
import img19 from "../Images/b9.jpg";
import img20 from "../Images/23.jpg";
import DetailsPage from "./DetailsPage";


const Data = [
  { id: 1, name: "Barbera", desc: 'Spring Water ', text: 'Product preview card component', price: "60$", pic: img1, },
  { id: 2, name: "Cabernet Franc", desc: 'Water Water Everywhere', text: 'Product preview card component', price: "90$", pic: img2 },
  { id: 3, name: "Cabernet Sauvignon", desc: 'Aqua Blue Waters', text: 'Product preview card component', price: "65$", pic: img3 },
  { id: 4, name: "Carignan", desc: 'In the Clouds Water Company', text: 'Product preview card component', price: "90$", pic: img4 },
  { id: 5, name: "Charbono ", desc: 'Naturally Hydrating Water', text: 'Product preview card component', price: "80$", pic: img5 },
  { id: 6, name: "Chardonnay", desc: 'Providence Wells', text: 'Product preview card component', price: "90$", pic: img6 },
  { id: 7, name: "Dolcetto ", desc: 'Cool Water Company', text: 'Product preview card component', price: "70$", pic: img7 },
  { id: 8, name: "Gamay", desc: 'Crystal Natural Spring Water', text: 'Product preview card component', price: "80$", pic: img8 },
  { id: 9, name: "Faithful Springs", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "5$", pic: img9 },
  { id: 10, name: "Aqua Dreams", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "8$", pic: img10 },
  { id: 11, name: "Clear Blue Ocean", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "8$", pic: img11 },
  { id: 12, name: "The Boundary Waters", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "9$", pic: img12 },
  { id: 13, name: "Pura Vida", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "890", pic: img13 },
  { id: 14, name: "Saturated Spring", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "10$", pic: img14 },
  { id: 15, name: "Life's Spring", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "12$", pic: img15 },
  { id: 16, name: "The Waterlog", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "5$", pic: img16 },
  { id: 17, name: "Ever Pure", desc: 'Waterscape Beverage Company', text: 'Product preview card component', price: "10$", pic: img17 },
  { id: 18, name: "Ocean Sunrise", desc: 'Waterscape Beverage Company', text: 'Product preview card component', price: "8$", pic: img18 },
  { id: 19, name: "Hydration Water Station", desc: 'Waterscape Beverage Company', text: 'Product preview card component', price: "15$", pic: img19 },
  { id: 20, name: "Quick Sip H2O", desc: 'Waterscape Beverage Company', text: 'Product preview card component', price: "6$", pic: img20 }
];
// import {CardData} from '../Config/CardData'


const Card = () => {
  //  const [buttonPopup,setbuttonPopup]=useState(false)
  const navigate=useNavigate()
  const Detail=()=>{
    navigate('/DetailPage');
  }





  return (
    <div className="flex flex-wrap  gap-10 justify-center Card__main bg-slate-300 p-5">
      {Data.map((it) => (
        <>
          <div>
            <div key={it.id} className='border-2 rounded-sm h-[650px] w-[360px]  '>
              <div className="overflow">
                <img
                  src={it.pic}
                  className=" image-card rounded-sm  "
                  onClick={DetailsPage()}

                ></img>
              </div>
              <p className="  mt-3 ">{it.red}</p>
              <h6 className="text-left m-auto font-bold mx-2 py-2  ">{it.desc}</h6>
              <h3 className=" font-bold m-auto px-2 py-1">{it.text}</h3>
              <div className="flex justify-center align-items-center">
                <p className="  text-left text  text-red font-bold ">{it.name} {it.price}</p>



              </div>

              {/* <p className=" text mb-3 ">{it.price}</p> */}

              <button className="border-black border-2 flex p-1 py-10 m-auto rounded-lg ">
                < FaCartPlus /> Add to cart
              </button>

            </div>
            <Popup trigger={buttonPopup} setTrigger={setbuttonPopup} >
              {/* <h4>{it.id}</h4> */}
              <h1>this is my popup</h1>
              <h1>this is my popup</h1>
              <h1>this is my popup</h1>
              <h1>this is my popup</h1>
            </Popup>
          </div>
          {/* <CardData/> */}

        </>
      ))}
    </div>
  );
};

export default Card;

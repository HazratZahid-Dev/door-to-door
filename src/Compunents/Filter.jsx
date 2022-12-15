import React, { useState } from 'react'
import '../Style/Card.css'
import { FaCartPlus } from "react-icons/fa";
// import {CardData} from '../Config/CardData'


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
import { Link, useNavigate } from 'react-router-dom';


const CardData = [
    { id: 1, option: 'wine', all: 'all', name: "Barbera", desc: 'Spring Water ', text: 'Product preview card component', price: "60$", pic: img1, },
    { id: 2, option: 'wine', all: 'all', name: "Cabernet Franc", desc: 'Water Water Everywhere', text: 'Product preview card component', price: "90$", pic: img2 },
    { id: 3, option: 'wine', all: 'all', name: "Cabernet Sauvignon", desc: 'Aqua Blue Waters', text: 'Product preview card component', price: "65$", pic: img3 },
    { id: 4, option: 'wine', all: 'all', name: "Carignan", desc: 'In the Clouds Water Company', text: 'Product preview card component', price: "90$", pic: img4 },
    { id: 5, option: 'wine', all: 'all', name: "Charbono ", desc: 'Naturally Hydrating Water', text: 'Product preview card component', price: "80$", pic: img5 },
    { id: 6, option: 'wine', all: 'all', name: "Chardonnay", desc: 'Providence Wells', text: 'Product preview card component', price: "90$", pic: img6 },
    { id: 7, option: 'wine', all: 'all', name: "Dolcetto ", desc: 'Cool Water Company', text: 'Product preview card component', price: "70$", pic: img7 },
    { id: 8, option: 'wine', all: 'all', name: "Gamay", desc: 'Crystal Natural Spring Water', text: 'Product preview card component', price: "80$", pic: img8 },
    { id: 9, option: 'water', all: 'all', name: "Faithful Springs", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "5$", pic: img9 },
    { id: 10, option: 'water', all: 'all', name: "Aqua Dreams", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "8$", pic: img10 },
    { id: 11, option: 'water', all: 'all', name: "Clear Blue Ocean", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "8$", pic: img11 },
    { id: 12, option: 'water', all: 'all', name: "The Boundary Waters", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "9$", pic: img12 },
    { id: 13, option: 'water', all: 'all', name: "Pura Vida", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "890", pic: img13 },
    { id: 14, option: 'water', all: 'all', name: "Saturated Spring", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "10$", pic: img14 },
    { id: 15, option: 'water', all: 'all', name: "Life's Spring", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "12$", pic: img15 },
    { id: 16, option: 'water', all: 'all', name: "The Waterlog", desc: 'Mountain Stream Water', text: 'Product preview card component', price: "5$", pic: img16 },
    { id: 17, option: 'water', all: 'all', name: "Ever Pure", desc: 'Waterscape Beverage Company', text: 'Product preview card component', price: "10$", pic: img17 },
    { id: 18, option: 'water', all: 'all', name: "Ocean Sunrise", desc: 'Waterscape Beverage Company', text: 'Product preview card component', price: "8$", pic: img18 },
    { id: 19, option: 'water', all: 'all', name: "Hydration Water Station", desc: 'Waterscape Beverage Company', text: 'Product preview card component', price: "15$", pic: img19 },
    { id: 20, option: 'water', all: 'all', name: "Quick Sip H2O", desc: 'Waterscape Beverage Company', text: 'Product preview card component', price: "6$", pic: img20 }
];


const Filter = () => {
   const navigate= useNavigate()
    const [filter, setfilter] = useState(CardData)
    const filterRecord = (opt) => {
        if (opt == 'all') {
            setfilter(CardData.filter(it => it.all == opt))
        }
        if (opt === 'wine') {
            setfilter(CardData.filter(it => it.option == opt))
        }
        if (opt === 'water') {
            setfilter(CardData.filter(it => it.option == opt))
        }
    }
    const [search, setsearch] = useState("");


    return <div className='flex flex-wrap  gap-4 justify-center Card__main bg-slate-300 p-5'>
        <div className='w-[100%] h-[30px] bg-slate-300 justify-center flex gap-6 m-auto'>

            <button className=' all-drinks px-3  rounded-lg bg-slate-100' onClick={() => filterRecord('all')}>All Drinks</button><br />
            <button className='all-drinks  px-3 rounded-lg bg-slate-100' onClick={() => filterRecord('wine')}>Alcohlic</button><br />
            <button className='all-drinks  px-3  rounded-lg bg-slate-100' onClick={() => filterRecord('water')}>None-Alcohlic</button>
            <input className='drinks-search rounded-md text-center  bg-slate-100' type='text' value={search} onChange={(e) => setsearch(e.target.value)} placeholder='search' ></input>


        </div>
       


        {filter.filter(fill => {
            if (search === '') return fill
            else if (fill.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return fill.name;

            }
        }).map(it => {

            return <div className='border-2 border-orange-400 rounded-lg h-[600px] w-[360px] '>


                <div className="overflow">
                {/* <Link to={"/detailspage"} state={it}> */}

                    <img src={it.pic}
                     onClick={()=>navigate("/detailspage",{state:it})}
                     className=" image-card rounded-lg  "  />
                {/* </Link> */}
                </div>

                <p className=' font-bold text-orange-600 text-center mx-2 py-2 '>{it.desc}</p>
                <h3 className='font-bold m-auto px-2 py-1 mt-2 text-center'>{it.text}</h3>
                <div className="flex justify-center align-items-center">
                    <h1 className="  text-left text  text-red font-bold mt-3">{it.name} {it.price}</h1>

                </div>
                <button className="border-orange-400 border-2 flex  p-1 m-auto mt-3 rounded-lg gap-2 ">
                    <span className='mt-1'>< FaCartPlus /></span> Add to cart
                </button>

            </div>
            
        })

        }

    </div>
   
    

}

export default Filter
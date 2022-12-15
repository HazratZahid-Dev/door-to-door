
import React, { useState, useEffect } from 'react';
// import { FaArrowCircleLeft } from "react-icons/fa";
// import { FaArrowCircleRight} from "react-icons/fa";

import { sliderData } from "../Config/SliderData";
import '../Style/slider.css'

const Slider = () => {
    const [index, setindex] = useState(0);
    const slide = sliderData[index];
  
    let forward = index + 1;
    let length = sliderData.length;
    let back = index - 1;
  
    const handleForward = () => {
      forward === length ? setindex(0) : setindex(forward);
    };
    const handleBackward = () => {
      back < 0 ? setindex(length - 1) : setindex(back);
    };
  
    useEffect(() => {
      const terminate = setTimeout(() => {
        handleForward();
      }, 4000);
      return () => clearTimeout(terminate);
    }, [index]);
  
    return (
      <>
      
      <section className="slider">
        {/* <p>{slide.id}</p> */}
        <img src={slide.image} alt="" />
        <div className="slider__arrow">
           <span onClick={handleBackward}>
            {/* <FaArrowCircleLeft /> */}
          </span>
          <span onClick={handleForward}>
            {/* <FaArrowCircleRight /> */}
          </span> 
        </div>
      </section>
      </>
    );
  };

export default Slider
import React from "react";
import "../Style/Location.css";
import img1 from "../Images/b10.jpg";
import img2 from "../Images/b8.jpg";
import Footer from "../Compunents/Footer";

const Location = () => {
  return (
    <>
      <div className="Location-bg-image">
        <h1 className=" image-text">LOCATION</h1>
      </div>
      <div className="flex flex-wrap m-4">
        <div className=" w-[600px] h-[500px]">
          <img className=" w-[600px] h-[500px] m-auto ml-6" src={img1} alt="first"></img>
        </div>

        <div className=" w-[690px] h-[500px] m-auto left-side justify-center text-center py-40">
          <h1 className="left-heading">RED DOOR CHESTER</h1>
          <br/>
          <p className="left-paraghraph">
            BELOW BLOSSOMS HOTEL,
            <br />
            ST JOHN STREET, CHESTER,
            <br />
            CH1 1HL
          </p>
          <button type="button" className="location-btn mt-3">VISIT TO CHESTER SITE</button>
        </div>
      </div>

      <div className="flex flex-wrap m-4">
        <div className=" w-[600px] h-[500px]">
          <img className=" w-[600px] h-[500px] m-auto" src={img2} alt="first"></img>
        </div>

        <div className=" w-[690px] h-[500px] m-auto left-side justify-center text-center py-40">
          <h1 className="left-heading">RED DOOR CHESTER</h1>
          <br/>
          <p className="left-paraghraph">
          21-23 BERRY STREET,<br/>
LIVERPOOL,<br/>
L1 9DF
          </p>
          <button type="button" className="location-btn mt-3">VISIT TO CHESTER SITE</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Location;

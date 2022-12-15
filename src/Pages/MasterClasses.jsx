import React from "react";
import "../Style/Location.css";
import img1 from "../Images/b10.jpg";
import img2 from "../Images/b8.jpg";
import Footer from "../Compunents/Footer";
import '../Style/MasterClasses.css'

const MasterClasses= () => {
    return (
        <>
            <div className="Master-bg-image">
                <h1 className=" master-image-text">MASTER CLASSES</h1>
            </div>
            <div className="flex flex-wrap m-4">
                <div className=" w-[600px] h-[500px]">
                    <img className=" w-[600px] h-[500px] m-auto ml-6" src={img1} alt="first"></img>
                </div>

                <div className=" w-[690px] h-[500px] m-auto left-side justify-center text-center py-40">
                    <h1 className="left-heading">CLASSIC MASTERCLASS</h1>
                    <br />
                    <p className="left-paraghraph">
                    Learn from the best AND master the art of our<br/> extraordinary cocktails
                    </p>
                    <button type="button" className="location-btn mt-3">CLASSIC MASTER CLASSES</button>
                </div>
            </div>

            <div className="flex flex-wrap m-4">
                <div className=" w-[600px] h-[500px]">
                    <img className=" w-[600px] h-[500px] m-auto" src={img2} alt="first"></img>
                </div>

                <div className=" w-[690px] h-[500px] m-auto left-side justify-center text-center py-40">
                    <h1 className="left-heading">SPARKLING MASTERCLASS</h1>
                    <br />
                    <p className="left-paraghraph">
                    Sparkling lovers, this one is for you.<br/> Make it special and arrive to either<br/> Champagne or Prosecco. Followed <br/>  bya Cocktail Masterclasswith <br/>an expert.
                    </p>
                    <button type="button" className="location-btn mt-3">VISIT TO CHESTER SITE</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MasterClasses;

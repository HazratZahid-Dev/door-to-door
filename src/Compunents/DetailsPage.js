import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/DetailPage.css";
import { FaArrowLeft,FaStar,FaChevronDown } from "react-icons/fa";

const DetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="p-20 detail-page">
      <div className="Detail-btn ">
        <button
          onClick={(e) => navigate("/home")}
          className="text-3xl  rounded-full p-3 font-normal text-orange-600  "
        >
          {<FaArrowLeft />}
        </button>
      </div>

      <div className="inner-detail m-auto justify-center items-center p-10">
        <img src={state.pic} className="h-80 w-[400px] rounded-lg" />
        <h3 className="font-bold mt-8">
          {state.name} {state.price}
        </h3>
        <p className="font-bold ">{state.desc}</p>

        
        <h3 className="font-bold">{state.text}</h3>
        <p className="p-4">
          When you click on a product on Amazon, it will open a new page. This
          page tells you about that specific item in detail, including a
          description of it, as well as its measurements, materials,
          ingredients, or installation instructions.
          When you click on a product on Amazon, it will open a new page. This
          page tells you about that specific item in detail, including a
          description of it, as well as its measurements, materials,
          ingredients, or installation instructions.
        </p>
        <h3></h3>

        <p className="font-bold flex gap-2 text-orange-500"><FaStar/> <FaStar/><FaStar/><FaStar/><FaStar/> <FaChevronDown/> <span className='text-blue-700 flex my-0'>134</span> </p>
      </div>
    </div>
  );
};

export default DetailsPage;

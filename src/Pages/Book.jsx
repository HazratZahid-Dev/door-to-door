import React from "react";
import Footer from "../Compunents/Footer";

import "../Style/Book.css";
const Book = () => {
  return (
    <>
      <div className="Book-bg-image">
      <h1 className=" image-text">DOOR TO DOOR</h1>
      </div>
    
      <div className="justify-center text-center  p-20">
        <h1 className="book-text">
          IF YOU WOULD LIKE TO MAKE A BOOKING,<br/> PLEASE FILL OUT THE FORM BELOW
          AND WE’LL<br/> DO THE REST!
        </h1>
      </div>
      <Footer/>
    </>
  );
};

export default Book;

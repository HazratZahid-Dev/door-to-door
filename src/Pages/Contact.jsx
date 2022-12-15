import React from "react";
import Footer from "../Compunents/Footer";
import "../Style/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-bg">
        <h1 className="contact-heading">CONTACT</h1>
      </div>
      <div className="justify-center text-center contact-input-main ">
        <input
          type="text"
          className="contact-input w-[500px] h-[50px] rounded-sm"
          placeholder="Enter your name "
        ></input>
        <br />
        <br />
        <input
          className="contact-input rounded-sm"
          type="text"
          placeholder="Enter your email"
        ></input>
        <br />
        <br />
        <input
          className="contact-input  rounded-sm"
          type="text"
          placeholder="Enter yout Phone number"
        ></input>
        <br />
        <br />
        <input
          className="contact-input  rounded-sm"
          type="text"
          placeholder="Enter your inquiry type"
        ></input>
        <br />
        <br />
        <textarea
          type="text"
          className="contact-text-area"
          rows="4"
          cols="51"
          placeholder="write message here"
        ></textarea>
        <br />
        <br />
        <div className="flex flex-wrap justify-center gap-2">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>{" "}
          <p> I confirm I have read the Terms & Conditions</p>
        </div>
        <br />
        <button type="button" className="contact-btn">
          send
        </button>
      </div>

      <div className="contact-map-text flex flex-wrap justify-center m-4 ">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.105472455196!2d71.5170187146804!3d33.989824528465384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9177479eea517%3A0x74b026af758d23b8!2sBacha%20Khan%20International%20Airport%20Peshawar!5e0!3m2!1sen!2s!4v1665985318398!5m2!1sen!2s"
            className=" map-section w-[646px] h-[400px] "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-right-side w-[647px] h-[400px] ">
          <h1 className="text-2xl font-bold text-white">RED DOOR LIVERPOOL</h1>
          <br />
          <p className="text-grey">
            21-23 BERRY STREET,
            <br />
            LIVERPOOL,
            <br />
            L1 9DF
            <br />
            <br />
            0151 709 7040
            <br />
            LIVERPOOL@REDDOOR.UK.COM
          </p>
          <br/>
          <button type="button" className="CONTACT-BTN">VISIT LIVE POOL SITE</button>
        </div>
      </div>

      {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.105472455196!2d71.5170187146804!3d33.989824528465384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9177479eea517%3A0x74b026af758d23b8!2sBacha%20Khan%20International%20Airport%20Peshawar!5e0!3m2!1sen!2s!4v1665985318398!5m2!1sen!2s"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}

      <Footer />
    </>
  );
};

export default Contact;

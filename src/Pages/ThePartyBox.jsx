import React from "react";
import "../Style/ThePartyBox.css";
import party from "../Images/b3.jpg";
import party1 from "../Images/b4.jpg";
import party2 from "../Images/b5.jpg";
import party3 from "../Images/b6.jpg";
import party4 from "../Images/b7.jpg";
import Footer from "../Compunents/Footer";

const ThePartyBox = () => {
  return (
    <>
      <div className="party-class-bg text-center text-white">
        <h1 className="party-heading">The Party Box</h1>
      </div>
      <div className="text-center p-[50px] ">
        <h1 className="Changing">CHANGING THE WORLD, ONE DRINK AT A TIME…</h1>
        <br />
        <p className="ThePartyBox-para">
          From the guys that brought you Chester and Liverpool’s best cocktail
          bars, meet The Party Box.
          <br />
          <br />
          Providing a fully bespoke service and serving every drink under the
          sun with award-winning bar
          <br /> staff, the The Party Box is a mobile-bar, perfect for any
          event. Weddings, birthdays, <br />
          corporate parties – you name it, we can serve it (and better than
          anyone else).
        </p>
      </div>
      <div className="poison">
        <h1 className="m-auto text-center py-[30px] text-white font-bold text-3xl">
          WHAT'S YOUR POISON?
        </h1>
        <p className="text-white text-center">
          Every event is just as special as we are and so we offer bespoke
          packages based on your
          <br /> requirements, but to give you a gist…
        </p>
      </div>
      <div className="party-img-text flex flex-wrap ">
        <div>
          <img className="w-[653px] h-[400px]" src={party}></img>
        </div>
        <div className="party-right-side w-[655px] h-[400px] ">
          <h1 className="text-2xl font-bold text-white">BaCK TO BASICS</h1>
          <br />
          <p className="text-white">
            Hire The Party Box for £500.
            <br />
            Supply your own selection of drinks.
            <br />
            A minimum of 2 staff members will be on hand to serve drinks
            <br /> (£8pp, per hour for a minimum of three hours.)
          </p>
        </div>
      </div>

      <div className="party-img-text flex flex-wrap ">
        <div>
          <img className="w-[653px] h-[400px]" src={party1}></img>
        </div>
        <div className="party-right-side w-[655px] h-[400px] ">
          <h1 className="text-2xl font-bold text-white">GETTING HOT</h1>
          <br />
          <p className="text-white">
            Hire The Party Box for £500.
            <br />
            Supply your own selection of drinks.
            <br />
            A minimum of 2 staff members will be on hand to serve drinks
            <br /> (£8pp, per hour for a minimum of three hours.)
          </p>
        </div>
      </div>

      <div className="party-img-text flex flex-wrap ">
        <div>
          <img className="w-[653px] h-[400px]" src={party2}></img>
        </div>
        <div className="party-right-side w-[655px] h-[400px] ">
          <h1 className="text-2xl font-bold text-white">GETTING HOTTER</h1>
          <br />
          <p className="text-white">
            Hire The Party Box for £300.
            <br />
            Pre-pay for 200 cocktails (£7.50 per cocktail).
            <br />
            Can supply beer, wine, spirits and mixers.
            <br />
            A minimum of 2 staff members will be on hand to serve drinks.
            <br />
            Discounts available for larger bookings.
          </p>
        </div>
      </div>

      <div className="party-img-text flex flex-wrap ">
        <div>
          <img className="w-[653px] h-[400px]" src={party3}></img>
        </div>
        <div className="party-right-side w-[655px] h-[400px] ">
          <h1 className="text-2xl font-bold text-white">MADE IT</h1>
          <br />
          <p className="text-white">
            Hire The Party Box for £200.
            <br />
            Pre-pay for 500 cocktails (£6.50 per cocktail).
            <br />
            Can supply beer, wine, spirits and mixers.
            <br />A minimum of 2 staff members will be on hand to serve drinks.
          </p>
        </div>
      </div>

      <div className="party-img-text flex flex-wrap ">
        <div>
          <img className="w-[653px] h-[400px]" src={party4}></img>
        </div>
        <div className="party-right-side w-[655px] h-[400px] ">
          <h1 className="text-2xl font-bold text-white">MOVIN’ ON UP</h1>
          <br />
          <p className="text-white">
            Hire The Party Box for £300, based on a minimum of 50 guests.
            <br />
            Cash bar/pay as you go service.
            <br />
            Guests pay £7.50 per cocktail.
            <br />A minimum of 2 staff members will be on hand to serve drinks.
          </p>
        </div>
      </div>
      <div className="footer-para justify-center text-center p-20 font-bold">
        <p>
          All packages can be adjusted and made completely bespoke to your
          party’s <br/>needs. Please email emmawilliamson@reddoor.uk.com or call us
          on 0151 709<br/> 7040 to talk about your next party.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default ThePartyBox;

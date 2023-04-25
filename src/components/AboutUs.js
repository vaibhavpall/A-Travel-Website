import React from "react";
import { FaYoutube, FaInstagram, FaEnvelope, FaWhatsapp} from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <div id="about-div" className="text-center">
          <img id='about-main-image' className="img-fluid" style={{boxShadow:"0px 10px 15px Black"}} src={require('./images/about_us_new.jpg')} alt="Card Img"/>
          <div className="container" id="about-child-div">
            <h1 className="mt-4"><b>About Us</b></h1>
            <p className="mt-4">Chasing our goals, we present to you "The Modern Gypsies". PARINDEY swears to make your traveling experience indelible. We will provide you with the best nomadic hostels in the zone at a pocket-friendly price, street or local food that you've never tried before, and a vibe that you'll not get anywhere else.</p>
            <hr/>
            <a href="mailto:travelwithparindey7@gmail.com" style={{color:'black'}}> <FaEnvelope className="fa-2x m-2"/></a>
            <a href="https://www.instagram.com/travel_with_parindey7/" target='_blank' rel="noopener noreferrer" style={{color:'black'}}><FaInstagram className="fa-2x m-2"/></a>
            <a href="https://www.youtube.com/@parindey_7" target='_blank' rel="noopener noreferrer" style={{color:'black'}}><FaYoutube className="fa-2x m-2"/></a>
            <a href="https://wa.me/+918117877065" target='_blank' rel="noopener noreferrer" style={{color:'black'}}><FaWhatsapp className="fa-2x m-2"/></a>
            <p className="mt-4">Made with <span role="img" aria-label="sheep">❤️</span> in Punjab</p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
      </div>
      <div className="offers-left">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;

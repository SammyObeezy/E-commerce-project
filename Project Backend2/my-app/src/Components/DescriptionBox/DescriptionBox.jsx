import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Explore the latest fashion trends and add stylish pieces to your
          wardrobe with our e-commerce page.
        </p>
        <p>
          Discover our e-commerce platform, designed exclusively for fashion
          enthusiasts. Browse through our collections, filter by size, color,
          and style, and enjoy a seamless shopping experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

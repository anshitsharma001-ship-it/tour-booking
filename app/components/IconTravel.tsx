"use client";
import React from "react";

const logos = [
  "/logo-10.png",
  "/logo-06.png",
  "/logo-07.png",
  "/logo-08.png",
  "/logo-09.png",
];

const IconTravel: React.FC = () => {
  return (
    <section className="icon-travel-section pb-5">
      <div className="icon-travel-container">
        {logos.map((logo, index) => (
          <div key={index} className="icon-travel-item">
            <img src={logo} alt={`Logo ${index + 6}`} className="icon-travel-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconTravel;
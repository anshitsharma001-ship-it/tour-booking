"use client";
import React from "react";

const AdventureSection: React.FC = () => {
  return (
    <section className="adventure-section">
      <div className="adventure-text">
        <h3
            className="orange-heading mb-2 pb-4"
            style={{ fontFamily: "cursive", fontSize: "1.5rem", color: "#f97316" }} // orange-500
          >
          
              Wandering Souls
          </h3>
        <h1 className="adventure-heading">Discover Your Next Adventure</h1>
        <p className="adventure-paragraph">
          Whether you're planning a romantic honeymoon or a family vacation, our price section has got you covered.
          So, start browsing today and find the perfect vacation package at a price that won't leave you feeling guilty.
        </p>

        <div className="adventure-options">
          <div>
            <div className="adventure-option">Organized Group Tour</div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div>
            <div className="adventure-option">Single Customized Trip</div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>

        <button className="adventure-button">MORE INFO</button>
      </div>

      <div className="adventure-image">
        <img 
          src="/para-05.jpg" 
          alt="People walking on bridge" 
          style={{ height: "540px", width: "100%", objectFit: "cover" }} 
        />
      </div>
    </section>
  );
};

export default AdventureSection;
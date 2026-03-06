"use client";
import React from "react";

const TravelBlogSection: React.FC = () => {
  return (
    <section
      className="travel-blog-section"
      style={{
        backgroundImage: 'url("/para-18.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
     
      <div
        style={{
       
        }}
      ></div>

      <div className="travel-blog-text" style={{ position: "relative", zIndex: 2 }}>
        <h3 className="travel-blog-subheading">Roaming Tales</h3>
        <h1 className="travel-blog-heading">Travel Blog</h1>
        <p className="travel-blog-paragraph">
          We share our experiences, tips and travel stories to inspire and guide our readers in their own wanderlust adventures.
          From hidden gems to popular destinations, we showcase the beauty and diversity of the world,
          and promote responsible and sustainable travel.
        </p>
      </div>
    </section>
  );
};

export default TravelBlogSection;
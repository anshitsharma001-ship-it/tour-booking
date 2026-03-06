"use client";
import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Discover the Hidden Gems",
    date: "April 7, 2025",
    description: "Benefits of traveling alone, from the freedom to discover new places with new friends.",
    image: "/para-14.jpg"
  },
  {
    title: "Must-See Landmarks",
    date: "April 7, 2025",
    description: "Iconic landmarks that make Europe one of the world's most popular travel destinations.",
    image: "/para-13.jpg"
  },
  {
    title: "Traveling on a Budget",
    date: "April 7, 2025",
    description: "Practical advice for travelers who want to see the world without breaking the bank.",
    image: "/para-11.jpg"
  },
  {
    title: "Explore the Wonders",
    date: "April 7, 2025",
    description: "Step-by-step guide to help you plan a stress-free and enjoyable trip.",
    image: "/para-12.jpg"
  }
];

const BlogSection: React.FC = () => { 
  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >

      <motion.div
        className="blog-left pt-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="blog-main-image">
          <img src="/para-08.jpg" alt="Couple on scooter" />
        </div>
        <div className="blog-main-text">
          <div className="row">
            <div className="col-lg-3">
              <h6 className="date ">April 7,2025</h6>
            </div>
          </div>
          <h3>Plan the Perfect Vacation</h3>
          <p>
            Planning a vacation can be overwhelming, but this post offers a step-by-step guide to help readers create a comprehensive travel itinerary. From choosing a destination to booking accommodations and activities, readers will learn how to plan a stress-free and enjoyable trip.
          </p>

          <button className="read-more-btn">Read More</button>
        </div>
      </motion.div>

      <motion.div
        className="blog-right"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="blog-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={post.image} alt={post.title} />
            <div className="blog-card-content">
              <h4>{post.title}</h4>
              <span>{post.date}</span>
              <p>{post.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default BlogSection;
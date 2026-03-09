"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NextAdventure() {
  return (
    <section
      className="py-16 text-dark"
      style={{
        backgroundImage: 'url("/para-21.jpg")', 
        backgroundSize: "cover",
        backgroundPosition: "center",
      
      }}
    >
     

      <div className="dreamvacationsection" style={{ position: "relative", zIndex: 2 }}>
       <div className=" container ">
         <motion.h5
          className="orange-heading mb-2 mt-5 pt-5"
          style={{ fontFamily: "cursive", fontSize: "1.5rem" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Next Adventure
        </motion.h5>
       

        <motion.h2
          className="trip-plan display-5 fw-bold mb-4 pt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Travel Destinations Available Worldwide
        </motion.h2>

        <motion.p
          className="vacation lead pt-3"
          style={{ maxWidth: "700px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We have compiled a list of top destinations across the globe, scoured the world for the most alluring and fascinating places to visit. From the beautiful beaches of the Caribbean to the majestic mountains of Europe and the vibrant cities of Asia, our destination list has something for everyone.
        </motion.p>
        </div>
      </div>
    </section>
  );
}
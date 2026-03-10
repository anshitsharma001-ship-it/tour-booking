"use client";
import { motion } from "framer-motion";

export default function TravelItineraries() {
  return (
    <section
      className="TravelItineraries py-16 mt-10" 
      style={{
        backgroundImage: "url('/bg-13.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="text-center pt-5 mt-4">
        <motion.h1
          className="  text-4xl font-bold text-dark-800 tracking-wide relative inline-block"
          initial={{ opacity: 0, y: 50 }}      
          whileInView={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Travel Itineraries
          <motion.span
            className="block w-20 h-1 bg-blue-600 mx-auto mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}         
            transition={{ duration: 0.9, delay: 0.9 }}
          ></motion.span>
        </motion.h1>
      </div>
    </section>
  );
}
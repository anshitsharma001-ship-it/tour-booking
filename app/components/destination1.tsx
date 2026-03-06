"use client";
import { motion } from "framer-motion";

export default function Destination1() {
  return (
    <section
      className="lite-pink pt-5 flex items-center justify-center min-h-screen text-dark text-center relative"
      style={{
        backgroundImage: "url('/bg-13.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(255, 182, 193, 0.7)", // light pink overlay
        }}
      ></div>

      <div className="dreamvacation1 col-lg-12 pt-5 relative z-10">
        <motion.h5
          className="orange-heading mb-2"
          style={{ fontFamily: "cursive", fontSize: "1.5rem" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Choose your Trip
        </motion.h5>

        <motion.h2
          className="trip-plan1 display-5 fw-bold mb-4 pt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Start your Vacation Now
        </motion.h2>

        <motion.p
          className="vacation1 lead pt-3"
          style={{ maxWidth: "700px", margin: "0 auto" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Looking for your dream vacation destination but don't know where to
          start? With the help of experienced and knowledgeable travel agents,
          you can plan the trip of a lifetime with ease.
        </motion.p>
      </div>
    </section>
  );
}
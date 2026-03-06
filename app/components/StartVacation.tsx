"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const StartVacation: React.FC = () => {
  return (
    <section
      className="start-vacation-section relative"
      style={{
        backgroundImage: "url('/para-24.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "80px 0",
      }}
    >

      <div className="container explore-world relative z-10">
        <div className="left-align-wrapper">
          <motion.h1
            className="heading mb-3"
            style={{
              color: "#fff",
              fontWeight: "900",
              textShadow: "2px 2px 6px rgba(0,0,0,0.7)", // gehra text
            }}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            Explore the{" "}
            <motion.span
              style={{
                color: "#ff6600",
                display: "inline",
                textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
              }}
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              World
            </motion.span>{" "}
            Now
          </motion.h1>

          <motion.p
            className="ourteam mb-3 max-w-xl"
            style={{
              color: "#f0f0f0",
              fontSize: "18px",
              textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Our team of experienced travel experts will help you plan your trip
            from start to finish, ensuring your dream vacation becomes a reality.
            Don't wait any longer, book your trip!
          </motion.p>

          <Link href="/search">
            <motion.button
              className="orange-btn mt-4 px-5 py-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              START HERE
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartVacation;
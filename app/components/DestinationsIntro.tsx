"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DestinationsIntro() {
  return (
    <section className="destinations-section py-16 text-dark relative overflow-hidden">
  
      <div className="dreamvacation text-center text-lg-start relative z-10 container">
        <div className="row">
          <div className="col-lg-12">
            <motion.h5
          className="orange-heading mb-2 mt-5 pt-5"
          style={{ fontFamily: "cursive", fontSize: "1.5rem" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dream Vacation Destination
        </motion.h5>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <motion.h2
          className="trip-plan display-5 fw-bold mb-4 pt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Plan the Trip of a Lifetime with Ease
        </motion.h2>
          </div>
        </div>

        <motion.p
          className="vacation lead pt-3"
          style={{ maxWidth: "700px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Whether you're looking for a romantic getaway, a family-friendly adventure,
          or a solo journey to explore the world, a travel agency can provide you
          with a custom-tailored itinerary that exceeds your expectations.
        </motion.p>

        <Link href="/more-info">
          <motion.button
            className="mt-4 px-4 py-2 mb-5 fw-bold more-info-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Info
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
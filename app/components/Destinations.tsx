"use client";
import { motion } from "framer-motion";

export default function Destinations() {
  const destinations = [
    {
      title: "U.S.A",
      desc: "Filled with diverse cultures",
      bg: "/dest-05.jpg",
    },
    {
      title: "Japan",
      desc: "Discover the culture of the Land",
      bg: "/japan.png",
    },
    {
      title: "California",
      desc: "Explore vibrant cities",
      bg: "/dest-06.jpg",
    },
    {
      title: "Italy",
      desc: "Taste the cuisine",
      bg: "/para-09.jpg",
    },
  ];

  return (
    <section className="col-lg-12 py-16 bg-gray-50 text-center pt-5">
      <div className="destination-images row justify-content-center">
        {destinations.map((d, i) => (
          <div
            key={i}
            className={`destination-card  col-md-6 mb-4 ${
              i === 0
                ? "first-card"
                : i === destinations.length - 1
                ? "last-card"
                : i === 1
                ? "japan-card"
                : ""
            }`}
          >
            <motion.div
              className="card shadow-lg text-white"
              style={{
                backgroundImage: `url(${d.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "390px",
                borderRadius: "15px",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                <h5 className="fw-bold">{d.title}</h5>
                <p className="small">{d.desc}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
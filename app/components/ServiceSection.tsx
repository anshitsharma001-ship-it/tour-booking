"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = ["/image-1.png", "/image-2.png"];

export default function ServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="ServiceSection py-12 mt-5 pt-5 pb-5 relative"
      style={{
        backgroundImage: "url('/para-15.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" style={{ zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2 }} className="container">
        <div className="row flex flex-col lg:flex-row items-center gap-6">
          {/* Image Slider */}
          <div className="col-lg-6 relative flex justify-center items-center">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="slider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="object-cover rounded-lg shadow-lg mx-auto w-full max-w-[1000px] h-[650px]"
              style={{ width: "95%", maxWidth: "1000px", height: "740px" }} // inline fallback
            />

            <div className="absolute bottom-2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text Section */}
          <motion.div
            className="col-lg-6 flex flex-col justify-center text-left text-white pt-3"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h5
              className="white-heading mb-2 pt-5"
              style={{ fontFamily: "cursive", fontSize: "1.5rem" }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Adventure Travel
            </motion.h5>

            <h2 className="adventuretravel mb-1 pt-4">Embrace the Thrill of the Unknown</h2>
            <p className="para mb-3 pt-5">
              Are you tired of the typical tourist destinations and looking to step out of your comfort zone?
              Adventure travel may be the perfect solution for you! Here are four reasons why you should book an adventure travel experience:
            </p>

            <div className="flex flex-col mt-1 space-y-2">
              <div>
                <div className="flex items-center pb-3">
                  <span className="tick">✓</span>
                  <span>Connect with nature</span>
                </div>
                <hr className="dark-divider mt-1" />
              </div>

              <div>
                <div className="flex items-center pb-3">
                  <span className="tick">✓</span>
                  <span>Experience other cultures</span>
                </div>
                <hr className="dark-divider mt-1" />
              </div>

              <div>
                <div className="flex items-center pb-3">
                  <span className="tick">✓</span>
                  <span>Create unforgettable memories</span>
                </div>
               
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="custom-btn mt-3 px-5 py-2 text-white rounded-lg shadow transition"
            >
              All Services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
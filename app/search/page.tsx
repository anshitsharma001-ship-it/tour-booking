"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function search() {
  const [current, setCurrent] = useState(0);
  const images: string[] = []; // 

  useEffect(() => {
    if (images.length === 0) return; // 
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <section className="here-hero relative z-10">
        <div className="overlay"></div>
        <h1 className="about-title">Travels</h1>
      </section>

      <section className="relative w-full h-[80vh] overflow-hidden z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>
    </>
  );
}
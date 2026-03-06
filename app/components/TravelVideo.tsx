"use client";
import { useEffect, useRef, useState } from "react";

export default function TravelVideo() {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAutoplay(true);   
          } else {
            setAutoplay(false);  
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="travelvideo flex justify-center">
      <iframe
        ref={videoRef}
        className="rounded-lg shadow-lg"
        width="100%"
        height="610"
        src={`https://www.youtube.com/embed/LIgWlfeMdVE?controls=0&rel=0&playsinline=1&modestbranding=1${autoplay ? "&autoplay=1" : ""}`}
        title="Love Travel City Tour Demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
}
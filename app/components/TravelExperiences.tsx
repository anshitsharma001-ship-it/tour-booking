"use client";
import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Traveler",
    image: "/images/review1.jpg",
    review:
      "We recently visited Maldives and the package was customized perfectly. Everything was hassle-free and smooth!"
  },
  {
    id: 2,
    name: "David Johnson",
    role: "Explorer",
    image: "/images/review2.jpg",
    review:
      "Our Bali tour was organized wonderfully. It was our first international trip and everything exceeded expectations."
  },
  {
    id: 3,
    name: "Emma Brown",
    role: "Adventurer",
    image: "/images/review3.jpg",
    review:
      "From start to finish, the Tokyo trip was seamless. The guides were amazing and the destinations breathtaking."
  }
];

const TravelExperience: React.FC = () => {
  return (
    <section
      className="cap-image"
      style={{
        position: "relative",
        backgroundImage: "url('/para-24.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "60px 0"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }} className="experiences text-white">
        <div className="review pt-5 elementor-column elementor-col-50">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-widget-container">
              <h1 className="elementor-heading-title elementor-size-default">
                Unforgettable Travel Experiences
              </h1>
            </div>
            <div className="elementor-widget-container">
              <p className="elementor-heading-title elementor-size-default">
                Our customer's feedback is essential in building a great
                reputation and maintaining excellent service. By listening to
                our customer's needs, we can improve our offerings and provide
                an exceptional travel experience.
              </p>
            </div>
            <div className="container">
              <div className="elementor-widget-container text-center mt-0">
                <img
                  src="/avatar-01.jpg"
                  alt="Traveler"
                  className="rounded-circle shadow-lg"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    position: "relative",
                    left: "42%",
                    top: "-200px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div style={{ position: "relative", zIndex: 2 }} className="py-12 px-6">
        <div className="row unforgettabletravel">
          
          <div className="pt-4 pb-5 clients col-lg-6">
            <div className="elementor-testimonial bg-white/10 rounded-lg shadow-lg px-3 py-4 h-100 d-flex flex-column justify-between">
              <div className="elementor-testimonial__content">
                <h5 className="text-white elementor-testimonial__text small-heading pt-4">
                  My husband and I have been using this travel agency for years
                  and they have never disappointed us.
                </h5>
              </div>
              <div className="elementor-testimonial__footer d-flex align-items-left gap-3 mt-4 text-start">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="elementor-testimonial__image">
                      <img
                        src="https://travel.nicdark.com/city-tour/wp-content/uploads/sites/3/2023/04/avatar-03.jpg"
                        alt="Jennifer and Mark"
                      />
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <cite className="text-white elementor-testimonial__cite text-start normal-cite">
                      <span className="elementor-testimonial__name d-block fw-bold">
                        Jennifer and Mark
                      </span>
                      <span className="elementor-testimonial__title text-white pb-5">
                        San Francisco
                      </span>
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 pb-5 clients col-lg-6">
            <div className="elementor-testimonial bg-white/10 rounded-lg shadow-lg px-3 py-4 h-100 d-flex flex-column justify-between">
              <div className="elementor-testimonial__content">
                <h5 className="text-white elementor-testimonial__text small-heading">
                  I recently booked a trip to Thailand with this travel agency
                  and I couldn't have been happier with my experience.
                </h5>
              </div>
              <div className="elementor-testimonial__footer d-flex align-items-left gap-3 mt-4 text-start">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="elementor-testimonial__image">
                      <img
                        src="https://travel.nicdark.com/city-tour/wp-content/uploads/sites/3/2023/04/avatar-02.jpg"
                        alt="Sarah and Rick"
                      />
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <cite className="text-white elementor-testimonial__cite text-start normal-cite">
                      <span className="elementor-testimonial__name d-block fw-bold">
                        Sarah and Rick
                      </span>
                      <span className="elementor-testimonial__title text-white">
                        New York
                      </span>
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelExperience;
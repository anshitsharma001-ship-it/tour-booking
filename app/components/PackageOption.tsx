"use client";
import React from "react";

const packages = [
  {
    id: 1,
    title: "Half Board",
    price: "$50",
    period: "/Day",
    features: [
      "Transfers from Airport",
      "Minimum 3 Star Hotel",
      "Alcoholic beverages",
      "Incl. Museum Tickets",
      "Meals in Restaurants",
    ],
    button: "VIEW TRIPS",
  },
  {
    id: 2,
    title: "All Inclusive",
    price: "$32",
    period: "/Day",
    features: [
      "Meals in Restaurants",
      "Alcoholic beverages",
      "Minimum 3 Star Hotel",
      "Transfers from Airport",
      "Incl. Museum Tickets",
    ],
    button: "VIEW ALL",
  },
  {
    id: 3,
    title: "Excursions Included",
    price: "$68",
    period: "/Day",
    features: [
      "Minimum 3 Star Hotel",
      "Meals in Restaurants",
      "Incl. Museum Tickets",
      "Meals in Restaurants",
      "Alcoholic beverages",
    ],
    button: "BOOK NOW",
  },
];

const PackageOptions: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: "url('/banner-06.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="py-16 mt-5"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="affordable text-center mb-12 text-white">
          <h3
            className="orange-heading mb-2"
            style={{ fontFamily: "cursive", fontSize: "1.5rem", color: "#f97316" }}
          >
            Clear Price
          </h3>

          <h2 className="text-4xl font-bold pt-2 m-0 text-dark">
            Affordable Travel Packages
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-200 m-0 pb-5">
            We believe that everyone deserves to experience their dream vacation
            without breaking the bank. That's why we offer a price section on
            our website that features a range of affordable travel
          </p>
        </div>

        <div className="row">
          {packages.map((pkg, index) => {
            let cardClass = "";
            let buttonClass = "";

            if (index === 0) {
              cardClass = "card-beige card-left";
              buttonClass = "btn-orange";
            }
            if (index === 1) {
              cardClass = "card-orange card-center"; 
              buttonClass = "btn-blue";
            }
            if (index === 2) {
              cardClass = "card-blue card-right";
              buttonClass = "btn-orange";
            }

            return (
              <div key={pkg.id} className="col-lg-4 mb-4">
                <div
                  className={`card-wrapper ${cardClass} text-center p-6 rounded-lg shadow-lg`}
                >
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>

                  <p className="card-price mb-4">
                    <span className="price-big">{pkg.price}</span>
                    <span className="price-small">{pkg.period}</span>
                  </p>

                  <div className="features-list mb-6 text-sm text-left inline-block">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center mb-2">
                        <span
                          className={`tick-mark ${
                            index === 0 ? "text-black" : "text-white"
                          }`}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`card-button mt-4 mb-4 ${buttonClass}`}>
                    {pkg.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-grey">* All trips include medical insurance</p>
    </section>
  );
};

export default PackageOptions;
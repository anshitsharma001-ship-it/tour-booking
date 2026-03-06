"use client";
import Image from "next/image";
import { useState } from "react";

export default function Shop() {
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    { id: 1, name: "Beach Holiday Package", price: "$499", image: "/insure-01.jpg" },
    { id: 2, name: "Mountain Trekking Tour", price: "$699", image: "/insure-02.jpg" },
    { id: 3, name: "City Weekend Escape", price: "$299", image: "/insure-03.jpg" },
  ];

  const insurance = [
    { id: 1, name: "Baggage Insurance", price: "$50.00", image: "/insure-04.jpg" },
    { id: 2, name: "Health Insurance", price: "$220.00", image: "/insure-05.jpg" },
    { id: 3, name: "Medical Insurance", price: "$45.00", original: "$78.00", image: "/insure-06.jpg" },
  ];

  const addToCart = (item: any) => {
    if (!cart.find(c => c.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id: number) => {
    const element = document.getElementById(`cart-item-${id}`);
    if (element) {
      element.classList.add("fade-out");
      setTimeout(() => {
        setCart(cart.filter(c => c.id !== id));
      }, 500);
    } else {
      setCart(cart.filter(c => c.id !== id));
    }
  };

  const renderCard = (item: any) => (
    <div className="card shadow-lg rounded-4 overflow-hidden h-100 w-100">
      <Image src={item.image} alt={item.name} width={400} height={300} className="card-img-top rounded-top-4" />
      <div className="card-body bg-dark bg-opacity-50 text-white rounded-bottom-4">
        <h2 className="h5 fw-semibold">{item.name}</h2>
        {item.original ? (
          <>
            <p className="mb-0 text-decoration-line-through">{item.original}</p>
            <p className="mb-0 text-success fw-bold">{item.price}</p>
          </>
        ) : (
          <p className="mb-0">{item.price}</p>
        )}
        <div className="mt-2">
          {cart.find(c => c.id === item.id) ? (
            <div className="button-group fade-in">
              <button className="btn btn-success fw-semibold me-2">Go to Cart</button>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger fw-semibold">Remove</button>
            </div>
          ) : (
            <button onClick={() => addToCart(item)} className="btn btn-warning fw-semibold fade-in">Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="min-vh-100 d-flex justify-content-center align-items-center position-relative hero-section">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 hero-bg"
          style={{
            backgroundImage: "url('/para-09.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        ></div>
        <h1 className="text-white fw-bold display-1 position-relative hero-title" style={{ zIndex: 1 }}>
          Shop
        </h1>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            {products.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            {insurance.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-bold mb-4">🛒 Your Cart</h2>
            <ul className="list-group">
              {cart.map(item => (
                <li
                  key={item.id}
                  id={`cart-item-${item.id}`}
                  className="list-group-item d-flex justify-content-between align-items-center fade-in"
                >
                  {item.name}
                  <span>{item.price}</span>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-sm btn-outline-danger">Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <style jsx>{`
        .hero-bg {
          animation: fadeInBg 1.5s ease forwards;
        }
        @keyframes fadeInBg {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }

        .hero-title {
          opacity: 0;
          animation: slideUpTitle 1.5s ease forwards;
          animation-delay: 0.5s;
        }
        @keyframes slideUpTitle {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Cart Animations */
        .fade-in {
          animation: fadeIn 0.5s ease forwards;
        }
        .fade-out {
          animation: fadeOut 0.5s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(10px); }
        }
      `}</style>
    </>
  );
}
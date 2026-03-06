"use client";

export default function ContactUsPage() {
  return (
    <>
      <section
        className="min-vh-100 d-flex justify-content-center align-items-center position-relative hero-section"
        style={{
          backgroundImage: "url('/dest-07.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white fw-bold display-1 text-center hero-title">
          Contact Us
        </h1>
      </section>

      <section
        className="py-5 contact-info-section"
        style={{
          backgroundImage: "url('/bg-13.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="p-4 rounded h-100">
                <h3 className="fw-bold mb-3">📍 Location</h3>
                <p><strong>Travel Agency:</strong><br />1626 Michigan Ave, Miami Beach, FL 33139, United States</p>
                <p><strong>Travel Operator:</strong><br />2001 Biscayne Blvd, Miami, FL 33137, United States</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded h-100">
                <h3 className="fw-bold mb-3">📞 Give us a call</h3>
                <p><strong>Mobile Number:</strong><br />
                  Paul Davis <em>"Tour Consultant"</em>: +1 629 592 593<br />
                  Amy Moore <em>"Local Guide"</em>: +1 483 842 205
                </p>
                <p><strong>Office Number:</strong><br />
                  Administration: +1 184 016 482<br />
                  Technical Office: +1 963 935 836
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded h-100">
                <h3 className="fw-bold mb-3">✉️ Write for anything</h3>
                <p><strong>Quotes:</strong><br />
                  Write to this email for a detailed quotation: <br />
                  <a href="mailto:quote@travel.com" className="text-decoration-underline">quote@travel.com</a>
                </p>
                <p><strong>Consulting:</strong><br />
                  Our free consultation service can be requested here:<br />
                  <a href="mailto:info@travel.com" className="text-decoration-underline">info@travel.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-5 contact-form-section"
        style={{
          backgroundImage: "url('/bg-map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold text-dark form-title">Get in Touch</h1>
            <p className="lead text-dark form-subtext">
              Write to us for personalized travel advice or for information on group travel and last minute travel. All travel is insured and safe.
            </p>
          </div>

          <form className="row g-4 justify-content-center">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Type your name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Insert your email"
                required
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control form-control-lg"
                rows={5}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary btn-lg px-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

   
      <style jsx>{`
        .hero-section {
          opacity: 0;
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

      
        .contact-info-section h3,
        .contact-info-section p,
        .contact-info-section a {
          color: black !important;
        }

        .form-title,
        .form-subtext {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
        }

   
        .form-subtext {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-form-section input,
        .contact-form-section textarea {
          background-color: rgba(255, 255, 255, 0.95);
          color: black;
          border: none;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .contact-form-section input::placeholder,
        .contact-form-section textarea::placeholder {
          color: #555;
        }

        .contact-form-section button {
          transition: all 0.3s ease;
        }

        .contact-form-section button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
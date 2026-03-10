"use client";

export default function FooterSection() {
  return (
    <footer className="footer pb-3 pt-5">
      <div className="container-fluid px-4 pt-5 pb-5">
        <div className="row">

          <div className="col-lg-8 col-md-6 mb-3 text-start">
            <h1 className="footer-heading">
              Travel beyond your imagination <br />
              With our Travel Agency!
            </h1>
          </div>

          <div className="col-lg-4 col-md-6 mb-3 text-start">
            <h5 className="footer-contact-heading pt-2">Contact</h5>
            <p>1080 Brickell Ave, Miami - Florida, U.S.A</p>
            <p>info@travel.com</p>
            <p>+01 483 593 284</p>
          </div>

        </div>
{/* 
        <hr className="border-light" /> */}

        <div className="row pt-5">
          <div className="col-lg-12 pt-5">
            <div className="text-left">
          <ul className="list-inline footer-nav mb-2">
            <li className="list-inline-item"><a href="#" className="footer-link">Travel WordPress Theme</a></li>
            <span className="nav-dot">•</span>
            <li className="list-inline-item"><a href="#" className="footer-link">Rental</a></li>
            <span className="nav-dot">•</span>
            <li className="list-inline-item"><a href="#" className="footer-link">Insurance</a></li>
          </ul>
        </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
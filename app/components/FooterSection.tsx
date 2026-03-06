"use client";

export default function FooterSection() {
  return (
    <footer className="footer pb-3 pt-5">
      <div className="container-fluid px-4">
        <div className="row">

          <div className="col-lg-6 col-md-6 mb-3 text-start">
            <h1 className="footer-heading">
              Travel beyond your imagination <br />
              With our Travel Agency!
            </h1>
          </div>

          <div className="col-lg-6 col-md-6 mb-3 text-start">
            <h5 className="footer-contact-heading">Contact</h5>
            <p>1080 Brickell Ave, Miami - Florida, U.S.A</p>
            <p>info@travel.com</p>
            <p>+01 483 593 284</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <ul className="list-inline footer-nav mb-2">
            <li className="list-inline-item"><a href="#" className="footer-link">Travel WordPress Theme</a></li>
            <li className="list-inline-item"><a href="#" className="footer-link">Rental</a></li>
            <li className="list-inline-item"><a href="#" className="footer-link">Insurance</a></li>
          </ul>
          <p className="mb-0">© 2026 Travel Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
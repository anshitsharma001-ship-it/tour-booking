import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function TourSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container-fluid px-4">
        <div className="row justify-content-center">

      
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow h-100 position-relative">
              <Image
                src="/toscany.jpg"
                alt="Tuscany"
                width={400}
                height={250}
                className="card-img-top"
              />

         
              <div
                className="overlay-section position-absolute start-50 translate-middle-x bg-white shadow rounded px-3 py-2 d-flex align-items-center gap-3"
                style={{ bottom: "200px", zIndex: 10 }}
              >
                <div className="text-danger fw-bold d-flex align-items-center gap-2">
                  <i className="fa-solid fa-clock"></i>
                  <span>5 Days</span>
                </div>
                <i className="fa-solid fa-envelope text-danger"></i>
                <i className="fa-solid fa-share text-danger"></i>
              </div>

              <div className="card-body pt-5">
                <h5 className="card-title fw-bold">Tuscany</h5>
                <div className="row">
                  <div className="col-lg-1">
                    <i className="countries fa-solid fa-location-dot"></i>
                  </div>
                  <div className="col-lg-11">
                    <h5 className="right-1">Italy</h5>
                  </div>
                </div>
                <hr className="my-3" />
                <p className="card-text">
                  Whether you're looking for a romantic tour,Tuscany is the perfect destination for a true Italian experience.
                </p>
                <hr className="my-3" />
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button className="btn btn-orange">Details</button>
                  <div className="text-end">
                    <p className="right fw-bold mb-0">From</p>
                    <h4 className="text-dark fw-bold mb-0">$789</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow h-100 position-relative">
              <span className="badge bg-danger position-absolute top-0 start-0 m-2">SALE</span>
              <Image
                src="/tokyo.jpg"
                alt="Tokyo"
                width={400}
                height={250}
                className="card-img-top"
              />

              <div
                className="overlay-section position-absolute start-50 translate-middle-x bg-white shadow rounded px-3 py-2 d-flex align-items-center gap-3"
                style={{ bottom: "200px", zIndex: 10 }}
              >
                <div className="text-danger fw-bold d-flex align-items-center gap-2">
                  <i className="fa-solid fa-clock"></i>
                  <span>5 Days</span>
                </div>
                <i className="fa-solid fa-envelope text-danger"></i>
                <i className="fa-solid fa-share text-danger"></i>
              </div>

              <div className="card-body pt-5">
                <h5 className="card-title fw-bold">Tokyo</h5>
                <div className="row">
                  <div className="col-lg-1">
                    <i className="countries fa-solid fa-location-dot"></i>
                  </div>
                  <div className="col-lg-11">
                    <h5 className="right-1">Japan</h5>
                  </div>
                </div>
                <hr className="my-3" />
                <p className="card-text">
                  Experience the alluring beauty and bustling energy of Tokyo through our immersive tour with a good guide.
                </p>
                <hr className="my-3" />
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button className="btn btn-orange">Details</button>
                  <div className="text-end">
                    <p className="right fw-bold mb-0">From</p>
                    <h4 className="text-dark fw-bold mb-0">
                      $480 <span className="text-muted text-decoration-line-through">$600</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow h-100 position-relative">
              <span className="badge bg-danger position-absolute top-0 start-0 m-2">SALE</span>
              <Image
                src="/santamonica.jpg"
                alt="Santa Monica"
                width={400}
                height={250}
                className="card-img-top"
              />

        
              <div
                className="overlay-section position-absolute start-50 translate-middle-x bg-white shadow rounded px-3 py-2 d-flex align-items-center gap-3"
                style={{ bottom: "200px", zIndex: 10 }}
              >
                <div className="text-danger fw-bold d-flex align-items-center gap-2">
                  <i className="fa-solid fa-clock"></i>
                  <span>5 Days</span>
                </div>
                <i className="fa-solid fa-envelope text-danger"></i>
                <i className="fa-solid fa-share text-danger"></i>
              </div>

              <div className="card-body pt-5">
                <h5 className="card-title fw-bold">Santa Monica</h5>
                <div className="row">
                  <div className="col-lg-1">
                    <i className="countries fa-solid fa-location-dot"></i>
                  </div>
                  <div className="col-lg-11">
                    <h5 className="right-1">California</h5>
                  </div>
                </div>
                <hr className="my-3" />
                <p className="card-text">
                  This iconic landmark is home to an array of thrilling attractions and stunning ocean views and adventure.
                </p>
                <hr className="my-3" />
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button className="btn btn-orange">Details</button>
                  <div className="text-end">
                    <p className="right fw-bold mb-0">From</p>
                    <h4 className="text-dark fw-bold mb-0">
                      $650 <span className="text-muted text-decoration-line-through">$770</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
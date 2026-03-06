"use client";

const banners = [
  { image: "/banner-01.jpg", title: "City Walks Tour", icon: "/icons/icon-001.gif", overlayClass: "overlay-orange" },
  { image: "/banner-02.jpg", title: "Electric Bikes", icon: "/icons/icon-002.gif", overlayClass: "overlay-blue" },
  { image: "/banner-03.jpg", title: "Skyscrapers View", icon: "/icons/icon-003.gif", overlayClass: "overlay-orange" },
];

export default function BannerSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container-fluid px-4">
        <div className="row">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 mb-4 ${index === 0 ? "first-banner" : ""}`}
            >
              <div className="banner-card">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="banner-img"
                />
                <div className={`banner-overlay ${banner.overlayClass}`}>
                  <img src={banner.icon} alt={banner.title} className="banner-icon-top" />
                  <h3 className="banner-title">{banner.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
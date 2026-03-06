"use client";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Travel Destinations in 2026",
      excerpt: "Discover the most breathtaking places to visit this year...",
      image: "/para-12.jpg",
    },
    {
      id: 2,
      title: "How to Save Money While Traveling",
      excerpt: "Smart tips and tricks to make your trips affordable...",
      image: "/para-13.jpg",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Adventure Tours",
      excerpt: "From trekking to rafting, explore the thrill of adventure...",
      image: "/santamonica.jpg",
    },
  ];

  return (
    <>

      <section className="min-vh-100 d-flex justify-content-center align-items-center position-relative hero-section">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 hero-bg"
          style={{
            backgroundImage: "url('/dest-06.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        ></div>
        <h1 className="text-white fw-bold display-1 position-relative hero-title" style={{ zIndex: 1 }}>
          Our Blog
        </h1>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Latest Articles</h2>
          <div className="row">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch"
                style={{
                  animation: "fadeUp 1s ease forwards",
                  animationDelay: `${index * 0.3}s`,
                  opacity: 0,
                }}
              >
                <div className="card shadow-lg rounded-4 overflow-hidden h-100 w-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="card-img-top rounded-top-4"
                  />
                  <div className="card-body bg-dark bg-opacity-50 text-white rounded-bottom-4">
                    <h3 className="h5 fw-semibold">{post.title}</h3>
                    <p className="mb-3">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="btn btn-primary fw-semibold">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
"use client";
import Image from "next/image";

export default function BlogDetail({ params }: { params: { id: string } }) {
  // First card detail
  if (params.id === "1") {
    return (
      <section className="py-5">
        <div className="container">
          <Image
            src="/para-14-1536x1024.jpg"
            alt="Travel Destination"
            width={1200}
            height={600}
            className="img-fluid rounded mb-4 shake-on-hover"
          />

          <p className="lead">
            There are so many places to explore, so many adventures waiting for you. What makes a great travel destination? It depends on what kind of traveler you are: whether it's culture, natural beauty or history that interests you most; whether your idea of fun is hiking through mountains or lounging on white-sand beaches; if food is more important than sights when planning an itinerary (and vice versa).
          </p>
          <p className="lead">
            There are also practical considerations like cost and time spent traveling from place to place and maybe even how much luggage space there is in the car/plane/train compartment where we'll be sleeping tonight! But no matter what kind of traveler they are or what they're looking for out of their next trip abroad, everyone should consider many factors before booking their flight(s).
          </p>
          <div className="row mb-4">
            <div className="col-md-6">
              <Image
                src="/package-18-1536x1024.jpg"
                alt="Package 18"
                width={600}
                height={400}
                className="img-fluid rounded shake-on-hover"
              />
            </div>
            <div className="col-md-6">
              <Image
                src="/para-26-1536x1024.jpg"
                alt="Para 26"
                width={600}
                height={400}
                className="img-fluid rounded shake-on-hover"
              />
            </div>
          </div>
          <h2 className="fw-bold mb-3">Business & Holiday Travel</h2>
          <p className="lead">
            Whether you're traveling solo, with a partner, or with a group, we are committed to providing you with a stress-free and unforgettable travel experience. So why wait? Contact us today to start planning your next adventure! Handyman services are an ideal solution for busy homeowners. Instead of spending time trying to fix things around the house, you can leave it to the professionals and have them take care of it for you.
          </p>
          <Image
            src="/package-11-1536x1024.jpg"
            alt="Package 11"
            width={1200}
            height={600}
            className="img-fluid rounded mt-4 shake-on-hover"
          />
        </div>

        <style jsx>{`
          .shake-on-hover:hover {
            animation: shake 0.5s;
            animation-iteration-count: 1;
          }
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            20% { transform: translate(-1px, -2px) rotate(-1deg); }
            40% { transform: translate(-3px, 0px) rotate(1deg); }
            60% { transform: translate(3px, 2px) rotate(0deg); }
            80% { transform: translate(1px, -1px) rotate(1deg); }
            100% { transform: translate(-1px, 2px) rotate(-1deg); }
          }
        `}</style>
      </section>
    );
  }

  return <h1 className="text-center mt-5">Post not found</h1>;
}
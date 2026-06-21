import Image from "next/image";
import { Star } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      image: "/success-1.png",
      names: "Rahul & Priya",
      location: "Delhi, India",
      story:
        "We connected through RishtaQHub and instantly felt a genuine connection. Today we're happily married and grateful for this journey.",
    },
    {
      id: 2,
      image: "/success-2.png",
      names: "Arjun & Sophia",
      location: "Toronto, Canada",
      story:
        "Finding someone who shared our values seemed difficult until we joined RishtaQHub. It truly changed our lives.",
    },
    {
      id: 3,
      image: "/success-3.png",
      names: "Daniel & Emma",
      location: "Paris, France",
      story:
        "The platform made the entire process simple and trustworthy. We found our perfect match and started a beautiful future together.",
    },
  ];

  return (
    <section className="pt-5 pb-20 bg-[#FAF8F3]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <span className="inline-flex bg-[#F5E6B3] text-[#8A6A00] px-6 py-3 rounded-full font-medium">
            Success Stories
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#0F172A]">
            Real Love Stories
            <span className="text-[#D4AF37]">
              {" "}That Started Here
            </span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-lg">
            Thousands of members have found meaningful relationships
            through RishtaQHub. Here are a few of their stories.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {stories.map((story) => (
            <div
              key={story.id}
              className="
                group
                bg-white
                rounded-[30px]
                overflow-hidden
                border
                border-[#E6D7B5]
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >

              {/* Image */}

              <div className="relative h-[240px] overflow-hidden">

                <Image
                  src={story.image}
                  alt={story.names}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex gap-1 mb-4">

                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="#D4AF37"
                      color="#D4AF37"
                    />
                  ))}

                </div>

                <h3 className="text-2xl font-bold text-[#0F172A]">
                  {story.names}
                </h3>

                <p className="text-[#D4AF37] font-medium mt-1">
                  {story.location}
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  "{story.story}"
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
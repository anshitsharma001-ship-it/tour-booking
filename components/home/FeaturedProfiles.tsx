import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function FeaturedProfiles() {
  const profiles = [
    {
      id: 1,
      name: "Sophia Williams",
      age: 28,
      city: "London, UK",
      profession: "Software Consultant",
      image: "/profile-1.png",
    },
    {
      id: 2,
      name: "Arun Mehta",
      age: 30,
      city: "Toronto, Canada",
      profession: "Business Analyst",
      image: "/profile-2.png",
    },
    {
      id: 3,
      name: "Emily Johnson",
      age: 27,
      city: "Sydney, Australia",
      profession: "Marketing Manager",
      image: "/profile-3.png",
    },
  ];

  return (
    <section className="pt-4 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex bg-[#F5E6B3] text-[#8A6A00] px-6 py-3 rounded-full font-medium">
            Featured Profiles
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A]">
            Meet Our
            <span className="text-[#D4AF37]">
              {" "}Verified Members
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
            Explore featured members from our trusted international
            community and discover meaningful relationships worldwide.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="
                group
                bg-[#FAF8F3]
                rounded-[30px]
                overflow-hidden
                border
                border-[#E6D7B5]
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-3
                hover:scale-[1.02]
                transition-all
                duration-500
              "
            >

              {/* Image */}

              <div className="relative h-[300px] overflow-hidden">

                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Verified Badge */}

                <div
                  className="
                    absolute
                    top-4
                    right-4
                    bg-white/95
                    backdrop-blur-sm
                    px-4
                    py-2
                    rounded-full
                    shadow-lg
                    flex
                    items-center
                    gap-2
                  "
                >
                  <CheckCircle
                    size={18}
                    className="text-green-600"
                  />

                  <span className="text-sm font-semibold text-[#0F172A]">
                    Verified
                  </span>
                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-[30px] font-bold tracking-tight text-[#0F172A]">
                  {profile.name}
                </h3>

                <p className="text-slate-500 mt-2">
                  {profile.age} Years • {profile.city}
                </p>

                <p className="mt-4 text-[#D4AF37] font-semibold text-lg">
                  {profile.profession}
                </p>

                <button
                  className="
                    w-full
                    mt-6
                    bg-[#0F172A]
                    text-white
                    py-3.5
                    rounded-xl
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-[#D4AF37]
                    hover:text-[#0F172A]
                    hover:shadow-lg
                  "
                >
                  View Profile →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
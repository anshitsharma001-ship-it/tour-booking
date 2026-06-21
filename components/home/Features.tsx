"use client";

import {
  ShieldCheck,
  HeartHandshake,
  Globe,
  Lock,
} from "lucide-react";

import CountUp from "react-countup";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Verified Profiles",
      description:
        "Every profile is manually verified to ensure authenticity and trust.",
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Smart Matching",
      description:
        "Advanced matching helps you discover compatible life partners.",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Community",
      description:
        "Connect with verified members from India and around the world.",
    },
    {
      icon: <Lock size={24} />,
      title: "Complete Privacy",
      description:
        "Your personal information remains secure with powerful privacy controls.",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-5">

        {/* TRUST BAR */}

        <div className="bg-[#0F172A] rounded-[28px] py-8 px-8 mb-20 shadow-xl">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center lg:border-r lg:border-white/10">
              <h3 className="text-white text-4xl md:text-5xl font-bold">
                <CountUp
                  start={0}
                  end={25}
                  duration={3}
                  suffix="K+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>

              <p className="text-white/80 mt-2">
                Verified Members
              </p>
            </div>

            <div className="text-center lg:border-r lg:border-white/10">
              <h3 className="text-white text-4xl md:text-5xl font-bold">
                <CountUp
                  start={0}
                  end={15}
                  duration={3}
                  suffix="K+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>

              <p className="text-white/80 mt-2">
                Successful Matches
              </p>
            </div>

            <div className="text-center lg:border-r lg:border-white/10">
              <h3 className="text-white text-4xl md:text-5xl font-bold">
                <CountUp
                  start={0}
                  end={120}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>

              <p className="text-white/80 mt-2">
                Countries
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-white text-4xl md:text-5xl font-bold">
                24/7
              </h3>

              <p className="text-white/80 mt-2">
                Dedicated Support
              </p>
            </div>

          </div>

        </div>

        {/* SECTION HEADER */}

        <div className="text-center mb-16">

          <span className="inline-flex bg-[#F5E6B3] text-[#8A6A00] px-6 py-3 rounded-full font-medium">
            Why Families Choose RishtaQHub
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A]">
            Trusted By Families
            <span className="text-[#D4AF37]">
              {" "}Worldwide
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
            Designed to help individuals and families find genuine,
            compatible and lifelong relationships with confidence.
          </p>

        </div>

        {/* FEATURE CARDS */}

        <div className="grid md:grid-cols-2 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white
                rounded-[24px]
                p-8
                border
                border-[#EFE8D5]
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex items-start gap-4">

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#D4AF37]
                    text-[#0F172A]
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  {feature.icon}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
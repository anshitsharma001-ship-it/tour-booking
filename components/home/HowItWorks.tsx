import {
  UserPlus,
  Search,
  HeartHandshake,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={24} />,
      number: "01",
      title: "Create Your Profile",
      description:
        "Create your profile and highlight your values, lifestyle, and partner preferences.",
    },
    {
      icon: <Search size={24} />,
      number: "02",
      title: "Discover Compatible Matches",
      description:
        "Explore verified profiles using smart filters and compatibility matching.",
    },
    {
      icon: <HeartHandshake size={24} />,
      number: "03",
      title: "Connect With Confidence",
      description:
        "Connect securely and begin meaningful conversations with confidence.",
    },
  ];

  return (
    <section className="pt-4 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="inline-flex bg-[#F5E6B3] text-[#8A6A00] px-6 py-3 rounded-full font-medium">
            How It Works
          </span>

          <h2 className="mt-6 mt-2 text-4xl md:text-5xl font-bold text-[#0F172A]">
            Find Your Perfect Match
            <span className="text-[#D4AF37]">
              {" "}In 3 Simple Steps
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
            A trusted and streamlined process designed to help individuals
            and families build meaningful relationships.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-2">

          <div
            className="
              hidden
              md:block
              absolute
              top-8
              left-0
              w-full
              h-[2px]
              bg-[#D4AF37]/20
            "
          />

          <div className="grid md:grid-cols-3 gap-8 relative">

            {steps.map((step) => (
              <div
                key={step.number}
                className="text-center"
              >

                {/* Icon */}

                <div
                  className="
                    mx-auto
                    w-20
                    h-20
                    rounded-full
                    bg-[#0F172A]
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    relative
                    z-10
                  "
                >
                  {step.icon}
                </div>

                {/* Step Number */}

                <p
                  className="
                    mt-3
                    text-sm
                    font-bold
                    tracking-[5px]
                    text-[#D4AF37]
                  "
                >
                  STEP {step.number}
                </p>

                {/* Card */}

                <div
                  className="
                    mt-3
                    bg-[#FAF8F3]
                    border
                    border-[#E8DFC9]
                    rounded-[28px]
                    p-7
                    text-left
                    shadow-sm
                    hover:shadow-xl
                    hover:border-[#D4AF37]/40
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >

                  <div className="h-[78px]">

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-[#0F172A]
                        leading-tight
                      "
                    >
                      {step.title}
                    </h3>

                  </div>

                  <p
                    className="
                      text-slate-600
                      leading-relaxed
                    "
                  >
                    {step.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
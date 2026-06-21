"use client";

import { Check } from "lucide-react";

export default function MembershipPlans() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      duration: "Forever",
      button: "Get Started",
      popular: false,
      features: [
        "Create Profile",
        "Browse Profiles",
        "Receive Interests",
        "Basic Search Filters",
      ],
    },
    {
      name: "Premium",
      price: "₹799",
      duration: "/ 3 Months",
      button: "Upgrade Now",
      popular: true,
      features: [
        "Unlimited Interests",
        "Direct Messaging",
        "Advanced Filters",
        "Priority Visibility",
        "Profile Highlight",
      ],
    },
    {
      name: "Elite",
      price: "₹1,499",
      duration: "/ 6 Months",
      button: "Join Elite",
      popular: false,
      features: [
        "Everything In Premium",
        "Relationship Manager",
        "Personalized Matchmaking",
        "Priority Verification",
        "Elite Member Badge",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-flex bg-[#F5E6B3] text-[#8A6A00] px-6 py-3 rounded-full font-medium">
            Membership Plans
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A]">
            Choose The Plan
            <span className="text-[#D4AF37]">
              {" "}That Fits You
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
            Flexible membership options designed to help you connect,
            communicate and find meaningful relationships with confidence.
          </p>

        </div>

        {/* Plans */}

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                rounded-[30px]
                bg-white
                border
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                p-8
                flex
                flex-col

                ${
                  plan.popular
                    ? "border-2 border-[#D4AF37] scale-[1.03]"
                    : "border-[#E6D7B5]"
                }
              `}
            >

              {/* Popular Badge */}

              {plan.popular && (
                <div
                  className="
                    absolute
                    -top-4
                    left-1/2
                    -translate-x-1/2
                    bg-[#D4AF37]
                    text-[#0F172A]
                    px-5
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                    shadow-lg
                  "
                >
                  Most Popular
                </div>
              )}

              <div className="text-center">

                <h3 className="text-2xl font-bold text-[#0F172A]">
                  {plan.name}
                </h3>

                <div className="mt-5">

                  <span className="text-5xl font-bold text-[#0F172A]">
                    {plan.price}
                  </span>

                  <span className="text-slate-500 ml-1">
                    {plan.duration}
                  </span>

                </div>

              </div>

              <div className="mt-8 flex-grow">

                <ul className="space-y-4">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <div
                        className="
                          w-6
                          h-6
                          rounded-full
                          bg-[#D4AF37]/20
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                        "
                      >
                        <Check
                          size={14}
                          className="text-[#D4AF37]"
                        />
                      </div>

                      {feature}
                    </li>
                  ))}

                </ul>

              </div>

              <button
                className={`
                  mt-10
                  w-full
                  py-4
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    plan.popular
                      ? "bg-[#D4AF37] text-[#0F172A] hover:shadow-xl"
                      : "bg-[#0F172A] text-white hover:bg-[#D4AF37] hover:text-[#0F172A]"
                  }
                `}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
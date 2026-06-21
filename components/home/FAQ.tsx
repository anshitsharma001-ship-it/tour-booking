"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Are all profiles verified?",
      answer:
        "Every profile goes through a verification process to maintain authenticity, trust, and a safe matchmaking experience.",
    },
    {
      question: "Can I hide my profile from others?",
      answer:
        "Yes. You can control profile visibility and privacy settings anytime according to your preferences.",
    },
    {
      question: "Is messaging available for free members?",
      answer:
        "Free members can receive interests, while direct messaging features are available through Premium membership plans.",
    },
    {
      question: "How does RishtaQHub find compatible matches?",
      answer:
        "Our smart matching system analyzes profile preferences, lifestyle choices, education, interests, and relationship goals.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We use advanced privacy controls and security measures to keep your information protected.",
    },
    {
      question: "Can I upgrade my membership later?",
      answer:
        "Yes. You can upgrade, downgrade, or change your membership plan anytime as your needs evolve.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#FAF8F3]">
      <div className="max-w-5xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-flex bg-[#F5E6B3] text-[#8A6A00] px-6 py-3 rounded-full font-medium">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A]">
            Everything You Need
            <span className="text-[#D4AF37]">
              {" "}To Know
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
            Find answers to common questions about profiles,
            privacy, memberships, and matchmaking.
          </p>

        </div>

        {/* FAQ List */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border
                  border-[#E6D7B5]
                  rounded-[20px]
                  overflow-hidden
                  shadow-sm
                  transition-all
                "
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-6
                    text-left
                  "
                >
                  <h3 className="text-base md:text-lg font-semibold text-[#0F172A]">
                    {faq.question}
                  </h3>

                  <div
                    className="
                      w-9
                      h-9
                      rounded-full
                      bg-[#D4AF37]/15
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                  >
                    {isOpen ? (
                      <Minus
                        size={18}
                        className="text-[#D4AF37]"
                      />
                    ) : (
                      <Plus
                        size={18}
                        className="text-[#D4AF37]"
                      />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
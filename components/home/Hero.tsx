"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
hidden: {
opacity: 0,
y: 40,
},
show: {
opacity: 1,
y: 0,
transition: {
duration: 0.8,
},
},
};

const stagger = {
hidden: {},
show: {
transition: {
staggerChildren: 0.2,
},
},
};

export default function Hero() {
return ( <section className="bg-gradient-to-b from-[#FAF8F3] via-white to-white py-4 overflow-hidden"> <div className="max-w-7xl mx-auto px-5">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
      >

        <motion.span
          variants={fadeUp}
          className="inline-flex items-center bg-[#F5E6B3] text-[#8A6A00] px-5 py-2 rounded-full text-sm font-semibold"
        >
          Trusted Premium Matrimonial Platform
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-[#0F172A]"
        >
          Find a Life Partner,
          <br />
          <span className="text-[#D4AF37]">
            Not Just a Match
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg text-slate-600 max-w-xl leading-relaxed"
        >
          Join thousands of families who trust RishtaQHub to build
          meaningful relationships through verified profiles,
          smart matching, and complete privacy control.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            href="/profile/create"
            className="bg-[#0F172A] text-white px-8 py-4 rounded-2xl text-center font-semibold hover:opacity-90 transition"
          >
            Create Profile
          </Link>

          <Link
            href="/search"
            className="border-2 border-[#D4AF37] text-[#0F172A] px-8 py-4 rounded-2xl text-center font-semibold hover:bg-[#D4AF37] transition"
          >
            Search Profiles
          </Link>
        </motion.div>


      </motion.div>

      {/* Right Image */}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >

        <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-[#F1F5F9]">

          <Image
            src="/hero-couple.png"
            alt="Happy Couple"
            width={700}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />

        </div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-2 border"
        >
          <p className="text-sm text-slate-500">
            100% Verified
          </p>

          <h6 className="text-xl font-bold text-[#0F172A]">
            Trusted Matrimonial Platform
          </h6>
        </motion.div>

      </motion.div>

    </div>

  </div>
</section>

);
}

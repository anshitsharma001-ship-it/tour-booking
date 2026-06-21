"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink =
    "relative text-[#0F172A] font-medium tracking-wide transition-all duration-300 hover:text-[#D4AF37] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-[82px]">

          {/* Logo */}

          <Link href="/" className="flex items-center -ml-2">
            <Image
              src="/RishtaQHub-cropped.png"
              alt="RishtaQHub"
              width={235}
              height={72}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            <Link href="/" className={navLink}>
              Home
            </Link>

            <Link href="/find-matches" className={navLink}>
              Find Matches
            </Link>

            <Link href="/success-stories" className={navLink}>
              Success Stories
            </Link>

            <Link href="/membership" className={navLink}>
              Membership
            </Link>

            <Link href="/about" className={navLink}>
              About Us
            </Link>

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">

            <Link
              href="/sign-in"
              className="text-[#0F172A] font-medium transition duration-300 hover:text-[#D4AF37]"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              className="
                bg-[#0F172A]
                text-white
                px-5
                py-3
                rounded-xl
                border
                border-[#D4AF37]
                font-medium
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-[#0F172A]
              "
            >
              Register Free
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-[#0F172A]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-slate-200 py-5 flex flex-col gap-5 bg-white"
          >

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-[#0F172A] font-medium"
            >
              Home
            </Link>

            <Link
              href="/find-matches"
              onClick={() => setMenuOpen(false)}
              className="text-[#0F172A] font-medium"
            >
              Find Matches
            </Link>

            <Link
              href="/success-stories"
              onClick={() => setMenuOpen(false)}
              className="text-[#0F172A] font-medium"
            >
              Success Stories
            </Link>

            <Link
              href="/membership"
              onClick={() => setMenuOpen(false)}
              className="text-[#0F172A] font-medium"
            >
              Membership
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-[#0F172A] font-medium"
            >
              About Us
            </Link>

            <Link
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="text-[#0F172A] font-medium"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              onClick={() => setMenuOpen(false)}
              className="bg-[#0F172A] text-white text-center py-3 rounded-xl border border-[#D4AF37]"
            >
              Register Free
            </Link>

          </motion.div>
        )}

      </div>
    </motion.header>
  );
}
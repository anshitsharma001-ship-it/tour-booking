"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">

          <Link
            href="/"
            className="text-3xl font-bold text-blue-900"
          >
            RishtaQHub
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>

            <Link href="/search" className="hover:text-blue-700">
              Search
            </Link>

            <Link href="/login" className="hover:text-blue-700">
              Login
            </Link>

            <Link
              href="/register"
              className="bg-blue-900 text-white px-5 py-3 rounded-lg hover:bg-blue-800"
            >
              Register Free
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-5">
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
      </div>
    </header>
  );
}
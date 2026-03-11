"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navs() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">

      {/* hamburger */}
      <div className="hamburger" onClick={() => setOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <></>

      {/* sliding menu */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>

        <div className="menu-header">
          <img src="/love-travel-logo.png" alt="logo" />

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="menu-links">
          <Link href="/">Home</Link>
          <Link href="/search">Travel</Link>
          <Link href="/about">Pages</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>

      </div>

    </div>
  );
}
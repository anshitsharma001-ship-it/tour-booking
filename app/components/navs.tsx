"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navs() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="desktop-navs-wrapper">

      <div className="desktop-navs-top">

        <div
          className={`desktop-hamburger ${open ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>


      <nav className={`desktop-navs-menu ${open ? "show" : ""}`}>

        <Link href="/">Home</Link>
        <Link href="/search">Travel</Link>
        <Link href="/about">Pages</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact-us">Contact Us</Link>

      </nav>

    </div>
  );
}
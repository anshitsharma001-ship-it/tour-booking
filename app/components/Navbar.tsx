"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./nav";

const Navbar: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topBar = document.querySelector(".top-bar") as HTMLElement;
      const topBarHeight = topBar ? topBar.offsetHeight : 0;

      if (window.scrollY >= topBarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>

      <div className="row">
        <div className="top-bar">
        <div className="col-lg-10">
          <div className="top-bar-left">
          Contact us at +1 836 483 384 • Travel Itinerary • Quote: info@travel.com
        </div>
        </div>
        <div className="col-lg-2">
          <div className="top-bar-right">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </div>
        </div>
      </div> 
        </div> 

      <div className="row">
        <div className={`main-header ${isFixed ? "fixed animate" : ""}`}>
        <div className="col-lg-2">
          <div className="header-left">
          
          <Link href="/">
            <img src="/love-travel-logo.png" alt="Love Travel Logo" className="logo-img" />
          </Link>
        </div>
        </div>

        <div className="col-lg-8">
          <nav className="nav-menu">
            <span className="nav-dot">•</span>
          <Link href="/" className="nav-link">Home</Link>
          <span className="nav-dot">•</span>
          <Link href="/search" className="nav-link">Travel</Link>
          <span className="nav-dot">•</span>
          <Link href="/about" className="nav-link">Pages</Link>
          <span className="nav-dot">•</span>
          <Link href="/shop" className="nav-link">Shop</Link>
          <span className="nav-dot">•</span>
          <Link href="/blog" className="nav-link">Blog</Link>
          <span className="nav-dot">•</span>
          <Link href="/contact-us" className="nav-link">Contact Us</Link>
        </nav>
        </div>

        <div className="col-lg-2">
          <div className="header-right">
          <Link href="/search" className="search-btn-1">
            Search Travel
          </Link> 
        </div>
        </div>

        <Nav />
      </div>
      </div>
    </header>
  );
};

export default Navbar;
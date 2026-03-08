"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaMapMarkerAlt, FaCompass } from "react-icons/fa";

export default function DestinationSearch() {
  const [keyword, setKeyword] = useState("");
  const [destination, setDestination] = useState("All Destinations");
  const [typology, setTypology] = useState("All Typologies");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = `?keyword=${keyword}&destination=${destination}&typology=${typology}`;
    router.push(`/search${query}`);
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-bar">

          {/* keyword */}
          <div className="search-item">
            <FaSearch className="icon" />
            <input
              type="text"
              placeholder="Insert keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          {/* destination */}
          <div className="search-item">
            <FaMapMarkerAlt className="icon red" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option>All Destinations</option>
              <option>USA</option>
              <option>Japan</option>
              <option>California</option>
              <option>Italy</option>
              <option>Africa</option>
              <option>Greece</option>
              <option>Egypt</option>
              <option>Europe</option>
              <option>France</option>
              <option>United Kingdom</option>
            </select>
          </div>

          {/* typology */}
          <div className="search-item">
            <FaCompass className="icon blue" />
            <select
              value={typology}
              onChange={(e) => setTypology(e.target.value)}
            >
              <option>All Typologies</option>
              <option>Adventure</option>
              <option>Romantic</option>
              <option>Family</option>
              <option>Heritage</option>
              <option>Road Trip</option>
              <option>Beach Holidays</option>
              <option>Culture Tour</option>
              <option>Budget Travel</option>
            </select>
          </div>

          {/* button */}
          <button type="submit" className="search-btn">
            <FaSearch /> SEARCH
          </button>

        </form>
      </div>
    </section>
  );
}
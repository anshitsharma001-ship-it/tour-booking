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
    <section className="py-5 bg-light">
      <div className="container">
        <form onSubmit={handleSearch}>
          <div className="row g-3 align-items-center justify-content-center">
           
            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaSearch className="text-secondary" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Insert keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
            </div>

  
            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaMapMarkerAlt className="text-danger" />
                </span>
                <select
                  className="form-select"
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
            </div>

            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaCompass className="text-primary" />
                </span>
                <select
                  className="form-select"
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
            </div>

            <div className="col-md-2">
              <button
                type="submit"
                className="btn fw-bold w-100 d-flex align-items-center justify-content-center gap-2"
                style={{ backgroundColor: "#ff6600", color: "#fff" }}
              >
                <FaSearch /> SEARCH
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
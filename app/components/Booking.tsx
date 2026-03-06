"use client";
import { useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [trip, setTrip] = useState("");
  const [date, setDate] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name}, Trip: ${trip}, Date: ${date}`);
  };

  return (
    <section className="py-12 px-6 flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleBooking}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Trip</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Trip Name"
          className="w-full border p-3 rounded mb-4"
          value={trip}
          onChange={(e) => setTrip(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full border p-3 rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>
    </section>
  );
}
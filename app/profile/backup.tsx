"use client";

import { useState } from "react";

export default function CreateProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    height: "",
    maritalStatus: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    console.log(formData);
    alert("Step 1 Completed");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border p-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Create Your Profile
        </h1>

        <p className="text-slate-600 mt-2">
          Step 1 of 7 - Basic Information
        </p>

        <div className="mt-8 space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Height
            </label>

            <select
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            >
              <option value="">Select Height</option>
              <option>4'9"</option>
              <option>4'10"</option>
              <option>4'11"</option>
              <option>5'1"</option>
              <option>5'2"</option>
              <option>5'4"</option>
              <option>5'6"</option>
              <option>5'7"</option>
              <option>5'8"</option>
              <option>6'0"</option>
              <option>6'1"</option>
              <option>6'2"</option>
              <option>6'3"</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Marital Status
            </label>

            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            >
              <option value="">Select Status</option>
              <option>Never Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-blue-700 text-white py-4 rounded-xl font-semibold"
          >
            Continue
          </button>

        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { universities } from "@/data/universities";

interface EducationCareerSectionProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function EducationCareerSection({
  formData,
  setFormData,
}: EducationCareerSectionProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredUniversities = universities.filter((uni) =>
    uni.toLowerCase().includes(formData.university.toLowerCase())
  );

  return (
    <div className="mt-10 border-t pt-10">
      <h2 className="text-2xl font-bold text-slate-900">
        Education & Career
      </h2>

      <p className="text-slate-600 mt-2">
        Tell us about your education and profession.
      </p>

      <div className="mt-8 space-y-6">

        {/* Highest Education */}
        <div>
          <label className="block mb-2 font-medium">
            Highest Education
          </label>

          <select
            value={formData.highestEducation}
            onChange={(e) =>
              setFormData({
                ...formData,
                highestEducation: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Education
            </option>

            <option>High School</option>
            <option>Diploma</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>MBA</option>
            <option>PhD</option>
            <option>Other</option>
          </select>
        </div>

        {/* Degree */}
        <div>
          <label className="block mb-2 font-medium">
            Degree
          </label>

          <input
            type="text"
            value={formData.degree}
            onChange={(e) =>
              setFormData({
                ...formData,
                degree: e.target.value,
              })
            }
            placeholder="Example: BCA, B.Tech, MBA, MBBS"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* University */}
        <div className="relative">
          <label className="block mb-2 font-medium">
            University / College
          </label>

          <input
            type="text"
            value={formData.university}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => {
              setFormData({
                ...formData,
                university: e.target.value,
              });

              setShowSuggestions(true);
            }}
            placeholder="Search University (PTU, DU, GNDU...)"
            className="w-full border rounded-xl p-4"
          />

          {showSuggestions &&
            formData.university.trim() !== "" && (
              <div className="absolute left-0 right-0 mt-1 bg-white border rounded-xl shadow-lg max-h-60 overflow-y-auto z-50">

                {filteredUniversities.length > 0 ? (
                  filteredUniversities
                    .slice(0, 10)
                    .map((uni) => (
                      <div
                        key={uni}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            university: uni,
                          });

                          setShowSuggestions(false);
                        }}
                        className="px-4 py-3 cursor-pointer hover:bg-slate-100 border-b"
                      >
                        {uni}
                      </div>
                    ))
                ) : (
                  <div className="px-4 py-3 text-slate-500">
                    No university found
                  </div>
                )}

              </div>
            )}
        </div>

        {/* Passing Year */}
        <div>
          <label className="block mb-2 font-medium">
            Passing Year
          </label>

          <input
            type="number"
            value={formData.passingYear}
            onChange={(e) =>
              setFormData({
                ...formData,
                passingYear: e.target.value,
              })
            }
            placeholder="Example: 2024"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="block mb-2 font-medium">
            Occupation
          </label>

          <input
            type="text"
            value={formData.occupation}
            onChange={(e) =>
              setFormData({
                ...formData,
                occupation: e.target.value,
              })
            }
            placeholder="Example: Software Engineer"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block mb-2 font-medium">
            Company Name (Optional)
          </label>

          <input
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: e.target.value,
              })
            }
            placeholder="Enter company name"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* Income */}
        <div>
          <label className="block mb-2 font-medium">
            Annual Income (Optional)
          </label>

          <select
            value={formData.income}
            onChange={(e) =>
              setFormData({
                ...formData,
                income: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Income
            </option>

            <option>Below ₹3 Lakh</option>
            <option>₹3 - ₹5 Lakh</option>
            <option>₹5 - ₹10 Lakh</option>
            <option>₹10 - ₹20 Lakh</option>
            <option>₹20 - ₹50 Lakh</option>
            <option>Above ₹50 Lakh</option>
          </select>
        </div>

      </div>
    </div>
  );
}
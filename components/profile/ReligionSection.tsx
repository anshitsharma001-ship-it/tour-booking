"use client";

import { useState } from "react";

interface ReligionSectionProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function ReligionSection({
  formData,
  setFormData,
}: ReligionSectionProps) { 
  const [showCaste, setShowCaste] = useState(false);

  return (
    <div className="mt-10 border-t pt-10">

      <h2 className="text-2xl font-bold text-slate-900">
        Religion & Community
      </h2>

      <p className="text-slate-600 mt-2">
        Help us find better matches for you.
      </p>

      <div className="mt-8 space-y-6">

        {/* Religion */}
        <div>
          <label className="block mb-2 font-medium">
            Religion
          </label>

          <select className="w-full border rounded-xl p-4">
            <option value="" disabled hidden>
              Select Religion
            </option>
            <option>Hindu</option>
            <option>Sikh</option>
            <option>Muslim</option>
            <option>Christian</option>
            <option>Jain</option>
            <option>Buddhist</option>
            <option>Other</option>
          </select>
        </div>

        {/* Mother Tongue */}
        <div>
          <label className="block mb-2 font-medium">
            Mother Tongue
          </label>

          <select className="w-full border rounded-xl p-4">
             <option value="" disabled hidden>
              Select Mother Tongue
            </option>
            <option>Hindi</option>
            <option>Punjabi</option>
            <option>English</option>
            <option>Urdu</option>
            <option>Bengali</option>
            <option>Gujarati</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Marathi</option>
          </select>
        </div>

        {/* Show Caste Toggle */}

        <div className="flex items-center gap-3">

          <input
            type="checkbox"
            id="showCaste"
            checked={showCaste}
            onChange={() => setShowCaste(!showCaste)}
            className="w-5 h-5"
          />

          <label
            htmlFor="showCaste"
            className="font-medium"
          >
            Show Caste Information
          </label>

        </div>

        {/* Conditional Fields */}

        {showCaste && (
          <>
            <div>
              <label className="block mb-2 font-medium">
                Caste
              </label>

              <input
                type="text"
                placeholder="Enter your caste"
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Sub Caste
              </label>

              <input
                type="text"
                placeholder="Enter sub caste"
                className="w-full border rounded-xl p-4"
              />
            </div>
          </>
        )}

      </div>

    </div>
  );
}
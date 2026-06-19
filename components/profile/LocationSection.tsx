"use client";

interface LocationSectionProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function LocationSection({
  formData,
  setFormData,
}: LocationSectionProps) {
  return (
    <div className="mt-10 border-t pt-10">

      <h2 className="text-2xl font-bold text-slate-900">
        Location
      </h2>

      <p className="text-slate-600 mt-2">
        Tell us where you currently live.
      </p>

      <div className="mt-8 space-y-6">

        {/* Country */}

        <div>
          <label className="block mb-2 font-medium">
            Country
          </label>

          <input
            type="text"
            value={formData.country}
            onChange={(e) =>
              setFormData({
                ...formData,
                country: e.target.value,
              })
            }
            placeholder="Enter your country"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* State */}

        <div>
          <label className="block mb-2 font-medium">
            State / Province / Region
          </label>

          <input
            type="text"
            value={formData.state}
            onChange={(e) =>
              setFormData({
                ...formData,
                state: e.target.value,
              })
            }
            placeholder="Enter your state or province"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* City */}

        <div>
          <label className="block mb-2 font-medium">
            City
          </label>

          <input
            type="text"
            value={formData.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value,
              })
            }
            placeholder="Enter your city"
            className="w-full border rounded-xl p-4"
          />
        </div>

      </div>

    </div>
  );
}
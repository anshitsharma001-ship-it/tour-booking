"use client";

interface FamilySectionProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function FamilySection({
  formData,
  setFormData,
}: FamilySectionProps) {
  return (
    <div className="mt-10 border-t pt-10">

      <h2 className="text-2xl font-bold text-slate-900">
        Family Details
      </h2>

      <p className="text-slate-600 mt-2">
        Tell us about your family background.
      </p>

      <div className="mt-8 space-y-6">

        {/* Father Occupation */}

        <div>
          <label className="block mb-2 font-medium">
            Father's Occupation
          </label>

          <input
            type="text"
            value={formData.fatherOccupation}
            onChange={(e) =>
              setFormData({
                ...formData,
                fatherOccupation: e.target.value,
              })
            }
            placeholder="Enter father's occupation"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* Mother Occupation */}

        <div>
          <label className="block mb-2 font-medium">
            Mother's Occupation
          </label>

          <input
            type="text"
            value={formData.motherOccupation}
            onChange={(e) =>
              setFormData({
                ...formData,
                motherOccupation: e.target.value,
              })
            }
            placeholder="Enter mother's occupation"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* Brothers */}

        <div>
          <label className="block mb-2 font-medium">
            Number of Brothers
          </label>

          <select
            value={formData.brothers}
            onChange={(e) =>
              setFormData({
                ...formData,
                brothers: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Brothers
            </option>

            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>

        {/* Sisters */}

        <div>
          <label className="block mb-2 font-medium">
            Number of Sisters
          </label>

          <select
            value={formData.sisters}
            onChange={(e) =>
              setFormData({
                ...formData,
                sisters: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Sisters
            </option>

            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>

        {/* Family Type */}

        <div>
          <label className="block mb-2 font-medium">
            Family Type
          </label>

          <select
            value={formData.familyType}
            onChange={(e) =>
              setFormData({
                ...formData,
                familyType: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Family Type
            </option>

            <option>Nuclear Family</option>
            <option>Joint Family</option>
          </select>
        </div>

        {/* Family Status */}

        <div>
          <label className="block mb-2 font-medium">
            Family Status
          </label>

          <select
            value={formData.familyStatus}
            onChange={(e) =>
              setFormData({
                ...formData,
                familyStatus: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Family Status
            </option>

            <option>Middle Class</option>
            <option>Upper Middle Class</option>
            <option>Affluent</option>
          </select>
        </div>

      </div>

    </div>
  );
}
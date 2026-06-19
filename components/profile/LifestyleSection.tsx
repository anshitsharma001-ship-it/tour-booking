"use client";

interface LifestyleSectionProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function LifestyleSection({
  formData,
  setFormData,
}: LifestyleSectionProps) {
  return (
    <div className="mt-10 border-t pt-10">

      <h2 className="text-2xl font-bold text-slate-900">
        Lifestyle & Habits
      </h2>

      <p className="text-slate-600 mt-2">
        Tell us about your lifestyle preferences.
      </p>

      <div className="mt-8 space-y-6">

        {/* Diet */}

        <div>
          <label className="block mb-2 font-medium">
            Diet
          </label>

          <select
            value={formData.diet}
            onChange={(e) =>
              setFormData({
                ...formData,
                diet: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Diet
            </option>

            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
            <option>Vegan</option>
            <option>Eggetarian</option>
            <option>Other</option>
          </select>
        </div>

        {/* Smoking */}

        <div>
          <label className="block mb-2 font-medium">
            Smoking
          </label>

          <select
            value={formData.smoking}
            onChange={(e) =>
              setFormData({
                ...formData,
                smoking: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Smoking Habit
            </option>

            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
            <option>Prefer Not To Say</option>
          </select>
        </div>

        {/* Drinking */}

        <div>
          <label className="block mb-2 font-medium">
            Drinking
          </label>

          <select
            value={formData.drinking}
            onChange={(e) =>
              setFormData({
                ...formData,
                drinking: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Drinking Habit
            </option>

            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
            <option>Prefer Not To Say</option>
          </select>
        </div>

        {/* Fitness */}

        <div>
          <label className="block mb-2 font-medium">
            Fitness Level
          </label>

          <select
            value={formData.fitnessLevel}
            onChange={(e) =>
              setFormData({
                ...formData,
                fitnessLevel: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Fitness Level
            </option>

            <option>Very Active</option>
            <option>Active</option>
            <option>Moderately Active</option>
            <option>Rarely Exercise</option>
          </select>
        </div>

        {/* Hobbies */}

        <div>
          <label className="block mb-2 font-medium">
            Hobbies & Interests
          </label>

          <input
            type="text"
            value={formData.hobbies}
            onChange={(e) =>
              setFormData({
                ...formData,
                hobbies: e.target.value,
              })
            }
            placeholder="Example: Traveling, Reading, Music"
            className="w-full border rounded-xl p-4"
          />
        </div>

      </div>

    </div>
  );
}
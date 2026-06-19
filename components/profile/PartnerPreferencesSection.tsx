"use client";

interface PartnerPreferencesSectionProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function PartnerPreferencesSection({
  formData,
  setFormData,
}: PartnerPreferencesSectionProps) {
  return (
    <div className="mt-10 border-t pt-10">

      <h2 className="text-2xl font-bold text-slate-900">
        Partner Preferences
      </h2>

      <p className="text-slate-600 mt-2">
        Tell us about your ideal life partner.
      </p>

      <div className="mt-8 space-y-6">

        {/* Preferred Age Range */}

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 font-medium">
              Minimum Age
            </label>

            <input
              type="number"
              value={formData.preferredAgeMin}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  preferredAgeMin: e.target.value,
                })
              }
              placeholder="Min Age"
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Maximum Age
            </label>

            <input
              type="number"
              value={formData.preferredAgeMax}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  preferredAgeMax: e.target.value,
                })
              }
              placeholder="Max Age"
              className="w-full border rounded-xl p-4"
            />
          </div>

        </div>

        {/* Preferred Marital Status */}

        <div>
          <label className="block mb-2 font-medium">
            Preferred Marital Status
          </label>

          <select
            value={formData.preferredMaritalStatus}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredMaritalStatus: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Preference
            </option>

            <option>No Preference</option>
            <option>Never Married</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>
        </div>

        {/* Preferred Country */}

        <div>
          <label className="block mb-2 font-medium">
            Preferred Country
          </label>

          <input
            type="text"
            value={formData.preferredCountry}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredCountry: e.target.value,
              })
            }
            placeholder="Country or No Preference"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* Preferred Religion */}

        <div>
          <label className="block mb-2 font-medium">
            Preferred Religion
          </label>

          <input
            type="text"
            value={formData.preferredReligion}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredReligion: e.target.value,
              })
            }
            placeholder="Religion or No Preference"
            className="w-full border rounded-xl p-4"
          />
        </div>

        {/* Preferred Education */}

        <div>
          <label className="block mb-2 font-medium">
            Preferred Education
          </label>

          <select
            value={formData.preferredEducation}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredEducation: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Education
            </option>

            <option>No Preference</option>
            <option>High School</option>
            <option>Diploma</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>MBA</option>
            <option>PhD</option>
          </select>
        </div>

        {/* Preferred Diet */}

        <div>
          <label className="block mb-2 font-medium">
            Preferred Diet
          </label>

          <select
            value={formData.preferredDiet}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredDiet: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Diet
            </option>

            <option>No Preference</option>
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
            <option>Vegan</option>
            <option>Eggetarian</option>
          </select>
        </div>

        {/* Preferred Smoking */}

        <div>
          <label className="block mb-2 font-medium">
            Preferred Smoking Habit
          </label>

          <select
            value={formData.preferredSmoking}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredSmoking: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Preference
            </option>

            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
          </select>
        </div>

        {/* Preferred Drinking */}

        <div>
          <label className="block mb-2 font-medium">
            Preferred Drinking Habit
          </label>

          <select
            value={formData.preferredDrinking}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredDrinking: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Preference
            </option>

            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
          </select>
        </div>

      </div>

    </div>
  );
}
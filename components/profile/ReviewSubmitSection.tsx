"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface ReviewSubmitSectionProps {
  formData: any;
}

export default function ReviewSubmitSection({
  formData,
}: ReviewSubmitSectionProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const { error } = await supabase
        .from("profiles")
        .insert([
          {
            full_name: formData.fullName,
            gender: formData.gender,
            dob: formData.dob,
            height: formData.height,
            marital_status: formData.maritalStatus,

            religion: formData.religion,
            mother_tongue: formData.motherTongue,
            caste: formData.caste,
            sub_caste: formData.subCaste,

            highest_education: formData.highestEducation,
            degree: formData.degree,
            university: formData.university,
            passing_year: formData.passingYear,
            occupation: formData.occupation,
            company: formData.company,
            income: formData.income,

            country: formData.country,
            state: formData.state,
            city: formData.city,

            father_occupation: formData.fatherOccupation,
            mother_occupation: formData.motherOccupation,
            brothers: formData.brothers,
            sisters: formData.sisters,
            family_type: formData.familyType,
            family_status: formData.familyStatus,

            diet: formData.diet,
            smoking: formData.smoking,
            drinking: formData.drinking,
            fitness_level: formData.fitnessLevel,
            hobbies: formData.hobbies,

            preferred_age_min: formData.preferredAgeMin,
            preferred_age_max: formData.preferredAgeMax,
            preferred_religion: formData.preferredReligion,
            preferred_location: formData.preferredLocation,
            preferred_marital_status:
              formData.preferredMaritalStatus,
            preferred_country:
              formData.preferredCountry,
            preferred_education:
              formData.preferredEducation,
            preferred_diet: formData.preferredDiet,
            preferred_smoking:
              formData.preferredSmoking,
            preferred_drinking:
              formData.preferredDrinking,

            about_me: formData.aboutMe,

            photos: formData.photos,
            main_photo_index:
              formData.mainPhotoIndex,
            photo_visibility:
              formData.photoVisibility,
          },
        ]);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Profile Submitted Successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 border-t pt-10">

      <h2 className="text-2xl font-bold text-slate-900">
        Review & Submit
      </h2>

      <p className="text-slate-600 mt-2">
        Please review your profile information before submitting.
      </p>

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between border rounded-xl p-4">
          <span>Basic Information</span>
          <span className="text-green-600 font-semibold">
            ✓ Completed
          </span>
        </div>

        <div className="flex items-center justify-between border rounded-xl p-4">
          <span>Religion & Community</span>
          <span className="text-green-600 font-semibold">
            ✓ Completed
          </span>
        </div>

        <div className="flex items-center justify-between border rounded-xl p-4">
          <span>Education & Career</span>
          <span className="text-green-600 font-semibold">
            ✓ Completed
          </span>
        </div>

        <div className="flex items-center justify-between border rounded-xl p-4">
          <span>Location</span>
          <span className="text-green-600 font-semibold">
            ✓ Completed
          </span>
        </div>

      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
        >
          {loading
            ? "Submitting..."
            : "Submit Profile"}
        </button>
      </div>

    </div>
  );
}
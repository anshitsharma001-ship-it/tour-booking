"use client";

import { useState } from "react";

import ReligionSection from "@/components/profile/ReligionSection";
import EducationCareerSection from "@/components/profile/EducationCareerSection";
import LocationSection from "@/components/profile/LocationSection";
import FamilySection from "@/components/profile/FamilySection";
import LifestyleSection from "@/components/profile/LifestyleSection";
import PartnerPreferencesSection from "@/components/profile/PartnerPreferencesSection";
import AboutMeSection from "@/components/profile/AboutMeSection";
import ProfilePhotosSection from "@/components/profile/ProfilePhotosSection";
import ReviewSubmitSection from "@/components/profile/ReviewSubmitSection";

export default function CreateProfilePage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
  // Basic Information
  fullName: "",
  gender: "",
  dob: "",
  height: "",
  maritalStatus: "",

  // Religion
  religion: "",
  motherTongue: "",
  showCaste: false,
  caste: "",
  subCaste: "",

  // Education
  highestEducation: "",
  degree: "",
  university: "",
  passingYear: "",
  occupation: "",
  company: "",
  income: "",

  // Location
  country: "",
  state: "",
  city: "",
    
  // Family
  familyType: "",
  familyStatus: "",
  fatherOccupation: "",
  motherOccupation: "",
  brothers: "",
  sisters: "",

  // Lifestyle
  diet: "",
  smoking: "",
  drinking: "",
  fitnessLevel: "",
  hobbies: "",

  // Partner Preferences
  preferredAgeMin: "",
  preferredAgeMax: "",
  preferredReligion: "",
  preferredLocation: "",
  preferredMaritalStatus: "",
  preferredCountry: "",
  preferredEducation: "",
  preferredDiet: "",
  preferredSmoking: "",
  preferredDrinking: "",

  // About Me
  aboutMe: "",

  // Photos
  photos: [],
  mainPhotoIndex: 0,
  photoVisibility: "",
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
    if (step < 10) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border p-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Create Your Profile
        </h1>

        <p className="text-slate-600 mt-2">
          Step {step} of 10
        </p>

        <div className="mt-8 space-y-6">

          {/* Basic Information */}

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
              <option value="" disabled hidden>
              Select Height 
              </option>
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
              <option value="" disabled hidden>
              Select Marital Status 
            </option>
              <option>Never Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>


          {step >= 2 && (
            <ReligionSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step >= 3 && (
            <EducationCareerSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step >= 4 && (
            <LocationSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step >= 5 && (
            <FamilySection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step >= 6 && (
            <LifestyleSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step >= 7 && (
            <PartnerPreferencesSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step >= 8 && (
            <AboutMeSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step >= 9 && (
            <ProfilePhotosSection
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step >= 10 && (
            <ReviewSubmitSection
              formData={formData}
            />
          )}



          {/* <pre className="bg-slate-100 p-4 rounded-xl text-xs overflow-auto">
            {JSON.stringify(formData, null, 2)}
          </pre> */}



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
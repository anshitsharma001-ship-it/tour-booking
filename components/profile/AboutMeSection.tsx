"use client";

interface AboutMeSectionProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function AboutMeSection({
  formData,
  setFormData,
}: AboutMeSectionProps) {
  return (
    <div className="mt-10 border-t pt-10">

      <h2 className="text-2xl font-bold text-slate-900">
        About Me
      </h2>

      <p className="text-slate-600 mt-2">
        Write a short introduction about yourself.
        This will be visible on your profile.
      </p>

      <div className="mt-8 space-y-6">

        <div>
          <label className="block mb-2 font-medium">
            About Yourself
          </label>

          <textarea
            rows={6}
            maxLength={1000}
            value={formData.aboutMe}
            onChange={(e) =>
              setFormData({
                ...formData,
                aboutMe: e.target.value,
              })
            }
            placeholder="Example: I am a software engineer who values family, honesty and personal growth. I enjoy traveling, fitness and spending time with loved ones..."
            className="w-full border rounded-xl p-4 resize-none"
          />

          <p className="text-sm text-slate-500 mt-2">
            {formData.aboutMe.length}/1000 characters
          </p>
        </div>

      </div>

    </div>
  );
}
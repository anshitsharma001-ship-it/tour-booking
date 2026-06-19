"use client";

import { supabase } from "@/lib/supabase";

interface ProfilePhotosSectionProps {
  formData: any;
  setFormData: any;
}

export default function ProfilePhotosSection({
  formData,
  setFormData,
}: ProfilePhotosSectionProps) {
  const photos = formData.photos || [];
  const mainPhotoIndex = formData.mainPhotoIndex || 0;

  const handlePhotoUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (!files) return;

    if (photos.length + files.length > 6) {
      alert("Maximum 6 photos allowed");
      return;
    }

    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("profile-photos")
        .upload(fileName, file);

      if (error) {
        alert(error.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("profile-photos")
        .getPublicUrl(fileName);

      uploadedUrls.push(publicUrl);
    }

    setFormData({
      ...formData,
      photos: [...photos, ...uploadedUrls],
    });
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = photos.filter(
      (_: string, i: number) => i !== index
    );

    setFormData({
      ...formData,
      photos: updatedPhotos,
    });
  };

  return (
    <div className="mt-10 border-t pt-10">
      <h2 className="text-2xl font-bold text-slate-900">
        Profile Photos
      </h2>

      <p className="text-slate-600 mt-2">
        Upload up to 6 photos. Choose one as your main profile photo.
      </p>

      <div className="mt-8 space-y-6">

        {/* Upload */}

        <div>
          <label className="block mb-2 font-medium">
            Upload Photos
          </label>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            disabled={photos.length >= 6}
            className="w-full border rounded-xl p-4"
          />

          <p className="text-sm text-slate-500 mt-2">
            Photos Uploaded: {photos.length}/6
          </p>
        </div>

        {/* Preview */}

        {photos.length > 0 && (
          <div>
            <h3 className="font-semibold mb-4">
              Uploaded Photos
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {photos.map((photo: string, index: number) => (
                <div
                  key={index}
                  className="relative border rounded-xl overflow-hidden bg-white"
                >

                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-2 right-2 z-30 bg-red-600 text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center"
                  >
                    ✕
                  </button>

                  {mainPhotoIndex === index && (
                    <div className="absolute top-2 left-2 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full z-20 shadow">
                      ✓ Main Photo
                    </div>
                  )}

                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-40 object-cover"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        mainPhotoIndex: index,
                      })
                    }
                    className={`w-full py-2 text-sm font-medium ${
                      mainPhotoIndex === index
                        ? "bg-green-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200"
                    }`}
                  >
                    {mainPhotoIndex === index
                      ? "Current Main Photo"
                      : "Set as Main Photo"}
                  </button>

                </div>
              ))}

            </div>
          </div>
        )}

        {/* Visibility */}

        <div>
          <label className="block mb-2 font-medium">
            Photo Visibility
          </label>

          <select
            value={formData.photoVisibility || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                photoVisibility: e.target.value,
              })
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="" disabled hidden>
              Select Vi
            </option>

            <option>Everyone</option>
            <option>Registered Members Only</option>
            <option>Accepted Matches Only</option>
          </select>
        </div>

      </div>
    </div>
  );
}
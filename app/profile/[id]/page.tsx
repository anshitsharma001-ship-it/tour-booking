import { supabase } from "@/lib/supabase";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProfilePage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !profile) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">
          Profile not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border p-8">

        <h1 className="text-3xl font-bold">
          {profile.full_name}
        </h1>

        {/* Profile Photo */}
        {profile.photos?.length > 0 && (
          <div className="mt-6 mb-8">
            <img
              src={
                profile.photos[
                  profile.main_photo_index || 0
                ]
              }
              alt={profile.full_name}
              className="w-64 h-64 object-cover rounded-2xl border shadow"
            />
          </div>
        )}

        <div className="mt-8 grid md:grid-cols-2 gap-8">

          {/* Basic Information */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Basic Information
            </h2>

            <p>Gender: {profile.gender || "-"}</p>
            <p>Date of Birth: {profile.dob || "-"}</p>
            <p>Height: {profile.height || "-"}</p>
            <p>
              Marital Status:
              {" "}
              {profile.marital_status || "-"}
            </p>
          </div>

          {/* Religion */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Religion & Community
            </h2>

            <p>Religion: {profile.religion || "-"}</p>
            <p>
              Mother Tongue:
              {" "}
              {profile.mother_tongue || "-"}
            </p>
            <p>Caste: {profile.caste || "-"}</p>
            <p>
              Sub Caste:
              {" "}
              {profile.sub_caste || "-"}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Education & Career
            </h2>

            <p>
              Education:
              {" "}
              {profile.highest_education || "-"}
            </p>

            <p>Degree: {profile.degree || "-"}</p>

            <p>
              University:
              {" "}
              {profile.university || "-"}
            </p>

            <p>
              Occupation:
              {" "}
              {profile.occupation || "-"}
            </p>

            <p>Company: {profile.company || "-"}</p>

            <p>Income: {profile.income || "-"}</p>
          </div>

          {/* Location */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Location
            </h2>

            <p>Country: {profile.country || "-"}</p>
            <p>State: {profile.state || "-"}</p>
            <p>City: {profile.city || "-"}</p>
          </div>

          {/* Family */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Family Details
            </h2>

            <p>
              Father Occupation:
              {" "}
              {profile.father_occupation || "-"}
            </p>

            <p>
              Mother Occupation:
              {" "}
              {profile.mother_occupation || "-"}
            </p>

            <p>Brothers: {profile.brothers || "-"}</p>

            <p>Sisters: {profile.sisters || "-"}</p>

            <p>
              Family Type:
              {" "}
              {profile.family_type || "-"}
            </p>

            <p>
              Family Status:
              {" "}
              {profile.family_status || "-"}
            </p>
          </div>

          {/* Lifestyle */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Lifestyle
            </h2>

            <p>Diet: {profile.diet || "-"}</p>
            <p>Smoking: {profile.smoking || "-"}</p>
            <p>Drinking: {profile.drinking || "-"}</p>
            <p>
              Fitness Level:
              {" "}
              {profile.fitness_level || "-"}
            </p>
            <p>Hobbies: {profile.hobbies || "-"}</p>
          </div>

          {/* Partner Preferences */}
          <div>
            <h2 className="font-bold text-lg mb-3">
              Partner Preferences
            </h2>

            <p>
              Preferred Age:
              {" "}
              {profile.preferred_age_min || "-"}
              {" - "}
              {profile.preferred_age_max || "-"}
            </p>

            <p>
              Preferred Religion:
              {" "}
              {profile.preferred_religion || "-"}
            </p>

            <p>
              Preferred Location:
              {" "}
              {profile.preferred_location || "-"}
            </p>

            <p>
              Preferred Marital Status:
              {" "}
              {profile.preferred_marital_status || "-"}
            </p>

            <p>
              Preferred Country:
              {" "}
              {profile.preferred_country || "-"}
            </p>

            <p>
              Preferred Education:
              {" "}
              {profile.preferred_education || "-"}
            </p>
          </div>

        </div>

        {/* About Me */}
        <div className="mt-10">
          <h2 className="font-bold text-lg mb-3">
            About Me
          </h2>

          <p>
            {profile.about_me ||
              "No description added"}
          </p>
        </div>

      </div>
    </div>
  );
}
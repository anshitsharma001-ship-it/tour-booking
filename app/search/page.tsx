import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function SearchPage() {
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Browse Profiles
        </h1>

        {profiles?.length === 0 ? (
          <div className="bg-white p-6 rounded-xl border">
            No profiles found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {profiles?.map((profile) => (
              <div
                key={profile.id}
                className="bg-white rounded-2xl border p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold">
                  {profile.full_name || "No Name"}
                </h2>

                <div className="mt-4 space-y-2 text-slate-600">

                  <p>
                    Gender: {profile.gender || "-"}
                  </p>

                  <p>
                    Religion: {profile.religion || "-"}
                  </p>

                  <p>
                    Education: {profile.highest_education || "-"}
                  </p>

                  <p>
                    Occupation: {profile.occupation || "-"}
                  </p>

                  <p>
                    Location:
                    {" "}
                    {profile.city || "-"},
                    {" "}
                    {profile.country || "-"}
                  </p>
<Link
  href={`/profile/${profile.id}`}
  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
>
  View Profile
</Link>
                </div>

              </div>
            ))}

          </div>
        )}
        

      </div>
    </div>
  );
}
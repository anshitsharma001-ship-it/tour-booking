export default function FeaturedProfiles() {
  const profiles = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      city: "Delhi",
      profession: "Software Engineer",
    },
    {
      id: 2,
      name: "Simran Kaur",
      age: 25,
      city: "Chandigarh",
      profession: "Doctor",
    },
    {
      id: 3,
      name: "Rahul Verma",
      age: 29,
      city: "Mumbai",
      profession: "Business Owner",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Profiles
          </h2>

          <p className="text-slate-600 mt-3">
            Discover verified members looking for meaningful relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-3xl border shadow-sm overflow-hidden"
            >

              {/* Image Placeholder */}
              <div className="h-72 bg-slate-200"></div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {profile.name}
                </h3>

                <p className="text-slate-600 mt-2">
                  {profile.age} Years
                </p>

                <p className="text-slate-600">
                  {profile.city}
                </p>

                <p className="text-slate-600">
                  {profile.profession}
                </p>

                <button className="w-full mt-5 bg-blue-700 text-white py-3 rounded-xl">
                  View Profile
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
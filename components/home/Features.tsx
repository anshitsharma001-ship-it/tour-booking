export default function Features() {
  const features = [
    {
      title: "Verified Profiles",
      description:
        "Every profile goes through verification for a safer experience.",
    },
    {
      title: "Smart Matching",
      description:
        "Discover compatible matches based on preferences and interests.",
    },
    {
      title: "Privacy Control",
      description:
        "Control who can view your profile and personal information.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose RishtaQHub?
          </h2>

          <p className="mt-4 text-slate-600">
            A trusted platform designed to help families and individuals
            find meaningful relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 p-8 rounded-3xl border hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
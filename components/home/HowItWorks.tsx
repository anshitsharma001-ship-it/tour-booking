export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up and create your detailed matrimonial profile in minutes.",
    },
    {
      number: "02",
      title: "Search Matches",
      description:
        "Browse thousands of verified profiles using smart filters.",
    },
    {
      number: "03",
      title: "Connect Securely",
      description:
        "Send interests and connect with potential matches safely.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            How RishtaQHub Works
          </h2>

          <p className="mt-4 text-slate-600">
            Simple, secure and designed for meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-8 shadow-sm border"
            >
              <div className="text-4xl font-bold text-blue-700 mb-4">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
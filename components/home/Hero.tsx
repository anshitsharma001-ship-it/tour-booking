import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium">
              Trusted Matrimonial Platform
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Find Your Perfect{" "}
              <span className="text-blue-900">
                Life Partner
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Join thousands of families who trust RishtaQHub to find
              meaningful and genuine relationships through verified profiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/profile/create"
                className="bg-blue-900 text-white px-8 py-4 rounded-xl text-center font-semibold hover:bg-blue-800 transition"
              >
                Create Profile
              </Link>

              <Link
                href="/search"
                className="border border-slate-300 px-8 py-4 rounded-xl text-center font-semibold hover:bg-slate-100 transition"
              >
                Search Profiles
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-8 text-sm text-slate-600">
              <div>
                <span className="font-bold text-slate-900 text-xl">
                  50K+
                </span>
                <p>Profiles</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 text-xl">
                  10K+
                </span>
                <p>Matches</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 text-xl">
                  100%
                </span>
                <p>Verified</p>
              </div>
            </div>
          </div>

          {/* Right Search Card */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-6 border max-w-lg ml-auto">
              <h3 className="text-3xl font-bold mb-6">
                Find Your Match
              </h3>

              <div className="space-y-4">
                <select className="w-full border rounded-xl p-4">
                  <option>Looking For</option>
                  <option>Bride</option>
                  <option>Groom</option>
                </select>

                <select className="w-full border rounded-xl p-4">
                  <option>Age Range</option>
                  <option>18 - 25</option>
                  <option>26 - 30</option>
                  <option>31 - 35</option>
                </select>

                <select className="w-full border rounded-xl p-4">
                  <option>Religion</option>
                  <option>Hindu</option>
                  <option>Sikh</option>
                  <option>Muslim</option>
                  <option>Christian</option>
                </select>

                <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition">
                  Search Profiles
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
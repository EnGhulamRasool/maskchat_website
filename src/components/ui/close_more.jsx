{/* ====== CLOSE MORE LEADS SECTION ====== */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 text-indigo-600 font-medium mb-4">
        <span className="w-12 h-1 bg-indigo-600 rounded-full"></span>
        <span className="text-sm uppercase tracking-wider">Proven Results</span>
        <span className="w-12 h-1 bg-indigo-600 rounded-full"></span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Close more leads, less effort
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side – Image with Floating Badges */}
      <div className="relative">
        <img
          src="/assets/leads-image.jpg"   {/* ← Put your photo here */}
          alt="Team using Maskchat"
          className="w-full rounded-3xl shadow-2xl"
        />

        {/* 50% Badge */}
        <div className="absolute -top-6 -left-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-xl">
          <div className="text-3xl font-black">50%</div>
          <div>
          <div className="text-sm font-medium">Faster Task Completion</div>
        </div>

        {/* 30% Badge */}
        <div className="absolute -bottom-6 right-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-xl">
          <div className="text-3xl font-black">30%</div>
          <div className="text-sm font-medium">Quicker Data Entry & Verification</div>
        </div>
      </div>

      {/* Right Side – Text + Benefits */}
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-gray-900">
          With Maskchat, your team can:
        </h3>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Reply instantly and keep prospects engaged.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Follow Up Automatically to boost response rates.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Stay Organized with every chat in one place.</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
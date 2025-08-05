import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Expert Mathematics Teacher",
      description: "Learn from our highly qualified and experienced mathematics teacher with 10+ years of expertise in JEE, CBSE, and JAC preparation.",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Proven Track Record",
      description: "95% success rate with students consistently achieving top ranks in JEE and excellent CBSE results year after year.",
      color: "green"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Personalized Attention",
      description: "Small batch sizes ensure individual attention and customized study plans tailored to each student's learning pace.",
      color: "purple"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Regular Tests & Analysis",
      description: "Weekly mock tests with detailed performance analysis and improvement strategies to track progress effectively.",
      color: "orange"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Doubt Clearing Sessions",
      description: "Dedicated doubt clearing sessions with one-on-one support to ensure complete understanding of concepts.",
      color: "red"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Timing",
      description: "Convenient class timings that fit your schedule, with both morning and evening batches available.",
      color: "indigo"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Affordable Fees",
      description: "Quality education at reasonable fees with flexible payment options and no hidden charges.",
      color: "emerald"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Prime Location",
      description: "Centrally located in Hazaribagh with easy accessibility and safe environment for students.",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
      green: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100",
      purple: "bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100",
      orange: "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100",
      red: "bg-red-50 text-red-600 border-red-200 hover:bg-red-100",
      indigo: "bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100",
      emerald: "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100",
      teal: "bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Why Choose YPY Pathshala
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Best Choice
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why hundreds of students trust YPY Pathshala for their mathematics preparation and achieve outstanding results with our expert teacher.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl border-2 ${getColorClasses(feature.color)} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-4 right-4 w-8 h-8 rounded-full ${getColorClasses(feature.color).split(' ')[0]} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Success Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who have transformed their mathematics skills with our expert teacher and proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1">
                Book Free Demo Class
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

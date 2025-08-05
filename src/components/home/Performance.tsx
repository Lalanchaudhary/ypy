import React from "react";
import { StudentReview } from "./StudentReview";
import Link from "next/link";
import amit from "../../assets/amit.png"
import priya from "../../assets/priya.png"
import rahul from "../../assets/rahul.png"
import Image from 'next/image';
// Placeholder images (replace with real student images)
const toppers = [
  {
    name: "Amit Kumar",
    photo: amit, // Replace with actual path
    achievement: "JEE Mains 2024 - 98.5 Percentile",
    rollCode: "JEE2024",
    rollNumber: "A001"
  },
  {
    name: "Priya Singh",
    photo: priya,
    achievement: "CBSE 12th - 97% in Mathematics",
    rollCode: "CBSE12",
    rollNumber: "P045"
  },
  {
    name: "Rahul Verma",
    photo:rahul,
    achievement: "JAC 10th Topper - 99/100 in Maths",
    rollCode: "JAC10",
    rollNumber: "R078"
  },
  {
    name: "Rahul Verma",
    photo:rahul,
    achievement: "JAC 10th Topper - 99/100 in Maths",
    rollCode: "JAC10",
    rollNumber: "R078"
  },
];



const Performance = () => {
  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student Performance & Achievements
          </h2>
          <p className="text-lg text-gray-600">
            Our results speak for themselves. Meet our toppers, see real progress, and hear from our students and parents.
          </p>
        </div>

        {/* Toppers */}
        <div className="mb-16">
  <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
    Last Year Toppers
  </h3>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
    {toppers.map((topper, idx) => (
      <div
        key={idx}
        className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full max-w-[160px] sm:max-w-xs hover:shadow-xl transition-shadow duration-300"
      >
        {/* Student Photo */}
        <div className="w-32 h-32 sm:w-64 sm:h-64 rounded-xl overflow-hidden mb-3 sm:mb-4 border-4 border-blue-100 shadow-lg">
          <Image
            src={topper.photo}
            alt={topper.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Student Name */}
        <div className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 text-center">
          {topper.name}
        </div>

        {/* Roll Code and Number */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 mb-2 sm:mb-3 text-xs sm:text-sm">
          <div className="bg-blue-50 text-blue-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium">
            RollCode: {topper.rollCode}
          </div>
          <div className="bg-green-50 text-green-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium">
            Roll no: {topper.rollNumber}
          </div>
        </div>

        {/* Achievement */}
        <div className="text-[12px] sm:text-base text-blue-700 font-semibold text-center leading-snug sm:leading-tight">
          {topper.achievement}
        </div>

        {/* Decorative Dot */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full"></div>
      </div>
    ))}
  </div>

  {/* Show More Button */}
  <div className="text-center mt-10 sm:mt-12">
    <Link
      href="/Performances"
      className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group text-sm sm:text-base"
    >
      <span>Show More Achievements</span>
      <svg
        className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  </div>
</div>

      </div>
    </section>
  );
};

export default Performance;
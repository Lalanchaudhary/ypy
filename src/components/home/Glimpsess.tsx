import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images (replace with your own)
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

const Glimpsess = () => {
  return (
    <section className="py-16 px-6 lg:px-20 ">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm uppercase text-gray-600 font-medium">Event Gallery</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Some Glimpsess of <span className="text-blue-600">Our Coaching</span>
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <div className="col-span-1">
          <Image
            src={img1}
            alt="Event 1"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={img2}
            alt="Event 2"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={img3}
            alt="Event 3"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <Image
            src={img4}
            alt="Event 4"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={img5}
            alt="Event 5"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Show More Button */}
      <div className="text-center">
        <Link 
          href="/Gallery"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group"
        >
          <span>View Full Gallery</span>
          <svg 
            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Glimpsess;

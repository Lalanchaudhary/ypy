// components/HeroSection.js
"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import satendar from '../../assets/satendar.png';
import BookDemoModal from '../BookDemoModal';
import { useBookDemoModal } from '@/context/BookDemoModalContext';
import Link from 'next/link';
export default function HeroSection() {
  const formulas = ["∑ (i=1 to n) i = n(n+1)/2", "a² + b² = c²", "πr²", "E = mc²", "sin²θ + cos²θ = 1"];
  const [displayedText, setDisplayedText] = useState('');
  const [formulaIndex, setFormulaIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { openModal } = useBookDemoModal();
  useEffect(() => {
    const currentFormula = formulas[formulaIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentFormula.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFormula.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFormula.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentFormula.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && charIndex === 0) {
      // Move to next formula
      setIsDeleting(false);
      setFormulaIndex((prevIndex) => (prevIndex + 1) % formulas.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, formulaIndex]);

  return (
    <section className="relative py-4 px-6 lg:px-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      <BookDemoModal open={modalOpen} onClose={() => setModalOpen(false)} />
        {/* Enhanced Text Content */}
        <div className="text-center lg:text-left max-w-2xl">
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Trusted by 1000+ Students in Hazaribagh
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Master Mathematics{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              with Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join <span className="font-bold text-blue-700">YPY Pathsala</span> — the most trusted
            <span className="font-semibold text-gray-800"> coaching center in Hazaribagh</span> for
            JAC, CBSE, and JEE mathematics preparation.
          </p>

          {/* Math Symbols with enhanced styling */}
          <div className="text-2xl text-blue-800 font-mono mb-8 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100 min-h-[48px]">
            {displayedText}
            <span className="border-r-2 border-blue-800 animate-pulse ml-1"></span> {/* blinking cursor */}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={openModal} className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
              <span>Book a Free Demo</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <Link href={"/Performances"} className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
              <span>View Toppers</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Success Rate</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expert Teachers</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Enhanced Hero Image */}
        <div className="mb-10 lg:mb-0 relative w-full max-w-md lg:max-w-xl mx-auto border">
          {/* Gradient behind teacher image */}
          <div className="absolute inset-0 z-0 flex items-center justify-center ">
            <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-white blur-2xl opacity-70"></div>
          </div>

          {/* PNG Image */}
          <div className="relative z-10">
            <Image
              src={satendar}
              alt="Mathematics Teacher at YPY Pathsala"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 z-20">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>

          {/* Floating Students Card */}
          {/* <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-xl p-4 z-20">
    <div className="text-center">
      <div className="text-2xl font-bold">500+</div>
      <div className="text-sm opacity-90">Students</div>
    </div>
  </div> */}
        </div>



      </div>
    </section>
  );
}

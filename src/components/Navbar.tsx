'use client'  // Required if you're using App Router and this is a client component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/ypylogo.png'; // Make sure the path is correct for your project structure
import Link from 'next/link';
import { useBookDemoModal } from '@/context/BookDemoModalContext';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useBookDemoModal();

  useEffect(() => {
    // Run only on the client
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className="sticky top-0 z-50 px-4 md:px-8 border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur-md"
      style={{ height: isMobile ? '70px' : '90px' }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{ height: isMobile ? '70px' : '90px' }}
      >
        <div className="flex items-center justify-between h-full">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative">
              <Image
                src={logo}
                alt="YPY Pathshala Logo"
                className="transition-all duration-300 hover:scale-110"
                height={isMobile ? 40 : 60}
                width={isMobile ? 40 : 60}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm md:text-xl font-bold text-gray-900 leading-tight">
                YPY PATHSHALA
              </h1>
              <p className="text-xs md:text-sm text-blue-600 font-medium hidden sm:block">
                Excellence in Education
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/Performances" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Performances
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/Gallery" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" onClick={openModal}>
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`w-6 h-6 text-gray-700 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200 mt-2 bg-white">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/Performances" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
            >
              Performances
            </Link>
            <Link 
              href="/Gallery" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
            >
              About
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="px-4 pt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              onClick={openModal}>
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

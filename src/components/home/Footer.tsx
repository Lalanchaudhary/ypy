import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-white via-blue-50 to-purple-50 border-t border-gray-200 text-gray-800 px-6 md:px-16 py-10 mt-20">
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">YPY Pathshala</h2>
          <p className="text-sm text-gray-600">
            Excellence in education for over a decade. Focused on Mathematics, JEE, and CBSE preparation.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              ypy.pathshala@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              +91 98765 43210
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 mt-1" />
              <span>
                Babu Gawn Main Road,<br />
                Hazaribagh, Jharkhand, 825301
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/" className="hover:text-blue-700">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-700">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-blue-700">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-blue-700">Contact</Link></li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Get Our App</h3>
          <p className="text-sm text-gray-700 mb-3">
            Access lectures, tests & performance tracking.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md shadow"
          >
            Download App
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YPY Pathshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

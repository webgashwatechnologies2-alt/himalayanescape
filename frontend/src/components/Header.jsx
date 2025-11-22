import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="mailto:info@himalayanescape.com"
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Mail size={14} />
              <span>info@himalayanescape.com</span>
            </a>
          </div>
          <div className="hidden md:block text-xs">
            <span className="text-teal-400">★ Trusted by 5000+ Travelers</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo.jpg" 
              alt="Himalayan Escape Tour & Travels" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-teal-600 ${
                isActive("/") ? "text-teal-600" : "text-slate-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-teal-600 ${
                isActive("/about") ? "text-teal-600" : "text-slate-700"
              }`}
            >
              About Us
            </Link>

            {/* Packages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPackagesOpen(true)}
              onMouseLeave={() => setPackagesOpen(false)}
            >
              {/* Button */}
              <button className="font-medium text-slate-700 hover:text-teal-600 transition-colors flex items-center gap-1">
                Packages
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    packagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] transition-all duration-150 ${
                  packagesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/packages/himachal"
                  className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                >
                  Himachal Packages
                </Link>

                <Link
                  to="/packages/spiti"
                  className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                >
                  Spiti Packages
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-teal-600 ${
                isActive("/contact") ? "text-teal-600" : "text-slate-700"
              }`}
            >
              Contact
            </Link>

            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`font-medium ${
                  isActive("/") ? "text-teal-600" : "text-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium ${
                  isActive("/about") ? "text-teal-600" : "text-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="font-medium text-slate-700">Packages</div>
              <Link
                to="/packages/himachal"
                className="font-medium text-slate-600 pl-4"
                onClick={() => setIsOpen(false)}
              >
                Himachal Packages
              </Link>
              <Link
                to="/packages/spiti"
                className="font-medium text-slate-600 pl-4"
                onClick={() => setIsOpen(false)}
              >
                Spiti Packages
              </Link>
              <Link
                to="/contact"
                className={`font-medium ${
                  isActive("/contact") ? "text-teal-600" : "text-slate-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setEnquiryModalOpen(true);
                  setIsOpen(false);
                }}
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </header>
  );
};

export default Header;

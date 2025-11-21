import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">HIMALAYAN</span>
              <span className="text-teal-400"> eSCAPE</span>
            </h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              Your trusted partner for unforgettable Himalayan adventures. Explore breathtaking landscapes and create memories that last a lifetime.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Package Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Popular Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/packages/himachal" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Shimla Manali
                </Link>
              </li>
              <li>
                <Link to="/packages/himachal" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Dharamshala McLeodganj
                </Link>
              </li>
              <li>
                <Link to="/packages/himachal" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Kasol Kheerganga
                </Link>
              </li>
              <li>
                <Link to="/packages/spiti" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Spiti Valley
                </Link>
              </li>
              <li>
                <Link to="/packages/spiti" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Kinnaur Spiti
                </Link>
              </li>
              <li>
                <Link to="/packages/spiti" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Chandratal Lake
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  123 Mountain Road, Manali,<br />Himachal Pradesh 175131
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-teal-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-slate-300 hover:text-teal-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:info@himalayanescape.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                  info@himalayanescape.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-slate-400 mb-2">We Accept:</p>
              <div className="flex gap-2">
                <div className="bg-white px-2 py-1 rounded text-xs font-semibold text-slate-900">VISA</div>
                <div className="bg-white px-2 py-1 rounded text-xs font-semibold text-slate-900">MASTERCARD</div>
                <div className="bg-white px-2 py-1 rounded text-xs font-semibold text-slate-900">UPI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-slate-400">
            <p>© 2025 Himalayan Escape. All rights reserved.</p>
            <p>Designed with Gashwa Technologies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
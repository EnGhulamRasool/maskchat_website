// src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-purple-950 to-indigo-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                M
              </div>
              <h1 className="text-3xl font-bold text-white">Mask Chat</h1>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              We're a full-service digital agency helping businesses design, develop, and dominate in the digital space.
              From strategy to execution, we craft tailored solutions that drive growth, elevate brands, and create lasting impact.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                info@themaskchat.com
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" /></svg>
                themaskchat.com
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.344c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm4 11a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" /></svg>
                🇩🇪 +49 6229 9336659
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                Karl-Schmitt-Str 7, 69239 Neckarsteinach, Germany
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            <a href="#" className="hover:text-white mr-6 transition">Terms of Use</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>

          <div className="flex gap-8 text-2xl">
            <a href="#" className="hover:text-white transition">X</a>
            <a href="#" className="hover:text-white transition">f</a>
            <a href="#" className="hover:text-white transition">in</a>
            <a href="#" className="hover:text-white transition">ig</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

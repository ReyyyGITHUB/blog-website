import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E5E7EB] bg-[#F9FAFB] text-slate-700 mt-[120px]">
      {/* upper */}
      <div className="flex flex-col gap-12 px-6 py-10 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* left side */}
          <div className="flex max-w-sm flex-col gap-6">
            <div className="text-2xl font-semibold text-slate-900">
              Logo Website
            </div>
            <div className="flex flex-col gap-2 text-sm leading-6">
              <span className="font-medium text-slate-900">
                example@gmail.com
              </span>
              <span className="font-medium text-slate-900">
                +1 (123)-132-5321
              </span>
            </div>
          </div>

          {/* right side */}
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-800 md:flex-row md:items-center md:gap-8 md:text-base">
            <Link to="/" className="transition-colors hover:text-slate-500">
              Home
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-slate-500"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-slate-500"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-[#E5E7EB] bg-white">
        <div className="flex w-full flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-20">
          <span className="text-sm text-slate-600">
            &copy; 2025 Website Name. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <img
              src="/assets/instagram.svg"
              alt="Instagram"
              className="h-6 w-6 transition-transform hover:-translate-y-0.5"
            />
            <img
              src="/assets/facebook.svg"
              alt="Facebook"
              className="h-6 w-6 transition-transform hover:-translate-y-0.5"
            />
            <img
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              className="h-6 w-6 transition-transform hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

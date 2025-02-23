"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Menu, X } from "lucide-react";
import { HoverBorderGradient } from "./hover-border-gradient";

function NavBar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }, // Add About link
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Experience", path: "/experience" },
    { name: "Resume", path: "/resume" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-transparent text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        {/* Container with right alignment */}
        <div className="flex justify-end items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 text-lg font-semibold">
            {navLinks.map(({ name, path }) => (
              <Link key={name} to={path}>
                <HoverBorderGradient
                  onClick={() => setActiveNav(name)}
                  containerClassName={`transition-colors duration-300 ${
                    activeNav === name ? "border-blue-500" : ""
                  }`}
                  duration={0.8}
                >
                  {name}
                </HoverBorderGradient>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed left-1/2 -translate-x-1/2 top-16 w-[90%] max-w-md bg-black/90 py-4 px-4 space-y-3 text-center rounded-lg">
            {navLinks.map(({ name, path }) => (
              <Link key={name} to={path} onClick={() => setIsMobileMenuOpen(false)}>
                <HoverBorderGradient
                  onClick={() => setActiveNav(name)}
                  containerClassName="w-full"
                  duration={0.8}
                >
                  {name}
                </HoverBorderGradient>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

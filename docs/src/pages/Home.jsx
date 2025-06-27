import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="Home relative min-h-screen w-screen overflow-hidden flex items-center justify-center px-4">
      {/* Rings Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.5, delay: i * 0.3 }}
            className="absolute border border-purple-500/20 rounded-full"
            style={{
              width: `${300 + i * 150}px`, // Adjust for mobile
              height: `${300 + i * 150}px`,
              animation: `spin ${30 + i * 10}s linear infinite ${i * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center relative z-20"
      >
        {/* Background Glow */}
        <div className="absolute -inset-10 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 blur-3xl rounded-full" />

        {/* Title */}
        <h1
          className="relative text-6xl md:text-9xl font-bold font-[Orbitron]
          bg-clip-text text-transparent 
          bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400
          hover:from-indigo-400 hover:via-blue-500 hover:to-purple-400 
          transition-all duration-700 cursor-default select-none"
        >
          Namaste
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="mt-4 md:mt-8 text-lg md:text-xl text-gray-300 font-light tracking-wide"
        >
         <span className="text-yellow-400 text-4xl">Hi, I am Rishi 👨‍🚀</span>
         <br />
         <span>Experience the journey of my cosmic portfolio</span>
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-8 md:mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button
            className="px-6 py-3 md:px-8 md:py-4 rounded-full 
            bg-gradient-to-r from-purple-500 to-blue-500 
            hover:from-blue-500 hover:to-purple-500
            text-white font-medium
            transition-all duration-300
            hover:scale-105
            group relative overflow-hidden"
          >
            <Link to="/about" className="relative z-10 text-sm md:text-base">
              Explore my Cosmic Portfolio
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
        <a
          href="https://github.com/RishiChaubey31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className=" mt-4 text-white" />
        </a>
        <a href="https://www.linkedin.com/in/rishichaubey3105" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className=" mt-4 text-white ml-4 mr-4" />
        </a>
        <a href="https://x.com/cenation_rishi" target="_blank" rel="noopener noreferrer">
          
          <XIcon className=" mt-4 text-white" />
        </a>
      </motion.div>
    </div>
  );
};

export default Home;

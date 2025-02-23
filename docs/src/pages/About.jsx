import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent text-white overflow-hidden p-4">
      {/* Background Stars */}
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover bg-center opacity-50"></div>

      {/* Glowing Nebula Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-80"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-12 mt-20">
        {/* Floating Animated Heading */}
        <motion.h2
          className="relative text-4xl sm:text-5xl md:text-6xl font-bold font-[Orbitron]
          bg-clip-text text-transparent 
          bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400
          hover:from-indigo-400 hover:via-blue-500 hover:to-purple-400 
          transition-all duration-700 cursor-default select-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        {/* Animated Text */}
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-2 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
            I’m <span className="text-blue-400 font-semibold">Rishi</span>, a full-stack developer from <span className="text-blue-400 font-semibold">India</span> who loves crafting unique,
          aesthetic websites that stand out. My focus is on creating visually
          stunning and intuitive user experiences while ensuring smooth
          performance. I have a deep interest in system design and enjoy solving
          complex architectural challenges. I actively contribute to open-source
          projects and thrive in collaborative environments, working seamlessly
          with teams to bring ideas to life. While my strength lies in frontend
          development, I’m continuously improving my backend skills to become a
          more well-rounded developer. With strong communication skills and a
          team-oriented mindset, I aim to build impactful digital experiences
          that push boundaries. 🚀✨
        </motion.p>

        {/* Floating Skills Badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            "Html",
            "CSS",
            "JavaScript",
            "Typescript",
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Tailwind CSS",
          ].map((skill, index) => (
            <motion.span
              key={skill}
              className=" bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 
              hover:from-pink-700 hover:via-purple-800 hover:to-blue-900
              text-white text-xs sm:text-sm 
              transition-all duration-300
              hover:scale-105
              px-3 py-2 rounded-full font-semibold shadow-lg neon-glow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-8 sm:mt-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 
            hover:from-pink-700 hover:via-purple-800 hover:to-blue-900
            text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-lg 
            shadow-lg transition-transform transform hover:scale-110 neon-glow"
          >
            Let's Connect 🌌
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

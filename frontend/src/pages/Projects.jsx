import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Centered heading with top margin */}
      <div className="text-center w-full py-12">
        <h1
          className="relative mt-16 text-6xl md:text-6xl font-bold font-[Orbitron]
            bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400
            hover:from-indigo-400 hover:via-blue-500 hover:to-purple-400 
            transition-all duration-700 cursor-default select-none"
        >
          Projects
        </h1>
      </div>

      {/* Centered content container */}
      <div className="w-full max-w-7xl px-4 mx-auto">
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
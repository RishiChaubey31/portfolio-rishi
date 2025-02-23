import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ 
  title = "Project Title",
  description = "A fascinating project that explores the depths of technology and innovation.",
  tags = ["React", "Node.js", "TypeScript"],
  imageUrl = "/api/placeholder/400/200",
  githubUrl = "#",
  liveUrl = "#",
  index = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1, // Stagger effect
        ease: [0.43, 0.13, 0.23, 0.96] // Custom easing
      }}
      className="group relative w-full max-w-xs bg-transparent from-slate-900 to-slate-800 text-white overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(128, 0, 128, 0.3)" }}
    >
        
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 " />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: "1.5s"
            }}
          />
        ))}
      </div>
      <div className="relative h-36 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
      </div>
      <div className="relative p-4 space-y-2">
        <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {title}
        </h3>
        <p className="text-slate-300 text-xs line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-[10px] rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-1">
          <a href={githubUrl} className="flex items-center gap-1 text-xs text-slate-300 hover:text-purple-400 transition-colors">
            <Github size={14} />
            <span>Code</span>
          </a>
          <a href={liveUrl} className="flex items-center gap-1 text-xs text-slate-300 hover:text-purple-400 transition-colors">
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ExampleUsage = () => {
  const projects = [
    { title: "Harmony Invites", description: "A modern and elegant event invitation platform.", tags: ["HTML", "CSS", "Vanilla JS"], imageUrl: "./harmonyInvites.png", githubUrl: "https://github.com/RishiChaubey31/CelebRare-task", liveUrl: "https://celeb-rare-task.vercel.app/" },
    { title: "ReferEase", description: "A frontend for a referral management system.", tags: ["React", "Tailwind CSS", "Material-UI"], imageUrl: "./referease.png", githubUrl: "https://github.com/RishiChaubey31/ReferEase", liveUrl: "https://refer-ease.vercel.app/" },
    { title: "Chore Trekker", description: "A full stack project to manage your task.", tags: ["Html","CSS","Vanilla JS","MongoDB","Express JS"], imageUrl: "./choretrekker.png", githubUrl: "https://github.com/RishiChaubey31/ChoreTrekker", liveUrl: "yet to be deployed" },
    { title: "Lift Simulation", description: "A real life lift simulator.", tags: ["HTML", "CSS", "Vanilla JS"], imageUrl: "./liftsimulation.png", githubUrl: "https://github.com/RishiChaubey31/lift-simulation", liveUrl: "https://lift-simulation-nine-roan.vercel.app/" },
    { title: "Xtrendz", description: "scraps top trending news from X and displays on page automatically.", tags: ["HTML","Selenium Script"], imageUrl: "./xtrendz.png", githubUrl: "https://github.com/RishiChaubey31/Xtrendz", liveUrl: "https://xtrendz.vercel.app/" },
    // { title: "", description: "A minimalistic blogging platform with Markdown support.", tags: ["Next.js", "MongoDB", "Tailwind CSS"], imageUrl: "./blogging.png", githubUrl: "https://github.com/RishiChaubey31/BloggingPlatform", liveUrl: "https://blog-rishi.vercel.app/" }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </motion.div>
  );
};

export default ExampleUsage;

<style jsx>{`
  @keyframes twinkle {
    0% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 0.2; transform: scale(1); }
  }
  .animate-twinkle {
    animation: twinkle 1.5s infinite ease-in-out;
  }
`}</style>
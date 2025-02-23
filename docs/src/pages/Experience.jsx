import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Experience = () => {
  const contributions = [
    {
      title: "Role-Based User Mentions",
      description:
        "Implemented dynamic role-based mentions in the Real Dev Squad Discord bot, improving user interactions.",
      githubUrl: "https://github.com/Real-Dev-Squad/discord-slash-commands/pull/280/",
      tags: ["TypeScript", "Firebase", "Cloudflare Workers"],
    },
    {
      title: "Created modal to acknowledge user about their task status",
      description:
        "Resolved an issue with incorrect flag parsing, ensuring seamless bot responses.",
      githubUrl: "https://github.com/Real-Dev-Squad/website-status/pull/1322/",
      tags: ["TypeScript", "Jest", "Unit Testing", "React"],
    },
  ];

  return (
    <div className="p-6 w-full ">
      <div className="text-center w-full py-12">
        <h1
          className="relative text-6xl md:text-6xl font-bold font-[Orbitron]
            bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400
            hover:from-indigo-400 hover:via-blue-500 hover:to-purple-400 
            transition-all duration-700 cursor-default select-none"
        >
          Experience
        </h1>
      </div>
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg mt-4">
        <motion.div
          className="text-center text-purple-400 text-xl font-semibold mb-2 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Open Source Contributor at Real Dev Squad
          <a className="flex text-center justify-center"
            href="https://realdevsquad.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./rds.png"
              alt="Description"
              class="w-48 h-40 "
            />
          </a>
        </motion.div>
        <p className="text-slate-300 text-center mb-6">
          Contributing to improving the Real Dev Squad Discord bot with new
          features and optimizations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-purple-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg font-semibold text-purple-300">
                {item.title}
              </h4>
              <p className="text-slate-300">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.githubUrl}
                className="flex items-center text-sm text-purple-400 mt-3 hover:text-purple-300 transition-colors"
              >
                <Github size={16} className="mr-1" /> View Contribution
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

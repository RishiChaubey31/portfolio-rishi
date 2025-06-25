import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Experience = () => {
  const contributions = [
    {
      title: "Role-Based User Mentions",
      description:
        "Implemented dynamic role-based mentions in the Real Dev Squad Discord bot, improving user interactions, and implemented feature flag and wrote unit test for it",
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
    {
      title: "Ember JS to React JS Migration",
      description:
        "Migrated the Task Status dropdown component from Ember JS to React JS, enhancing the user interface and functionality.",
      githubUrl: "https://github.com/Real-Dev-Squad/website-status/pull/1341",
      tags: ["TypeScript", "Jest", "Unit Testing", "React","next.js",'RTK Query','moment js', 'react-hook-form', 'react-toastify','stacking PRs'],
    },
     {
      title: "Ember JS to React JS Migration",
      description:
        "Migrated the Extension Request button and modal component from Ember JS to react JS and added some of my own creativity to it to enhance UI.",
      githubUrl: "https://github.com/Real-Dev-Squad/website-status/pull/1347",
      tags: ["TypeScript", "Jest", "Unit Testing", "React","next.js",'RTK Query','moment js', 'react-hook-form', 'react-toastify','stacking PRs'],
    },
      {
      title: "Ember JS to React JS Migration",
      description:
        "Migrated the Extension Request Form from Ember JS to React JS, ensuring a user can fill the form with new dates and reason for extension and submit it.",
      githubUrl: "https://github.com/Real-Dev-Squad/website-status/pull/1353",
      tags: ["TypeScript", "Jest", "Unit Testing", "React","next.js",'RTK Query','moment js', 'react-hook-form', 'react-toastify','stacking PRs'],
    },
      {
      title: "E2E Testing Environment Setup using Playwright",
      description:
        "Setup the e2e testing environment ",
      githubUrl: "https://github.com/Real-Dev-Squad/FMP-Web-UI/pull/10",
      tags: ["TypeScript", "Playwright","tanstack router",],
    },
     {
      title: "Setup ShadCN UI in the RDS fund management portal",
      description:
        "ShadCn UI is a component library that provides a set of pre-designed components for building user interfaces in React applications. It is built on top of Tailwind CSS and provides a set of customizable components that can be easily integrated into your application.",
      githubUrl: "https://github.com/Real-Dev-Squad/FMP-Web-UI/pull/14",
      tags: ["TypeScript", "Playwright","tanstack router",],
    },
     {
      title: "Create DashBoard for the university view in the RDS fund management portal",
      description:
        "Created a dashboard for the university view in the RDS fund management portal, allowing universities to view their fund requests and status. Created different charts and tables to display the data in a user-friendly manner.",
      githubUrl: "https://github.com/Real-Dev-Squad/FMP-Web-UI/pull/29",
      tags: ["TypeScript", "Playwright","tanstack router","rechart.js","react-table","shadcn ui","lucide-react","react js"],
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
              className="w-48 h-40 "
            />
          </a>
        </motion.div>
        <p className="text-slate-300 text-center mb-6">
          Contributing to open source projects has been a transformative experience for me. It has not only enhanced my technical skills but also allowed me to collaborate with talented developers from around the world. Here are some of my contributions:
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

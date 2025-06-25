import { Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section className="w-full px-6 py-12 bg-transparent text-white">
      <div className="max-w-4xl mx-auto text-center mt-8">
        <h2 className="text-3xl font-bold text-purple-400">Resume</h2>
        <p className="mt-2 text-gray-400">Download my resume or explore my experience and skills below.</p>
        <div className="mt-2">
          <a
            href="/rishiresume2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-500 transition-all"
          >
            <Download size={18} /> Open Resume
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <h3 className="text-2xl font-semibold text-purple-300">Experience</h3>
        <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-white">RealDevSquad Contributor</h4>
          <p className="text-gray-400 mt-1">Contributed to open-source projects by implementing features and fixing bugs.</p>
          <ul className="mt-2 list-disc list-inside text-gray-300">
            <li>Implemented feature X for improving user experience.</li>
            <li>Fixed bug Y to enhance platform stability.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <h3 className="text-2xl font-semibold text-purple-300">Skills</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {["JavaScript", "React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"].map(skill => (
            <div key={skill} className="bg-gray-800 p-3 rounded-lg text-white font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

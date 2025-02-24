import React, { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@your_username")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.items.slice(0, 5)); // Show only the latest 5 blogs
      })
      .catch((error) => console.error("Error fetching Medium blogs:", error));
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-12 bg-black min-h-screen">
      {/* Heading with a cosmic glow effect */}
      <h1
        className="relative text-6xl md:text-6xl font-bold font-[Orbitron]
          text-transparent bg-clip-text
          bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400
          hover:from-indigo-400 hover:via-blue-500 hover:to-purple-400 
          transition-all duration-700 cursor-default select-none mt-8 "
      >
        Blogs
      </h1>

      <div className="w-full max-w-4xl mt-8 space-y-6">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl transition-transform transform hover:scale-105
                         hover:bg-white/20 hover:shadow-neon border border-white/20"
            >
              <h2 className="text-2xl font-bold text-purple-300">
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  {blog.title}
                </a>
              </h2>
              <p className="text-gray-400 mt-2">{new Date(blog.pubDate).toDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-300 text-lg">Loading blogs...</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;

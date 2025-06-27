import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { SparklesCore } from "./components/Sparkles";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";

// Define images with sound mappings
const images = [
  { src: "/spacemen.png", sound: "/hello1.mp3" },
  { src: "/spacemen.png", sound: "/hello2.mp3" },
  // { src: "/planet-1.png", sound: "/jadu.mp3" },
  { src: "/planet-2.png", sound: "/jadu.mp3" },
  { src: "/planet-3.png", sound: "/jadu.mp3" },
  { src: "/planet-4.png", sound: "/jadu.mp3" },
  { src: "/asteroid.png", sound: "/asteroid.mp3" },
  { src: "/asteroid.png", sound: "/asteroid.mp3" },
  { src: "/asteroid.png", sound: "/asteroid.mp3" },
  { src: "/asteroid.png", sound: "/asteroid.mp3" },
];

function App() {
  useEffect(() => {
    const floatingContainer = document.querySelector(".floating-image-container");
    if (!floatingContainer) return;

    floatingContainer.innerHTML = ""; // Clear previous images

    // Check if the device is mobile
    const isMobile = window.innerWidth < 768;

    const filteredImages = isMobile
      ? images.filter(({ src }) => src.includes("spacemen.png")) // Keep only astronaut on mobile
      : images; // Keep all images on desktop

    const imgElements = filteredImages.map(({ src, sound }) => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "floatingImage";
      img.style.position = "absolute";
      img.style.cursor = "pointer";
      img.style.pointerEvents = "auto";

      img.style.width = src.includes("spacemen.png") ? "50px" : "200px"; // Adjust size
      img.style.width = src.includes("asteroid.png") || src.includes("spacemen.png") ? "50px" : "200px";

      // **🔊 Play sound on click**
      img.addEventListener("click", () => {
        const audio = new Audio(sound);
        audio.play();
      });

      floatingContainer.appendChild(img);
      return {
        img,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      };
    });

    function animate() {
      imgElements.forEach((obj) => {
        let { img, x, y, dx, dy } = obj;

        x += dx;
        y += dy;

        const imgWidth = img.clientWidth || 100;
        const imgHeight = img.clientHeight || 100;

        if (x + imgWidth >= window.innerWidth || x <= 0) obj.dx *= -1;
        if (y + imgHeight >= window.innerHeight || y <= 0) obj.dy *= -1;

        img.style.transform = `translate(${x}px, ${y}px)`;

        obj.x = x;
        obj.y = y;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <SparklesCore
      background="#000000"
      particleColor="#ffffff"
      particleDensity={100}
      speed={2}
      minSize={0.6}
      maxSize={1.4}
    >
      {/* Floating Image Container - Always Present */}
      <div className="floating-image-container"></div>

      {/* Main Content */}
      <div className="main-content">
        {/* <img
          src="/signature.png"
          alt="Space Background"
          className="absolute top-0 left-0 w-auto h-auto"
        /> */}

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </div>
    </SparklesCore>
  );
}

export default App;

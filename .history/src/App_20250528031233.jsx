import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Github, Linkedin } from "lucide-react";
import mojahidul from "./image/mojahidul.jpg";
import CollegeLogo from "./image/CollegeLogo.png";
import plogo from "./image/plogo.jpg";
// import StudyHive from "./image/StudyHivePNG.png";
// import CrowdFunding from "./image/CrowdFunding.png";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaStripe,
  FaLinkedinIn,
  FaExternalLinkAlt
} from 'react-icons/fa';

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiJsonwebtokens,
  SiFirebase
} from 'react-icons/si';

import {
  MdGroups,
  MdAccessTime,
  MdAutoFixHigh,
  MdOutlineDiversity3,
  MdPsychology,
  MdOutlineLeaderboard
} from 'react-icons/md';

import { TbTargetArrow } from 'react-icons/tb';
import { Menu, X } from 'lucide-react';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider text-gray-800">Mojahidul Islam</h1>
          <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium text-gray-800">
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-gray-800 font-medium bg-white/70 backdrop-blur-md shadow-md">
            <a href="#about" className="block hover:text-blue-500 transition">About</a>
            <a href="#skills" className="block hover:text-blue-500 transition">Skills</a>
            <a href="#projects" className="block hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="block hover:text-blue-500 transition">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-slate-400 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12"
        data-aos="zoom-in"
      >
        {/* Left - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Hi, I'm <span className="text-black">Md Mojahidul Islam</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl max-w-xl">
            A Web Developer passionate about building modern and responsive web applications using React, Node.js, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-100 transition"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf" // Replace with actual resume file path in public folder
              download
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>

          {/* GitHub and LinkedIn Icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <a href="https://github.com/hrobin485" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-3xl hover:text-gray-300 transition" />
            </a>
            <a href="https://www.linkedin.com/in/mojahidul-islam143/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white text-3xl hover:text-gray-300 transition" />
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={mojahidul} 
            alt="Your Portrait"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </section>




      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-700">
            I’m a dedicated full-stack developer focused on crafting clean and user-friendly experiences. I’m always eager to learn and improve, with a strong focus on building applications that are fast, accessible, and scalable.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">My Skills</h2>

          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {[
                { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
                { name: "React.js", icon: <FaReact className="text-blue-400 text-2xl" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-800 text-2xl" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-2xl" /> },
                { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
                { name: "GitHub", icon: <FaGithub className="text-black text-2xl" /> },
                { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500 text-2xl" /> },
                { name: "REST API", icon: <TbTargetArrow className="text-blue-600 text-2xl" /> },
                { name: "Stripe", icon: <FaStripe className="text-indigo-500 text-2xl" /> },
                { name: "Postman", icon: <SiPostman className="text-orange-400 text-2xl" /> },
              ].map(skill => (
                <div key={skill.name} className="bg-white shadow rounded-lg p-2 text-center hover:bg-blue-100 transition">
                  <div className="mb-1 flex justify-center">{skill.icon}</div>
                  <p className="text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interpersonal Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">Interpersonal Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { name: "Team Collaboration", icon: <MdGroups className="text-purple-500 text-2xl" /> },
                { name: "Problem Solving", icon: <MdPsychology className="text-yellow-600 text-2xl" /> },
                { name: "Time Management", icon: <MdAccessTime className="text-indigo-500 text-2xl" /> },
                { name: "Adaptability", icon: <MdOutlineDiversity3 className="text-green-500 text-2xl" /> },
                { name: "Critical Thinking", icon: <MdAutoFixHigh className="text-pink-500 text-2xl" /> },
                { name: "Communication", icon: <MdGroups className="text-sky-600 text-2xl" /> },
                { name: "Attention to Detail", icon: <TbTargetArrow className="text-red-500 text-2xl" /> },
                { name: "Leadership", icon: <MdOutlineLeaderboard className="text-blue-600 text-2xl" /> },
              ].map(skill => (
                <div key={skill.name} className="bg-white shadow rounded-lg p-2 text-center hover:bg-blue-100 transition">
                  <div className="mb-1 flex justify-center">{skill.icon}</div>
                  <p className="text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}

      <section id="projects" className="py-20 bg-slate-300 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-white">My Projects</h2>

          <div className="space-y-12">
            {/* Project: StudyHive */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl group flex flex-col md:flex-row w-full">
              {/* Left Side: Project Info */}
              <div className="p-8 flex-1 text-left flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-blue-600 group-hover:text-blue-800 transition-all">
                  <a
                    href="https://study-hive-80e6f.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    StudyHive – Online Group Study Platform
                  </a>
                </h3>

                <p className="text-gray-700 mb-4 opacity-90 group-hover:opacity-100 transition-all duration-300">
                  A platform for students to create or join study groups, submit assignments, and get feedback from peers and instructors.
                </p>

                <p className="text-sm text-gray-500 mb-3">
                  <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, JWT
                </p>

                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>Email/Google login with JWT authentication</li>
                  <li>Create, submit, and grade assignments (role-based)</li>
                  <li>Light/Dark theme toggle</li>
                </ul>

                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-sm font-medium">
                  <a
                    href="https://study-hive-80e6f.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline group-hover:text-blue-800"
                  >
                    🔗 Live Site
                  </a>
                  <a
                    href="https://github.com/hrobin485/A-11-Client-Study-hive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline group-hover:text-blue-800"
                  >
                    💻 Client Code
                  </a>
                  <a
                    href="https://github.com/hrobin485/A-11-server-study-hive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline group-hover:text-blue-800"
                  >
                    🖥️ Server Code
                  </a>
                </div>
              </div>

              {/* Right Side: Web Preview Image */}
              <div className="flex-1 p-7">
                <img
                  // src={StudyHive}
                  alt="StudyHive Preview"
                  className="w-full h-full rounded-l-none rounded-r-2xl md:rounded-l-2xl md:rounded-r-none shadow-md transition-transform transform group-hover:scale-105"
                />
              </div>
            </div>

            {/* Project: CrowdFunding */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl group flex flex-col md:flex-row w-full">
              {/* Left Side: Project Info */}
              <div className="p-8 flex-1 text-left flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-blue-600 group-hover:text-blue-800 transition-all">
                  <a
                    href="https://winter-clothing-donation-9b03b.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    CrowdFunding – Donation-Based Campaign Platform
                  </a>
                </h3>

                <p className="text-gray-700 mb-4 opacity-90 group-hover:opacity-100 transition-all duration-300">
                  A responsive web application where users can create fundraising campaigns and donate to others.
                </p>

                <p className="text-sm text-gray-500 mb-3">
                  <strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, JWT
                </p>

                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>Donate to active campaigns</li>
                  <li>Private routes with JWT protection</li>
                  <li>Campaign sorting and dark/light theme toggle</li>
                </ul>

                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-sm font-medium">
                  <a
                    href="https://winter-clothing-donation-9b03b.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline group-hover:text-blue-800"
                  >
                    🔗 Live Site
                  </a>
                  <a
                    href="https://github.com/hrobin485/A-10-client-crowd-funding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline group-hover:text-blue-800"
                  >
                    💻 Client Code
                  </a>
                  <a
                    href="https://github.com/hrobin485/A-10-server-crowd-funding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline group-hover:text-blue-800"
                  >
                    🖥️ Server Code
                  </a>
                </div>
              </div>

              {/* Right Side: Web Preview Image */}
              <div className="flex-1 p-7">
                <img
                  // src={CrowdFunding}
                  alt="CrowdFunding Preview"
                  className="w-full h-full  rounded-l-none rounded-r-2xl md:rounded-l-2xl md:rounded-r-none shadow-md transition-transform transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Course Section */}
      <section id="education" className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">Education & Courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Education Block with Logo */}
            <div className="bg-gray-100 rounded-lg p-6 shadow hover:bg-blue-50 transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={CollegeLogo} 
                  alt="Rajshahi College Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Mathematics</h3>
                  <p className="text-sm text-gray-600">
                    Rajshahi College, Rajshahi — <span className="italic">2017 - 2022</span>
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Covered foundational topics in Mathematics along with Computer Science-related electives such as Data Structures and Programming.
              </p>
            </div>

            {/* Course Block with Programming Hero Logo */}
            <div className="bg-gray-100 rounded-lg p-6 shadow hover:bg-blue-50 transition">
              <div className="flex items-center gap-4 mb-4 ">
                <img
                  src={plogo}
                  alt="Programming Hero Logo"
                  className="w-12 h-12 object-contain "
                />
                <div>
                  <h3 className="text-xl font-semibold">Complete Web Development</h3>
                  <p className="text-sm text-gray-600">
                    Programming Hero — <span className="italic">2024</span>
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Hands-on training with MERN Stack: MongoDB, Express, React, Node.js. Built several full-stack applications with real-world features.
              </p>
              <a
                href="https://drive.google.com/file/d/1Rnw5KQG5WvZxjorRD_H8TR2Gz_7aq10C/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                View Certificate <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>

          </div>
        </div>
      </section>







      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h2>
          <p className="text-lg mb-10 text-gray-600">Let’s work together! Feel free to reach out via email or social platforms.</p>

          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition mb-6"
          >
            <Mail size={20} />
            hrobin485@gmail.com
          </a>
          <h3>Mobile: +8801797690296</h3>

          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/hrobin485" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/mojahidul-islam143/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
              <Linkedin size={28} />
            </a>
          </div>

          {/* Optional Contact Form */}
          <form className="mt-10 max-w-xl mx-auto text-left space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" required />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md" required />
            <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded-md" required />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Left Side */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; 2025 Mojahidul Islam. All rights reserved.</p>
            
          </div>

          {/* Center - Quick Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/hrobin485" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mojahidul-islam143/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <div className="mt-6 text-center">
          <a href="#top" className="text-blue-400 hover:text-blue-600 transition">Back to Top ↑</a>
        </div>
      </footer>

    </div>
  );
}

export default App;

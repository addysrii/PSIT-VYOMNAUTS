import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, X } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';
import Navbar from './Navbar';

const NewLanding = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const { scrollY } = useScroll();

  // Parallax transforms for sections
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const achievementsY = useTransform(scrollY, [0, 500], [0, -50]);
  const projectsY = useTransform(scrollY, [500, 1000], [0, -50]);
  const eventsY = useTransform(scrollY, [1000, 1500], [0, -50]);

  // Data for sections
  const achievements = [
    {
      title: "Global Recognition",
      description: "Awarded Space Innovation Prize 2024",
      icon: "🏆",
      stats: "150+ Countries"
    },
    {
      title: "Research Impact",
      description: "Published groundbreaking quantum propulsion study",
      icon: "🚀",
      stats: "200+ Citations"
    },
    {
      title: "Sustainable Space",
      description: "Pioneering green space technology",
      icon: "🌍",
      stats: "90% Reduction"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Project Nova",
      description: "Revolutionizing space travel with quantum propulsion technology. Our flagship initiative combines advanced physics with cutting-edge engineering to make interstellar travel a reality.",
      videoUrl: "/videos/nova-project.mp4",
      thumbnail: "/api/placeholder/640/360",
      stats: {
        completion: "75%",
        team: "42 Scientists",
        duration: "3 Years"
      },
      techStack: ["Quantum Computing", "AI Navigation", "Fusion Drive"]
    },
    {
      id: 2,
      title: "EcoSphere Development",
      description: "Creating sustainable habitats for long-term space colonization. This project integrates advanced life support systems with renewable resource management.",
      videoUrl: "/videos/eco-sphere.mp4",
      thumbnail: "/api/placeholder/640/360",
      stats: {
        completion: "60%",
        team: "35 Engineers",
        duration: "4 Years"
      },
      techStack: ["Bioengineering", "Climate Control", "Resource Recycling"]
    },
    {
      id: 3,
      title: "StarBridge Platform",
      description: "Developing instantaneous interstellar communication systems using quantum entanglement principles. Breaking the light-speed barrier for data transmission.",
      videoUrl: "/videos/starbridge.mp4",
      thumbnail: "/api/placeholder/640/360",
      stats: {
        completion: "85%",
        team: "28 Engineers",
        duration: "2 Years"
      },
      techStack: ["Quantum Entanglement", "Neural Networks", "Satellite Systems"]
    }
  ];

  const events = [
    {
      title: "Space Tech Summit 2025",
      date: "June 15-17, 2025",
      description: "Global conference featuring leading space technology innovations",
      location: "Virtual & Houston, TX"
    },
    {
      title: "Quantum Navigation Workshop",
      date: "August 23, 2025",
      description: "Hands-on workshop on quantum navigation systems",
      location: "Tokyo, Japan"
    },
    {
      title: "Mars Mission Launch",
      date: "October 1, 2025",
      description: "Historic launch of our first Mars habitat module",
      location: "Cape Canaveral, FL"
    }
  ];

  const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
    >
      {/* Video Section */}
      <div 
        className="relative h-64 cursor-pointer group"
        onClick={() => setActiveVideo(project.id)}
      >
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-16 h-16 text-white" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm text-gray-400 mb-2">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <p className="text-purple-300 text-xl font-bold mb-1">{value}</p>
              <p className="text-gray-400 text-sm capitalize">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <ParallaxBackground>
      <div className="relative">
        <Navbar />

        {/* Hero Section */}
        <motion.section 
          style={{ y: headerY }}
          className="min-h-screen flex items-center justify-center px-4 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold text-white mb-6"
            >
              Exploring the Future of Space Technology
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Pioneering innovations in space exploration and sustainable space habitation
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg transition-colors"
            >
              Discover Our Projects
            </motion.button>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          style={{ y: achievementsY }}
          className="min-h-screen px-8 py-16 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <p className="text-purple-300 font-bold">{achievement.stats}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          style={{ y: projectsY }}
          className="min-h-screen px-8 py-16 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Video Modal */}
          {activeVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            >
              <div className="relative w-full max-w-4xl">
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-purple-300"
                >
                  <X className="w-8 h-8" />
                </button>
                <video 
                  autoPlay 
                  controls 
                  className="w-full rounded-lg"
                  src={projects.find(p => p.id === activeVideo)?.videoUrl}
                />
              </div>
            </motion.div>
          )}
        </motion.section>

        {/* Events Section */}
        <motion.section 
          style={{ y: eventsY }}
          className="min-h-screen px-8 py-16 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-purple-300 mb-2">{event.date}</p>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <p className="text-sm text-gray-400">{event.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="relative z-10 bg-black/80 backdrop-blur-lg text-white py-12">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">info@spacetech.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-300">123 Space Street</p>
              <p className="text-gray-300">Houston, TX 77001</p>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxBackground>
  );
};

export default NewLanding;
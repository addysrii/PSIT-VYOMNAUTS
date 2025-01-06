import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import img1 from "./assets/space1.jpg";
import img2 from "./assets/space4.jpg";
import img3 from "./assets/space3.jpg";
import Navbar from './Navbar';
import Description from './Description';

const LandingPage = () => {
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();

  // Parallax effects for each section
  const achievementsY = useTransform(scrollY, [0, 500], [0, -50]);
  const projectsY = useTransform(scrollY, [500, 1000], [0, -50]);
  const eventsY = useTransform(scrollY, [1000, 1500], [0, -50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const achievements = [
    { title: "Innovation Award 2024", description: "Recognition for breakthrough technology" },
    { title: "Global Expansion", description: "Successfully launched in 15 new markets" },
    { title: "Sustainability Goal", description: "Achieved carbon neutrality across operations" }
  ];

  const projects = [
    { title: "Project Nova", description: "Next-generation space exploration initiative" },
    { title: "EcoSphere", description: "Sustainable habitat development program" },
    { title: "StarBridge", description: "Interstellar communication platform" }
  ];

  const events = [
    { title: "Space Tech Summit", date: "June 2025", description: "Annual technology conference" },
    { title: "Innovation Workshop", date: "August 2025", description: "Hands-on learning experience" },
    { title: "Launch Event", date: "October 2025", description: "New mission announcement" }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-screen">
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentImageIndex}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.7, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1 },
              scale: {
                duration: 20,
                ease: "linear",
                repeat: 0,
              }
            }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Description />

        {/* Achievements Section */}
        <motion.section 
          style={{ y: achievementsY }}
          className="min-h-screen px-8 py-32 bg-black/60 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          style={{ y: projectsY }}
          className="min-h-screen px-8 py-16 bg-black/70 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Events Section */}
        <motion.section 
          style={{ y: eventsY }}
          className="min-h-screen px-8 py-16 bg-black/60 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-purple-300 mb-4">{event.date}</p>
                <p className="text-gray-300">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="relative z-10 bg-black/80 backdrop-blur-lg text-white py-12">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">info@company.com</p>
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
              <p className="text-gray-300">Universe City, Galaxy 12345</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
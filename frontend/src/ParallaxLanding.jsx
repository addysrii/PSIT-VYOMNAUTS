import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import img2 from "./assets/space2.webp";
import img3 from "./assets/space1.jpg";
import img1 from "./assets/space3.jpg";
import img4 from "./assets/space3.webp";
import Description from './Description';
import pimg1 from "./assets/s2.jpg"
import pimg2 from"./assets/trishul.jpeg"
import {motion} from "framer-motion"
import Navbar from './Navbar';

const ParallaxLanding = () => {
  const ref = useRef();

  const achievements = [
    { title: "Innovation Award 2024", description: "Recognition for breakthrough technology" },
    { title: "Global Expansion", description: "Successfully launched in 15 new markets" },
    { title: "Sustainability Goal", description: "Achieved carbon neutrality across operations" }
  ];

  const projects = [
    { title: "CanSat 2023-24 ", description: "The CANSAT India competition is a nationally recognized event organized by the Astronautical Society of India (ASI), designed to challenge student teams to design, build, and launch miniaturized satellites known as CANSATs. These small devices, roughly the size of a soft drink can, simulate real satellite missions by performing tasks like data collection, telemetry transmission, and recovery. The competition provides hands-on experience in aerospace engineering, programming, and electronics, mirroring the challenges faced in real-world space missions. ",
    image : `${pimg1}`
    },
    { title: "Rocketry 2024-25 ", description: "The 2024-25 rocketry competition marks a historic moment as the first-ever rocket competition to be held in India, and we are thrilled to be part of it as Team Sudarshan. Our team has been working tirelessly to prepare for this prestigious event, and we are proud to present our rocket, Trishul, a highly engineered and innovative design aimed at showcasing our expertise in rocketry. This competition is an exciting opportunity to demonstrate our skills in rocket design, propulsion, and launch techniques, and we are eager to make our mark in this groundbreaking event. ",
            image : `${pimg2}`
    },
    { title: "Vaman", description: "As part of our space club, PSIT Vyomnauts, we are thrilled to embark on an exciting project to develop Vaman, our version of the renowned Cheetah Robot. Inspired by the pioneering work done by MIT, Vaman is designed to exhibit agility, speed, and dynamic movements akin to a real cheetah, making it a formidable engineering and robotics challenge. . Our team is dedicated to mastering the intricate technical aspects of building a robot capable of advanced movement and precise control. From mechanical design and fabrication to electronics and AI-driven programming, Vaman will push our technical expertise to new height" }
  ];

  const events = [
    { title: "Space Tech Summit", date: "June 2025", description: "Annual technology conference" },
    { title: "Innovation Workshop", date: "August 2025", description: "Hands-on learning experience" },
    { title: "Launch Event", date: "October 2025", description: "New mission announcement" }
  ];

  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}>
      <Parallax pages={4} ref={ref}>
        {/* First Background Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2.5}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Second Background Layer */}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={2.5}
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Third Background Layer */}
        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <ParallaxLayer
          offset={3}
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Smooth transition overlays */}
        <ParallaxLayer
          offset={1.3}
          speed={0.1}
          factor={0.7}
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8), rgba(0,0,0,0))',
          }}
        />

        <ParallaxLayer
          offset={2.3}
          speed={0.1}
          factor={0.7}
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8), rgba(0,0,0,0))',
          }}
        />

        {/* Rest of the content remains same */}
        {/* Navigation */}
        <ParallaxLayer
          sticky={{ start: 0, end: 4 }}
          style={{ zIndex: 100 }}
        >
          <nav className="p-4 bg-black/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <span className="text-white text-xl font-bold">SpaceCompany</span>
              <div className="flex gap-6">
                <button onClick={() => ref.current.scrollTo(0)} className="text-white hover:text-purple-300">Home</button>
                <button onClick={() => ref.current.scrollTo(1)} className="text-white hover:text-purple-300">Achievements</button>
                <button onClick={() => ref.current.scrollTo(2)} className="text-white hover:text-purple-300">Projects</button>
                <button onClick={() => ref.current.scrollTo(3)} className="text-white hover:text-purple-300">Events</button>
              </div>
            </div>
          </nav>
       
        </ParallaxLayer>

        <ParallaxLayer
  offset={0}
  speed={0.8}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <div className="text-center text-white">
    <motion.div
      className="max-w-7xl mx-auto px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-black/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="p-8 lg:p-12">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vyomnauts: Explorers of the Cosmos
          </motion.h1>

          <motion.div
            className="space-y-6 text-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl lg:text-2xl leading-relaxed">
              Welcome to PSIT Vyomnauts, where curiosity meets the cosmos. We are more than just a space club – we are a community of dreamers, innovators, and future space pioneers.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-purple-400">Our Mission</h2>
                <p className="text-lg">
                  To ignite passion for space exploration, foster innovation in aerospace technology, and create the next generation of space scientists and engineers.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pink-400">What We Offer</h2>
                <ul className="text-lg space-y-2">
                  <li>🔭 Advanced astronomical observations</li>
                  <li>🚀 Hands-on rocketry workshops</li>
                  <li>💫 Space science symposiums</li>
                  <li>🛰️ Satellite tracking projects</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
</ParallaxLayer>


        {/* Floating Astronaut */}
        {/* <ParallaxLayer
          sticky={{ start: 0.5, end: 2.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none'
          }}
        >
          <img src={img1} alt="Floating astronaut" style={{ width: '128px', height: '128px' }} />
        </ParallaxLayer> */}

        {/* Achievements Section */}
        <ParallaxLayer
          offset={1}
          speed={1.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>

        {/* Projects Section */}
        <ParallaxLayer
  offset={2}
  speed={1.5}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'linear-gradient(45deg, #090909 0%, #1a1a1a 100%)',
    // boxShadow: 'inset 0 0 100px rgba(0,0,0,0.9)'
  }}
>
  <div className="max-w-6xl mx-auto px-8 py-16">
    <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Projects</h2>
    <div className="grid md:grid-cols-1 gap-12">
      {projects.map((project) => (
        <div key={project.title} className="bg-black/60 backdrop-blur-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Title and Image */}
            <div className="w-full md:w-1/2 p-8 relative">
              <div className="aspect-video rounded-lg overflow-hidden  ">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full "
                />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 relative">
                {project.title}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-8 bg-pink-500"></div>
              </h3>
            </div>
            
            {/* Right side - Description */}
            <div className="w-full md:w-1/2 p-8 bg-black/40">
              <p className="text-pink-300 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 rounded-full bg-pink-500/50 text-pink-300 hover:bg-pink-500/30 transition-colors">
                  Learn More
                </button>
                <button className="px-6 py-2 rounded-full bg-purple-500/50 text-purple-300 hover:bg-purple-500/30 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</ParallaxLayer>

        {/* Events Section */}
        <ParallaxLayer
          offset={3}
          speed={1.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => ref.current.scrollTo(0)}
        >
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.title} className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-purple-300 mb-4">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxLanding;
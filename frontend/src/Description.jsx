import React from 'react';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-fixed py-12" style={{ backgroundImage: 'url("/your-bg-image.jpg")' }}>
      <div className="absolute inset-0 bg-black/50" /> 
      
      <motion.div 
        className="max-w-7xl mx-auto  relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
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
  );
};

export default Description;
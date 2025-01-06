import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Sun } from 'lucide-react';

const ParallaxBackground = ({ children }) => {
  const { scrollY } = useScroll();
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);
  const [nebulae, setNebulae] = useState([]);
  const [asteroids, setAsteroids] = useState([]);

  // Enhanced parallax effects
  const bgY = useTransform(scrollY, [0, 3000], [0, -300]);
  const starsY = useTransform(scrollY, [0, 3000], [0, -600]);
  const nebulaeY = useTransform(scrollY, [0, 3000], [0, -150]);
  const cometsY = useTransform(scrollY, [0, 3000], [0, -900]);

  // Generate dynamic elements
  useEffect(() => {
    // Generate stars with varying properties
    const newStars = Array.from({ length: 100 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      brightness: Math.random() * 0.5 + 0.5
    }));
    setStars(newStars);

    // Generate comets
    const newComets = Array.from({ length: 5 }, () => ({
      id: Math.random(),
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 10,
      angle: Math.random() * 45 + 22.5, // Angle between 22.5 and 67.5 degrees
      length: Math.random() * 100 + 100
    }));
    setComets(newComets);

    // Generate nebulae
    const newNebulae = Array.from({ length: 3 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 1 + 0.5,
      hue: Math.random() * 360,
      rotation: Math.random() * 360
    }));
    setNebulae(newNebulae);

    // Generate asteroids
    const newAsteroids = Array.from({ length: 15 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setAsteroids(newAsteroids);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Base background gradient */}
      <motion.div 
        style={{ y: bgY }}
        className="fixed inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black"
      >
        {/* Dynamic noise texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.6" 
                numOctaves="3" 
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </motion.div>

      {/* Nebulae layer */}
      <motion.div
        style={{ y: nebulaeY }}
        className="fixed inset-0"
      >
        {nebulae.map(nebula => (
          <motion.div
            key={nebula.id}
            className="absolute opacity-30"
            style={{
              left: `${nebula.x}%`,
              top: `${nebula.y}%`,
              rotate: nebula.rotation
            }}
            animate={{
              scale: [nebula.scale, nebula.scale * 1.2, nebula.scale],
              rotate: [nebula.rotation, nebula.rotation + 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div 
              className="w-96 h-96 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle at center, 
                  hsla(${nebula.hue}, 70%, 60%, 0.3) 0%,
                  hsla(${nebula.hue}, 70%, 40%, 0.1) 50%,
                  transparent 70%
                )`
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Stars layer */}
      <motion.div
        style={{ y: starsY }}
        className="fixed inset-0"
      >
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [star.brightness * 0.4, star.brightness, star.brightness * 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          >
            <Sparkles 
              size={star.size} 
              className="text-white" 
              style={{ filter: `blur(${star.size * 0.2}px)` }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Comets layer */}
      <motion.div
        style={{ y: cometsY }}
        className="fixed inset-0"
      >
        {comets.map(comet => (
          <motion.div
            key={comet.id}
            className="absolute"
            style={{
              left: `${comet.startX}%`,
              top: `${comet.startY}%`,
              width: '2px',
              height: `${comet.length}px`,
              background: 'linear-gradient(to bottom, white, transparent)',
              transform: `rotate(${comet.angle}deg)`
            }}
            animate={{
              x: [-100, window.innerWidth + 100],
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: comet.duration,
              repeat: Infinity,
              delay: comet.delay,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* Asteroids layer */}
      <motion.div className="fixed inset-0 pointer-events-none">
        {asteroids.map(asteroid => (
          <motion.div
            key={asteroid.id}
            className="absolute rounded-full bg-gray-400"
            style={{
              left: `${asteroid.x}%`,
              top: `${asteroid.y}%`,
              width: asteroid.size,
              height: asteroid.size,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: asteroid.duration,
              repeat: Infinity,
              delay: asteroid.delay,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
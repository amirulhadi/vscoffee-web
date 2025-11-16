import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { FaCoffee } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Warm accent glow */}
      <div className="absolute inset-0 accent-glow"></div>

      {/* Floating coffee cup with steam animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-16 text-coffee-beige/40 text-8xl"
        >
          ☕
        </motion.div>

        {/* Steam animation */}
        <motion.div
          animate={{ 
            opacity: [0.3, 0.8, 0],
            y: [0, -20, -40],
            scale: [1, 1.2, 1.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute top-20 right-20 text-sky-blue/60 text-2xl font-fira-code"
        >
          &lt;/&gt;
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -25, -50],
            opacity: [0.2, 0.6, 0],
            scale: [1, 1.3, 1.6]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5
          }}
          className="absolute top-16 right-24 text-sky-blue/40 text-xl font-fira-code"
        >
          &lt;/&gt;
        </motion.div>
        
        {/* Floating code elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-sky-blue/30 text-6xl font-fira-code"
        >
          &lt;/&gt;
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 text-coffee-beige/30 text-4xl font-fira-code"
        >
          { }
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 text-caramel/30 text-5xl font-fira-code"
        >
          ;
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Fueling Ideas,{' '}
            <span className="text-coffee-beige">One Cup</span>{' '}
            at a Time.
          </motion.h1>
          
          <motion.p 
            className="text-2xl sm:text-3xl text-gray-700 mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            <span className="text-coffee-beige font-semibold">Crafted for coders.</span>{' '}
            <span className="text-sky-blue font-semibold">Brewed for dreamers.</span>
          </motion.p>

          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            Late-night coding sessions fueled by exceptional coffee,{' '}
            <span className="text-coffee-beige">technology</span>, and{' '}
            <span className="text-sky-blue">innovation</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center space-x-3 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCoffee className="w-6 h-6" />
            <span>Book Us for Your Event</span>
          </motion.a>
          
          <motion.a
            href="#about"
            className="btn-secondary inline-flex items-center space-x-3 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiCode className="w-6 h-6" />
            <span>Our Story</span>
          </motion.a>
        </motion.div>

        {/* Warm glow behind content */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coffee-beige/10 rounded-full blur-3xl"></div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-coffee-beige/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-coffee-beige rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

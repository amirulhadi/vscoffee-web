import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaCode } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfdfd] via-[#fafafa] to-[#f6d6b8] bg-[url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800\&h=600\&fit=crop)] bg-cover bg-center">
      
      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-[#f6d6b8]/60"></div>
      
      {/* Warm Tech Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#6c63ff]/5 to-[#f6d6b8]/20"></div>

      {/* Animated Steam / Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C6A27E]/10 to-transparent"
      />

      {/* Coffee Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Coffee Cup Images */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 2, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-16 w-16 h-16 opacity-20"
        >
          {/* <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop&auto=format" 
            alt="Coffee cup" 
            className="w-full h-full object-cover rounded-full"
          /> */}
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -3, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 left-20 w-12 h-12 opacity-15"
        >
          {/* <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=100&h=100&fit=crop&auto=format" 
            alt="Coffee beans" 
            className="w-full h-full object-cover rounded-full"
          /> */}
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 right-20 w-14 h-14 opacity-15"
        >
          {/* <img 
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100&h=100&fit=crop&auto=format" 
            alt="Coffee brewing" 
            className="w-full h-full object-cover rounded-full"
          /> */}
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, 4, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-60 left-1/4 w-10 h-10 opacity-15"
        >
          {/* <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop&auto=format" 
            alt="Coffee art" 
            className="w-full h-full object-cover rounded-full"
          /> */}
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -2, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-60 left-1/3 w-8 h-8 opacity-15"
        >
          {/* <img 
            src="https://images.unsplash.com/photo-1522992319-0365e5f11656?w=100&h=100&fit=crop&auto=format" 
            alt="Coffee beans" 
            className="w-full h-full object-cover rounded-full"
          /> */}
        </motion.div>

        {/* Floating Code Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-[#0078D7]/30 text-6xl font-mono"
        >
          &lt;/&gt;
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 text-[#C6A27E]/30 text-4xl font-mono"
        >
          { }
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 text-[#B5835A]/30 text-5xl font-mono"
        >
          ;
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-gray-800 px-6 max-w-5xl mx-auto">
        {/* Animated Coffee Cup Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block text-6xl text-[#C6A27E] mb-4"
          >
            ☕
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="text-gray-800">Fuel Your</span>{' '}
          <span className="text-[#C6A27E]">Code</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          <span className="text-[#C6A27E] font-semibold">Crafted for coders.</span>{' '}
          <span className="text-[#0078D7] font-semibold">Brewed for dreamers.</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
        >
          {/* Late-night coding sessions fueled by exceptional coffee, technology, and innovation. */}
          We brew exceptional coffee and bring it to life, one cup at a time.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(198,162,126,0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#C6A27E] to-[#B5835A] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <FaCoffee className="w-5 h-5" />
          <span>Book Us for an Event</span>
        </motion.button>

        {/* Tech Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 flex items-center justify-center space-x-2"
        >
          <FaCode className="w-4 h-4 text-[#0078D7]" />
          <span className="text-[#0078D7] font-mono text-sm" style={{ fontFamily: 'Fira Code, monospace' }}>
            &lt;VS Coffee /&gt;
          </span>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#C6A27E] rounded-full flex justify-center hover:border-[#B5835A] transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#C6A27E] rounded-full mt-2"
            />
          </motion.div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#C6A27E] text-sm font-medium"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            Scroll Down
          </motion.p>
        </motion.div>
      </div>

      {/* Warm Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A27E]/10 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
}

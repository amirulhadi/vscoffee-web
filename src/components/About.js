import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiLightBulb, HiUsers, HiHeart } from 'react-icons/hi';
import { FaCoffee } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Our <span className="text-vs-primary">Story</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-3xl mx-auto">
            From late-night coding sessions to brewing creativity through every cup
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Story content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-vs-text/90 leading-relaxed">
              <span className="text-vs-primary font-mono">&lt;story&gt;</span>{' '}
              VS Coffee was founded by five individuals from software engineering backgrounds who share a deep love for coffee, technology, and entrepreneurship.
            </p>
            
            <p className="text-lg text-vs-text/90 leading-relaxed">
              What began as late-night coding sessions fueled by caffeine has become a mission to brew creativity through every cup.{' '}
              <span className="text-vs-primary font-mono">&lt;/story&gt;</span>
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: HiCode, text: 'Code-First Approach' },
                { icon: FaCoffee, text: 'Premium Coffee' },
                { icon: HiLightBulb, text: 'Innovation' },
                { icon: HiUsers, text: 'Community' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-vs-primary/50 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-vs-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual elements */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-vs-primary/10 to-vs-secondary/10 rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '☕', label: 'Coffee', color: 'text-yellow-400' },
                  { icon: '💻', label: 'Code', color: 'text-vs-primary' },
                  { icon: '🚀', label: 'Innovation', color: 'text-vs-secondary' },
                  { icon: '❤️', label: 'Passion', color: 'text-red-400' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700/50 hover:border-vs-primary/50 transition-all duration-300"
                  >
                    <div className={`text-3xl mb-2 ${item.color}`}>{item.icon}</div>
                    <div className="text-sm font-medium text-vs-text">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating code elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 text-vs-primary/60 text-2xl font-mono"
            >
              &lt;/&gt;
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 text-vs-secondary/60 text-xl font-mono"
            >
              { }
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-vs-primary/10 to-vs-secondary/10 rounded-2xl p-8 border border-gray-700/50">
            <HiHeart className="w-12 h-12 text-vs-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-vs-text/90 max-w-2xl mx-auto">
              To bridge the gap between technology and hospitality, creating memorable experiences 
              that fuel both creativity and community through exceptional coffee and innovative service.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

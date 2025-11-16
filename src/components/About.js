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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-f6d6b8/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title-split">
            <span className="warm-text">Our</span> <span className="cool-text">Story</span>
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
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
              <span className="text-sky-blue font-fira-code">&lt;story&gt;</span>{' '}
              VS Coffee was founded by five individuals from software engineering backgrounds who share a deep love for coffee, technology, and entrepreneurship.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
              What began as late-night coding sessions fueled by caffeine has become a mission to brew creativity through every cup.{' '}
              <span className="text-sky-blue font-fira-code">&lt;/story&gt;</span>
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
                  className="flex items-center space-x-2 bg-white/80 px-4 py-3 rounded-lg border border-gray-200 hover:border-coffee-beige/50 hover:shadow-warm-glow transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-coffee-beige" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual elements */}
          <motion.div variants={itemVariants} className="relative">
            <div className="card-warm p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '☕', label: 'Coffee', color: 'text-coffee-beige' },
                  { icon: '💻', label: 'Code', color: 'text-sky-blue' },
                  { icon: '🚀', label: 'Innovation', color: 'text-caramel' },
                  { icon: '❤️', label: 'Passion', color: 'text-coffee-beige' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-white/80 rounded-xl p-6 text-center border border-gray-200 hover:border-coffee-beige/50 hover:shadow-warm-glow transition-all duration-300"
                  >
                    <div className={`text-3xl mb-2 ${item.color}`}>{item.icon}</div>
                    <div className="text-sm font-medium text-gray-700">{item.label}</div>
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
              className="absolute -top-4 -right-4 text-sky-blue/60 text-2xl font-fira-code"
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
              className="absolute -bottom-4 -left-4 text-coffee-beige/60 text-xl font-fira-code"
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
          <motion.div variants={itemVariants} className="card-warm p-8">
            <HiHeart className="w-12 h-12 text-coffee-beige mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Rubik, sans-serif' }}>
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

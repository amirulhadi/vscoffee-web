import React from 'react';
import { motion } from 'framer-motion';

export default function CoffeeCounter() {
  // Static number of cups sold
  const count = 1247;

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section 
      id="coffee-counter"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-f6d6b8/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22coffee-beans%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22120%22%20height%3D%22120%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M30%2C20%20C35%2C15%2045%2C15%2050%2C20%20C55%2C25%2055%2C35%2050%2C40%20C45%2C45%2035%2C45%2030%2C40%20C25%2C35%2025%2C25%2030%2C20%20Z%22%20fill%3D%22%23C6A27E%22%20fill-opacity%3D%220.08%22%20transform%3D%22rotate(15%2060%2060)%22/%3E%3Cpath%20d%3D%22M90%2C80%20C95%2C75%20105%2C75%20110%2C80%20C115%2C85%20115%2C95%20110%2C100%20C105%2C105%2095%2C105%2090%2C100%20C85%2C95%2085%2C85%2090%2C80%20Z%22%20fill%3D%22%23C6A27E%22%20fill-opacity%3D%220.08%22%20transform%3D%22rotate(-15%2060%2060)%22/%3E%3Cpath%20d%3D%22M60%2C10%20C65%2C5%2075%2C5%2080%2C10%20C85%2C15%2085%2C25%2080%2C30%20C75%2C35%2065%2C35%2060%2C30%20C55%2C25%2055%2C15%2060%2C10%20Z%22%20fill%3D%22%23C6A27E%22%20fill-opacity%3D%220.06%22%20transform%3D%22rotate(30%2060%2060)%22/%3E%3Cpath%20d%3D%22M10%2C60%20C15%2C55%2025%2C55%2030%2C60%20C35%2C65%2035%2C75%2030%2C80%20C25%2C85%2015%2C85%2010%2C80%20C5%2C75%205%2C65%2010%2C60%20Z%22%20fill%3D%22%23C6A27E%22%20fill-opacity%3D%220.06%22%20transform%3D%22rotate(-30%2060%2060)%22/%3E%3Cpath%20d%3D%22M110%2C60%20C115%2C55%20125%2C55%20130%2C60%20C135%2C65%20135%2C75%20130%2C80%20C125%2C85%20115%2C85%20110%2C80%20C105%2C75%20105%2C65%20110%2C60%20Z%22%20fill%3D%22%23C6A27E%22%20fill-opacity%3D%220.06%22%20transform%3D%22rotate(30%2060%2060)%22/%3E%3Cpath%20d%3D%22M60%2C110%20C65%2C105%2075%2C105%2080%2C110%20C85%2C115%2085%2C125%2080%2C130%20C75%2C135%2065%2C135%2060%2C130%20C55%2C125%2055%2C115%2060%2C110%20Z%22%20fill%3D%22%23C6A27E%22%20fill-opacity%3D%220.06%22%20transform%3D%22rotate(-30%2060%2060)%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20fill%3D%22url(%23coffee-beans)%22/%3E%3C/svg%3E')]"></div>
      </div>

      {/* Warm Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C6A27E]/5 to-[#0078D7]/5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Counter Display */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#C6A27E]/10 to-[#0078D7]/10 rounded-3xl p-8 border border-[#C6A27E]/20 hover:border-[#C6A27E]/40 transition-all duration-500 hover:shadow-warm-glow">
              {/* Coffee Cup Icon */}
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
                className="text-6xl text-[#C6A27E]"
              >
                ☕
              </motion.div>

              {/* Counter Number */}
              <div className="text-center">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {formatNumber(count)}
                </div>
                <div className="text-lg md:text-xl text-[#C6A27E] font-medium" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Cups Brewed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="text-[#C6A27E]">☕</span> Cups Brewed
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Our community keeps growing one cup at a time.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { 
                icon: '☕', 
                label: 'Cups Today', 
                value: Math.floor(count * 0.15),
                color: 'text-[#C6A27E]'
              },
              { 
                icon: '🏢', 
                label: 'Events Served', 
                value: Math.floor(count / 50),
                color: 'text-[#0078D7]'
              },
              { 
                icon: '😊', 
                label: 'Happy Customers', 
                value: Math.floor(count * 0.8),
                color: 'text-[#B5835A]'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#C6A27E]/10 to-[#0078D7]/10 rounded-2xl p-6 border border-[#C6A27E]/20 hover:border-[#C6A27E]/40 transition-all duration-300 hover:shadow-warm-glow"
              >
                <div className="text-center">
                  <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {formatNumber(stat.value)}
                  </div>
                  <div className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 text-[#0078D7]/30 text-4xl font-mono"
        >
          &lt;/&gt;
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 text-[#C6A27E]/30 text-3xl font-mono"
        >
          { }
        </motion.div>
      </div>
    </section>
  );
}

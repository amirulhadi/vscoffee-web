import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiHeart } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-100 via-white to-f6d6b8/20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-800">
                VS <span className="text-coffee-beige">Coffee</span>
              </span>
              <span className="text-coffee-beige font-mono text-sm">&lt;/&gt;</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Brewed with <HiHeart className="inline w-4 h-4 text-red-400" /> by developers who love coffee.
            </p>
            <p className="text-gray-500 text-xs">
              Fueling ideas, one cup at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-600 hover:text-coffee-beige transition-colors duration-300 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/vscoffee"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center border border-gray-200 hover:border-coffee-beige/50 hover:bg-coffee-beige/10 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-5 h-5 text-gray-600 hover:text-coffee-beige transition-colors duration-300" />
              </motion.a>
              
              <motion.a
                href="mailto:hello.vscoffee@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center border border-gray-200 hover:border-coffee-beige/50 hover:bg-coffee-beige/10 transition-all duration-300"
                aria-label="Send us an email"
              >
                <HiMail className="w-5 h-5 text-gray-600 hover:text-coffee-beige transition-colors duration-300" />
              </motion.a>
            </div>
            <div className="text-gray-500 text-sm">
              <p>hello.vscoffee@gmail.com</p>
              <p>60123456789</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-gray-200 pt-8"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-500 text-sm">
              © {currentYear} VS Coffee. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <motion.a
                href="#privacy"
                whileHover={{ scale: 1.05 }}
                className="text-gray-500 hover:text-coffee-beige transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                whileHover={{ scale: 1.05 }}
                className="text-gray-500 hover:text-coffee-beige transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Code accent */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="text-coffee-beige/40 font-mono text-sm"
          >
            &lt;/&gt; Built with React, Tailwind CSS, and lots of coffee &lt;/&gt;
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="bg-gray-900/50 border-t border-gray-700/50">
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
              <span className="text-2xl font-bold text-white">
                VS <span className="text-vs-primary">Coffee</span>
              </span>
              <span className="text-vs-primary font-mono text-sm">&lt;/&gt;</span>
            </div>
            <p className="text-vs-text/80 text-sm leading-relaxed">
              Brewed with <HiHeart className="inline w-4 h-4 text-red-400" /> by developers who love coffee.
            </p>
            <p className="text-vs-text/60 text-xs">
              Fueling ideas, one cup at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
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
                  className="block text-vs-text/80 hover:text-vs-primary transition-colors duration-300 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/vscoffee"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700/50 hover:border-vs-primary/50 hover:bg-vs-primary/10 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-5 h-5 text-vs-text hover:text-vs-primary transition-colors duration-300" />
              </motion.a>
              
              <motion.a
                href="mailto:hello@vscoffee.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700/50 hover:border-vs-primary/50 hover:bg-vs-primary/10 transition-all duration-300"
                aria-label="Send us an email"
              >
                <HiMail className="w-5 h-5 text-vs-text hover:text-vs-primary transition-colors duration-300" />
              </motion.a>
            </div>
            <div className="text-vs-text/60 text-sm">
              <p>hello@vscoffee.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-gray-700/50 pt-8"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-vs-text/60 text-sm">
              © {currentYear} VS Coffee. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <motion.a
                href="#privacy"
                whileHover={{ scale: 1.05 }}
                className="text-vs-text/60 hover:text-vs-primary transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                whileHover={{ scale: 1.05 }}
                className="text-vs-text/60 hover:text-vs-primary transition-colors duration-300"
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
            className="text-vs-primary/30 font-mono text-sm"
          >
            &lt;/&gt; Built with React, Tailwind CSS, and lots of coffee &lt;/&gt;
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

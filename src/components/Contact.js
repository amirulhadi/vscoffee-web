import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiCalendar, HiCheckCircle } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Corporate Event',
    'Tech Conference',
    'Private Party',
    'Wedding',
    'Pop-Up Café',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
      });
    }, 3000);
  };

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get in <span className="text-vs-primary">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-3xl mx-auto">
            Book VS Coffee for your next event or leave us a message. We'd love to hear from you!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Brew Something Together</h3>
              <p className="text-vs-text/90 text-lg leading-relaxed mb-8">
                Whether you're planning a corporate event, tech conference, or private celebration, 
                we're here to make your coffee experience exceptional.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-vs-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-vs-primary/20 rounded-lg flex items-center justify-center">
                  <HiMail className="w-6 h-6 text-vs-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-vs-text/80">hello@vscoffee.com</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-vs-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-vs-primary/20 rounded-lg flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-vs-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-vs-text/80">+1 (555) 123-4567</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-vs-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-vs-primary/20 rounded-lg flex items-center justify-center">
                  <HiCalendar className="w-6 h-6 text-vs-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Response Time</div>
                  <div className="text-vs-text/80">Within 24 hours</div>
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-vs-primary/10 to-vs-secondary/10 rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose VS Coffee?</h4>
              <ul className="space-y-2 text-vs-text/90">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                  <span>Professional baristas with tech industry experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                  <span>Premium equipment and high-quality beans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                  <span>Flexible service tailored to your needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                  <span>Tech-savvy approach to event management</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <HiCheckCircle className="w-16 h-16 text-vs-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-vs-text/80">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-vs-primary focus:ring-1 focus:ring-vs-primary transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-vs-primary focus:ring-1 focus:ring-vs-primary transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-vs-primary focus:ring-1 focus:ring-vs-primary transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-white mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-vs-primary focus:ring-1 focus:ring-vs-primary transition-all duration-300"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-vs-primary focus:ring-1 focus:ring-vs-primary transition-all duration-300 resize-none"
                    placeholder="Tell us about your event and how we can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

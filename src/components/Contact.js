import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiCalendar, HiCheckCircle } from 'react-icons/hi';
import emailjs from 'emailjs-com';


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
    
    // The structure of this object must exactly match 
    // the variable names in your EmailJS template (e.g., {{name}}, {{email}})
    const formdata = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventType: formData.eventType,
      message: formData.message
    };

    try {
      // Validate environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Debug: Log environment variables (remove in production)
      console.log('EmailJS Config Check:', {
        serviceId: serviceId ? '✓ Set' : '✗ Missing',
        templateId: templateId ? '✓ Set' : '✗ Missing',
        publicKey: publicKey ? '✓ Set' : '✗ Missing'
      });

      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing environment variables. Make sure:');
        console.error('1. .env file exists in the root directory');
        console.error('2. Variables start with REACT_APP_');
        console.error('3. Development server was restarted after creating .env');
        throw new Error('EmailJS environment variables are not configured. Please check your .env file and restart the server.');
      }

      // Send the email using environment variables for security
      await emailjs.send(
        serviceId, 
        templateId, 
        formdata,
        publicKey 
      );
      
      // Only set submitted state to true if the API call succeeds
      setIsSubmitted(true); 
      console.log('Form submitted successfully!');

      // Reset form immediately after success
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

    } catch (error) {
      console.error('Email error:', error);
      // Optional: Add logic here to show a "failed" message to the user
    } finally {
      // This runs whether try or catch succeeded, ensuring the button re-enables
      setIsSubmitting(false);
    }
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-f6d6b8/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title-split">
            {/* Get in <span className="text-vs-primary">Touch</span> */}
            <span className="warm-text">Get in</span> <span className="cool-text">Touch</span>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Brew Something Together</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're planning a corporate event, tech conference, or private celebration, 
                we're here to make your coffee experience exceptional.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-white/80 rounded-lg border border-gray-200 hover:border-coffee-beige/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-vs-primary/20 rounded-lg flex items-center justify-center">
                  <HiMail className="w-6 h-6 text-vs-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-gray-600">hello.vscoffee@gmail.com</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-white/80 rounded-lg border border-gray-200 hover:border-coffee-beige/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-vs-primary/20 rounded-lg flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-vs-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Phone</div>
                  <div className="text-gray-600">Will Provide Soon</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 bg-white/80 rounded-lg border border-gray-200 hover:border-coffee-beige/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-vs-primary/20 rounded-lg flex items-center justify-center">
                  <HiCalendar className="w-6 h-6 text-vs-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Response Time</div>
                  <div className="text-gray-600">Within 24 hours</div>
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-vs-primary/10 to-vs-secondary/10 rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-black mb-3">Why Choose VS Coffee?</h4>
              <ul className="space-y-2 text-vs-text/90">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                  <span className="text-black">Professional baristas with tech industry experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                  <span className="text-black">Premium equipment and high-quality beans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                  <span className="text-black">Flexible service tailored to your needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                  <span className="text-black">Tech-savvy approach to event management</span>
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
                      placeholder="60123456789"
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

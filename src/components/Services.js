import React from 'react';
import { motion } from 'framer-motion';
import { HiOfficeBuilding, HiCalendar, HiTruck } from 'react-icons/hi';
import { FaCoffee } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCoffee,
      title: 'Event Coffee Booths',
      description: 'Professional coffee service for conferences, meetups, and tech events. We bring the perfect brew to your gathering.',
      features: ['Professional Baristas', 'Premium Equipment', 'Custom Branding', 'Real-time Service']
    },
    {
      icon: HiOfficeBuilding,
      title: 'Corporate Functions',
      description: 'Elevate your corporate events with our premium coffee service. Perfect for meetings, workshops, and company celebrations.',
      features: ['Executive Service', 'Meeting Support', 'Team Building', 'Brand Integration']
    },
    {
      icon: HiCalendar,
      title: 'Private Bookings',
      description: 'Exclusive coffee experiences for private parties, weddings, and special occasions. Tailored to your unique needs.',
      features: ['Custom Menus', 'Personal Service', 'Special Occasions', 'Flexible Scheduling']
    },
    {
      icon: HiTruck,
      title: 'Pop-Up Cafés',
      description: 'Bring the café experience anywhere with our mobile coffee solutions. Perfect for outdoor events and unique locations.',
      features: ['Mobile Setup', 'Outdoor Capable', 'Flexible Locations', 'Quick Setup']
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Our <span className="text-vs-primary">Services</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-3xl mx-auto">
            From corporate events to private celebrations, we bring exceptional coffee experiences to every occasion
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card group hover:shadow-lg hover:shadow-vs-primary/10"
            >
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-vs-primary/20 to-vs-secondary/20 rounded-xl mb-4 border border-vs-primary/30"
                >
                  <service.icon className="w-8 h-8 text-vs-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-vs-text/80 text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-center space-x-2 text-sm text-vs-text/70"
                  >
                    <div className="w-1.5 h-1.5 bg-vs-primary rounded-full"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6"
              >
                <button className="w-full btn-secondary text-sm">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-vs-primary/10 to-vs-secondary/10 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Brew Something Amazing?</h3>
            <p className="text-lg text-vs-text/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how VS Coffee can elevate your next event with exceptional coffee service.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <FaCoffee className="w-5 h-5" />
              <span>Get a Quote</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

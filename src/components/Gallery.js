import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder images - in a real app, these would be actual image URLs
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop',
      alt: 'Coffee setup at tech conference',
      title: 'Tech Conference Setup'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop',
      alt: 'Corporate event coffee service',
      title: 'Corporate Event'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
      alt: 'Private party coffee bar',
      title: 'Private Party Setup'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1522992319-0365e5f11656?w=800&h=600&fit=crop',
      alt: 'Outdoor pop-up café',
      title: 'Pop-Up Café'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
      alt: 'Coffee brewing equipment',
      title: 'Professional Equipment'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
      alt: 'Coffee cup art and presentation',
      title: 'Coffee Art'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
      alt: 'Team working on coffee setup',
      title: 'Our Team in Action'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop',
      alt: 'Happy customers enjoying coffee',
      title: 'Happy Customers'
    }
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-f6d6b8/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title-split">
            {/* Our <span className="warm-text">Gallery</span> */}
            <span className="warm-text">Our</span> <span className="cool-text">Gallery</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle max-w-3xl mx-auto">
            A glimpse into our coffee experiences and the moments we've helped create
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-700/50 hover:border-vs-primary/50 transition-all duration-300"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-lg font-semibold mb-1">{image.title}</div>
                    <div className="text-sm opacity-80">Click to view</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-vs-primary transition-colors duration-300"
                  aria-label="Close lightbox"
                >
                  <HiX size={32} />
                </button>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-vs-primary transition-colors duration-300"
                  aria-label="Previous image"
                >
                  <HiChevronLeft size={32} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-vs-primary transition-colors duration-300"
                  aria-label="Next image"
                >
                  <HiChevronRight size={32} />
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <div className="text-lg font-semibold">{selectedImage.title}</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

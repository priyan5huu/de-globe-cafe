import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Layout } from '../components/common/Layout';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const galleryImages = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Signature Espresso',
    category: 'coffee'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Artisan Cappuccino',
    category: 'coffee'
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Fresh Pastries',
    category: 'food'
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Gourmet Sandwiches',
    category: 'food'
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Fresh Salads',
    category: 'food'
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Delicious Desserts',
    category: 'desserts'
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Cozy Interior',
    category: 'ambiance'
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Premium Tea Selection',
    category: 'tea'
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Barista at Work',
    category: 'ambiance'
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'food', name: 'Food' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'tea', name: 'Tea' },
  { id: 'ambiance', name: 'Ambiance' },
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref: headerRef, isInView: headerInView } = useIntersectionObserver();

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout 
      title="Gallery - De Globe Café"
      description="Explore our beautiful gallery showcasing our artisanal coffee, delicious food, and warm ambiance at De Globe Café."
    >
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative py-20 bg-gradient-to-br from-brand-text to-brand-secondary text-brand-light overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Café gallery"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-brand-light/90 max-w-3xl mx-auto leading-relaxed">
              Step into our world through these captivating images that showcase our passion 
              for exceptional coffee, delicious food, and creating memorable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'bg-gradient-to-r from-brand-light to-brand-background text-brand-text hover:bg-brand-accent border border-brand-accent/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-medium hover:shadow-large transition-all duration-300">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-display font-semibold text-lg">
                        {image.caption}
                      </h3>
                      <p className="text-sm text-brand-light/90 capitalize">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

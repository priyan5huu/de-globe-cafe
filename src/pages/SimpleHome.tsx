import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Layout } from '../components/common/Layout';

const menuItems = [
  {
    name: "Aloo Samosa",
    description: "Crispy Golden Samosas Filled With Spicy Mashed Potatoes And Peas.",
    image: "https://deglobecafe.in/wp-content/uploads/2025/03/aloo-burger-high-1024x683.jpeg"
  },
  {
    name: "Chicken Samosa",
    description: "Flaky Pastry Stuffed With Spiced Minced Chicken, Deep-Fried To Perfection.",
    image: "https://deglobecafe.in/wp-content/uploads/2025/03/chicken_samosa_high-1024x683.jpeg"
  },
  {
    name: "Paneer Patties",
    description: "A Crunchy Delight With Soft, Flavorful Paneer Stuffing.",
    image: "https://deglobecafe.in/wp-content/uploads/2025/03/paneer_patties-high-1024x768.webp"
  }
];

export const SimpleHome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout title="De Globe Café" description="Handmade coffee, brewed with passion, creates an unmatched experience. Rich aromas, smooth flavors, and cozy vibes make every sip special.">
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6"
              >
                De Globe Café
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-secondary mb-8"
              >
                Handmade Coffee with Amazing Vibes
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-text-dark mb-10 leading-relaxed font-body"
              >
                Handmade coffee, brewed with passion, creates an unmatched experience. Rich aromas, smooth flavors, and cozy vibes make every sip special, turning simple moments into unforgettable memories. Perfect coffee, perfect ambiance, pure bliss!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="#menu"
                  className="inline-block bg-secondary hover:bg-caramel-hover text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 font-body uppercase tracking-wider"
                >
                  Explore Our Menu
                </a>
              </motion.div>
            </div>

            {/* Coffee Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-bg-beige to-secondary rounded-3xl p-8 shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
                  <img
                    src="https://deglobecafe.in/wp-content/uploads/2025/03/Coff.png"
                    alt="Coffee"
                    className="max-w-full h-auto max-h-96 lg:max-h-[500px] object-contain filter drop-shadow-lg"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-highlight rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-brand-primary rounded-full opacity-30 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Carousel Section */}
      <section id="menu" className="bg-gradient-to-br from-brand-light to-brand-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4"
            >
              Featured Menu Items
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-text-dark font-body max-w-2xl mx-auto"
            >
              Discover our handcrafted delights, each made with passion and the finest ingredients
            </motion.p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 text-primary hover:text-secondary transition-colors duration-200 hidden lg:flex items-center space-x-2 bg-bg-light border-2 border-bg-beige rounded-full p-3 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Menu Item Card */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="bg-text-light rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.15)] overflow-hidden border border-bg-beige/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="h-64 md:h-96 overflow-hidden">
                  <img
                    src={menuItems[currentSlide].image}
                    alt={menuItems[currentSlide].name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-bg-light">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
                    {menuItems[currentSlide].name}
                  </h3>
                  <p className="text-lg text-text-dark leading-relaxed font-body mb-6">
                    {menuItems[currentSlide].description}
                  </p>
                  <button className="self-start bg-secondary text-primary px-6 py-3 rounded-lg font-body font-semibold hover:bg-caramel-hover transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 text-primary hover:text-secondary transition-colors duration-200 hidden lg:flex items-center space-x-2 bg-bg-light border-2 border-bg-beige rounded-full p-3 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-4 py-2 bg-bg-beige hover:bg-secondary rounded-lg text-primary hover:text-primary font-body transition-all duration-200"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              <span>Previous</span>
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-4 py-2 bg-bg-beige hover:bg-secondary rounded-lg text-primary hover:text-primary font-body transition-all duration-200"
            >
              <span>Next</span>
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {menuItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-brand-primary scale-125' 
                    : 'bg-brand-accent hover:bg-brand-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-brand-background py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-text mb-8">
              More Than Just a Café – It's an Experience!
            </h2>
            
            <p className="text-lg md:text-xl text-brand-text mb-10 max-w-4xl mx-auto leading-relaxed font-body">
              At De Globe Café, Every Sip, Every Bite, And Every Moment Is Crafted With Love.❤️ From Authentic Flavors To A Cozy Ambiance, Here's Why Our Customers Keep Coming Back!
            </p>
            
            <a
              href="https://g.co/kgs/gg8B3fw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand-primary hover:bg-brand-text text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl font-body uppercase tracking-wider group"
            >
              Visit us today
              <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
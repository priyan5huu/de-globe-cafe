import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Layout } from '../components/common/Layout';

export const NotFound: React.FC = () => {
  return (
    <Layout 
      title="Page Not Found - De Globe Café"
      description="The page you're looking for doesn't exist. Return to De Globe Café's homepage to continue your journey."
    >
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Number */}
            <div className="mb-8">
              <span className="font-display font-bold text-8xl lg:text-9xl text-espresso-900/20">
                404
              </span>
            </div>

            {/* Coffee Cup Icon */}
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
            >
              <div className="text-6xl">☕</div>
            </motion.div>

            {/* Heading */}
            <h1 className="font-display font-bold text-3xl lg:text-4xl text-espresso-900 mb-4">
              Oops! Page Not Found
            </h1>

            {/* Description */}
            <p className="text-lg text-espresso-700 mb-8 leading-relaxed">
              It looks like this page has gone for a coffee break. 
              Don't worry, there's plenty more to explore at De Globe Café!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-espresso-900 text-white rounded-lg hover:bg-espresso-800 transition-colors font-medium"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                Go Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-espresso-900 text-espresso-900 rounded-lg hover:bg-espresso-900 hover:text-white transition-colors font-medium"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Go Back
              </button>
            </div>

            {/* Popular Links */}
            <div className="mt-12 pt-8 border-t border-cream-300">
              <p className="text-espresso-600 mb-4">
                Looking for something specific? Try these popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/menu"
                  className="text-caramel-700 hover:text-caramel-600 hover:underline transition-colors"
                >
                  Menu
                </Link>
                <Link
                  to="/gallery"
                  className="text-caramel-700 hover:text-caramel-600 hover:underline transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  to="/story"
                  className="text-caramel-700 hover:text-caramel-600 hover:underline transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  to="/contact"
                  className="text-caramel-700 hover:text-caramel-600 hover:underline transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/blog"
                  className="text-caramel-700 hover:text-caramel-600 hover:underline transition-colors"
                >
                  Blog
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

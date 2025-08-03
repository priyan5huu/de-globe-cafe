import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CogIcon } from '@heroicons/react/24/outline';

export const FloatingAdminButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-espresso-900 text-white px-4 py-2 rounded-lg shadow-premium text-sm whitespace-nowrap"
          >
            Admin Dashboard
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-espresso-900 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Link
        to="/admin"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-espresso-800 to-espresso-900 hover:from-espresso-700 hover:to-espresso-800 text-white rounded-full shadow-premium hover:shadow-glow-espresso transition-all duration-300 hover:scale-110"
      >
        <CogIcon className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
      </Link>
    </div>
  );
};

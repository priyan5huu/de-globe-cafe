import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Our Story', href: '/story' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-text-light/95 backdrop-blur-md shadow-[0_2px_4px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-text-light font-display font-bold text-lg">G</span>
              </div>
              <span className="font-display font-bold text-xl text-primary">
                De Globe Café
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'font-body font-medium transition-colors duration-200 relative hover:text-secondary',
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-text-dark hover:text-secondary'
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeNavItem"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  />
                )}
              </Link>
            ))}
            
            {/* Customer action button */}
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-caramel-hover hover:from-primary hover:to-text-dark text-text-light font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
              title="Book a Table"
            >
              <span className="text-sm">Book a Table</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-primary hover:bg-bg-beige transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-bg-beige bg-text-light/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={clsx(
                      'block px-4 py-2 font-body font-medium transition-colors duration-200',
                      location.pathname === item.href
                        ? 'text-primary bg-bg-beige'
                        : 'text-text-dark hover:text-secondary hover:bg-bg-beige'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile booking button */}
                <Link
                  to="/contact"
                  className="flex items-center gap-2 mx-4 mt-4 px-4 py-3 bg-gradient-to-r from-secondary to-caramel-hover text-text-light font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  title="Book a Table"
                >
                  <span>Book a Table</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
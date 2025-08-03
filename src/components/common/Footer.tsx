import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const footerLinks = {
  'Quick Links': [
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Story', href: '/story' },
    { name: 'Blog', href: '/blog' },
  ],
  'Contact': [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Reservations', href: '/contact' },
    { name: 'Catering', href: '/contact' },
    { name: 'Events', href: '/contact' },
  ],
  'Services': [
    { name: 'Order Online', href: '/menu' },
    { name: 'Private Events', href: '/contact' },
    { name: 'Coffee Delivery', href: '/contact' },
    { name: 'Corporate Catering', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-caramel-hover rounded-full flex items-center justify-center">
                  <span className="text-text-light font-display font-bold text-lg">G</span>
                </div>
                <span className="font-display font-bold text-2xl">
                  De Globe Café
                </span>
              </Link>
              
              <p className="text-text-light/80 max-w-md leading-relaxed">
                Experience the perfect blend of artisanal coffee, fresh cuisine, 
                and warm hospitality in the heart of the city. Every cup tells a story.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-secondary" />
                  <span className="text-text-light/80">
                    123 Coffee Street, Downtown, City 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-secondary" />
                  <span className="text-text-light/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-secondary" />
                  <span className="text-text-light/80">hello@deglobecafe.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-5 w-5 text-secondary" />
                  <span className="text-text-light/80">
                    Mon-Sun: 7:00 AM - 10:00 PM
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-display font-semibold text-lg text-secondary">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-text-light/80 hover:text-text-light hover:text-secondary transition-colors duration-200 flex items-center gap-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-text-dark/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-light/70 text-sm">
            © 2024 De Globe Café. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl hover:opacity-80 transition-opacity"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
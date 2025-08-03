import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Layout } from '../components/common/Layout';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: ['123 Coffee Street', 'Downtown District', 'City, State 12345'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'WhatsApp: +1 (555) 123-4569'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: ['info@deglobecafe.com', 'orders@deglobecafe.com', 'events@deglobecafe.com'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Monday - Friday: 7:00 AM - 10:00 PM', 'Saturday: 8:00 AM - 11:00 PM', 'Sunday: 8:00 AM - 9:00 PM'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <Layout 
      title="Contact Us" 
      description="Get in touch with De Globe Café. Visit us, call us, or send us a message. We'd love to hear from you!"
    >
      <div className="min-h-screen bg-gradient-to-br from-brand-light to-brand-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-text to-brand-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-display font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl lg:text-2xl text-brand-light max-w-3xl mx-auto"
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-brand-light rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-brand-text mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-brand-secondary text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-white to-brand-light rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-display font-bold text-brand-text mb-6">
                  Send us a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-semibold text-brand-text mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-brand-secondary">
                      Thank you for your message. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-brand-accent rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors bg-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-brand-accent rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-brand-accent rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors bg-white"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-brand-text mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-brand-accent rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="reservation">Table Reservation</option>
                          <option value="catering">Catering Services</option>
                          <option value="events">Private Events</option>
                          <option value="feedback">Feedback</option>
                          <option value="complaint">Complaint</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-brand-accent rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors bg-white resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-primary to-brand-highlight text-white py-3 px-6 rounded-lg font-semibold hover:from-brand-primary/80 hover:to-brand-highlight/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-white to-brand-light rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-brand-accent to-brand-primary relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <MapPinIcon className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Interactive Map</p>
                        <p className="text-sm opacity-90">123 Coffee Street, Downtown</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-brand-text mb-3">
                      Find Us
                    </h3>
                    <p className="text-brand-secondary mb-4">
                      We're located in the heart of downtown, easily accessible by public transport and with ample parking available.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full">
                        Parking Available
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        Metro Nearby
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        WiFi Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gradient-to-br from-white to-brand-light rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-display font-semibold text-brand-text mb-4">
                    Why Choose De Globe Café?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <p className="text-brand-secondary">
                        <strong className="text-brand-text">Premium Coffee:</strong> Freshly roasted beans from sustainable sources
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <p className="text-brand-secondary">
                        <strong className="text-brand-text">Fresh Cuisine:</strong> Daily-made pastries and healthy meal options
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <p className="text-brand-secondary">
                        <strong className="text-brand-text">Cozy Atmosphere:</strong> Perfect for work, meetings, or relaxation
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <p className="text-brand-secondary">
                        <strong className="text-brand-text">Free WiFi:</strong> High-speed internet for digital nomads
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-r from-brand-light to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-text mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-brand-secondary text-lg">
                Quick answers to common questions about De Globe Café
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  q: "Do you take reservations?",
                  a: "Yes, we accept reservations for parties of 4 or more. You can call us or book through our website."
                },
                {
                  q: "Do you offer catering services?",
                  a: "Absolutely! We provide catering for corporate events, private parties, and special occasions. Contact us for a custom quote."
                },
                {
                  q: "Is there parking available?",
                  a: "Yes, we have a dedicated parking lot with 20 spaces, plus street parking is available nearby."
                },
                {
                  q: "Do you have WiFi?",
                  a: "Yes, we offer complimentary high-speed WiFi for all our customers. Perfect for remote work or studying."
                },
                {
                  q: "Are you open on holidays?",
                  a: "We're open on most holidays with special hours. Check our website or call us for holiday schedules."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-display font-semibold text-brand-text mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-brand-secondary">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

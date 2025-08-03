import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  StarIcon, 
  UserGroupIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import { Layout } from '../components/common/Layout';
import { Card } from '../components/ui/Card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const milestones = [
  {
    year: '2019',
    title: 'Our Beginning',
    description: 'De Globe Café opened its doors in the heart of Hazratganj, Lucknow, with a simple mission: to serve exceptional coffee with love.'
  },
  {
    year: '2020',
    title: 'Growing Community',
    description: 'Despite challenges, we became a beloved gathering place for coffee enthusiasts and locals seeking quality and warmth.'
  },
  {
    year: '2021',
    title: 'Menu Expansion',
    description: 'We expanded our offerings to include artisanal pastries, gourmet sandwiches, and signature beverages.'
  },
  {
    year: '2022',
    title: 'Second Location',
    description: 'Opened our second branch in Hazratganj, bringing our unique experience to even more coffee lovers.'
  },
  {
    year: '2024',
    title: 'Digital Presence',
    description: 'Launched our comprehensive digital platform to better serve our community and reach new customers.'
  },
];

const values = [
  {
    icon: HeartIcon,
    title: 'Passion for Coffee',
    description: 'Every cup is brewed with passion and precision, using carefully selected beans from the finest coffee regions.'
  },
  {
    icon: UserGroupIcon,
    title: 'Community First',
    description: 'We believe in creating connections and fostering relationships within our local Lucknow community.'
  },
  {
    icon: StarIcon,
    title: 'Quality Excellence',
    description: 'From sourcing to serving, we maintain the highest standards in every aspect of our operation.'
  },
  {
    icon: ClockIcon,
    title: 'Authentic Experience',
    description: 'We preserve traditional coffee culture while embracing innovation to create memorable experiences.'
  },
];

const team = [
  {
    name: 'Priya Sharma',
    role: 'Head Barista',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Priya brings 8 years of coffee expertise and leads our team in crafting the perfect cup every time.'
  },
  {
    name: 'Rahul Verma',
    role: 'Café Manager',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Rahul oversees daily operations and ensures every guest feels welcomed in our café family.'
  },
  {
    name: 'Amit Singh',
    role: 'Operations Manager',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Amit ensures every customer receives exceptional service and every detail meets our high standards.'
  },
];

export const Story: React.FC = () => {
  const { ref: headerRef, isInView: headerInView } = useIntersectionObserver();
  const { ref: storyRef, isInView: storyInView } = useIntersectionObserver();
  const { ref: valuesRef, isInView: valuesInView } = useIntersectionObserver();
  const { ref: teamRef, isInView: teamInView } = useIntersectionObserver();

  return (
    <Layout 
      title="Our Story - De Globe Café"
      description="Discover the story behind De Globe Café, our passion for coffee, and our commitment to the Lucknow community since 2019."
    >
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative py-20 bg-gradient-to-br from-brand-text to-brand-secondary text-brand-light overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our story"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6 text-brand-light">
              Our Story
            </h1>
            <p className="text-xl text-brand-light/90 max-w-3xl mx-auto leading-relaxed">
              From a small dream in Hazratganj to becoming Lucknow's beloved café, 
              discover the journey that defines who we are today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section */}
      <section ref={storyRef} className="py-20 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-bold text-4xl text-brand-text mb-6">
                Crafted with Love, Brewed to Perfection
              </h2>
              <div className="space-y-4 text-brand-secondary leading-relaxed">
                <p>
                  Established in 2019 in the bustling heart of Hazratganj, De Globe Café began 
                  as a passion project to bring exceptional coffee culture to Lucknow. What started 
                  as a small café has grown into a beloved community gathering place.
                </p>
                <p>
                  Our journey is rooted in a simple belief: great coffee has the power to bring 
                  people together. Every cup we serve is a testament to our commitment to quality, 
                  community, and the art of hospitality.
                </p>
                <p>
                  Today, with two thriving locations in Hazratganj, we continue to serve our 
                  community with the same passion and dedication that started it all.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="De Globe Café interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-6 rounded-xl shadow-lg">
                <p className="font-bold text-2xl">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-gradient-to-br from-brand-background to-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl text-brand-text mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              Every milestone represents our growing commitment to excellence and community.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-accent hidden lg:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="p-6 bg-brand-background border border-brand-accent/20">
                    <div className="text-brand-primary font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="font-display font-semibold text-xl text-brand-text mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-brand-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
                
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl text-brand-text mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              Our core values shape every interaction and guide our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full bg-gradient-to-br from-brand-light to-brand-background border border-brand-accent/30 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-text rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-brand-text mb-4">
                    {value.title}
                  </h3>
                  <p className="text-brand-secondary leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gradient-to-r from-brand-background via-brand-light to-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl text-brand-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              The passionate people behind every great cup and memorable experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center overflow-hidden bg-brand-background border border-brand-accent/20">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl text-brand-text mb-2">
                      {member.name}
                    </h3>
                    <div className="text-brand-primary font-medium mb-4">
                      {member.role}
                    </div>
                    <p className="text-brand-secondary leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

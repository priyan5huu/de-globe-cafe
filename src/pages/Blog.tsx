import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { Layout } from '../components/common/Layout';
import { Card } from '../components/ui/Card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const blogPosts = [
  {
    id: '1',
    title: 'The Art of Perfect Espresso: A Guide for Coffee Lovers',
    slug: 'art-of-perfect-espresso',
    excerpt: 'Discover the secrets behind crafting the perfect espresso shot, from bean selection to extraction techniques that will elevate your coffee experience.',
    content: `Espresso is the foundation of many beloved coffee drinks, yet mastering its preparation requires understanding, practice, and attention to detail. In this comprehensive guide, we'll explore the journey from bean to cup.

**Understanding Espresso Basics**

Espresso is a concentrated coffee preparation where pressurized hot water is forced through finely-ground coffee beans. The result is a rich, aromatic shot with a distinctive crema on top. The perfect espresso balances sweetness, acidity, and bitterness in harmony.

**Bean Selection and Grinding**

The journey begins with selecting quality beans. At De Globe Café, we source our beans from renowned coffee regions worldwide. The grind size is crucial - too coarse and the water flows too quickly, too fine and it flows too slowly. We recommend a fine grind that feels like powdered sugar between your fingers.

**The Extraction Process**

Proper extraction is an art form. The ideal extraction time is 25-30 seconds for a double shot. The water temperature should be between 90-96°C, and the pressure should be around 9 bars. Watch for the golden crema forming on top - this indicates a well-extracted shot.

**Tasting and Adjusting**

A perfect espresso should have a balanced flavor profile with no overwhelming bitterness or sourness. If your espresso tastes sour, try a finer grind or longer extraction. If it's bitter, try a coarser grind or shorter extraction.

Visit De Globe Café to experience our master baristas' perfect espresso shots, crafted with passion and precision every day.`,
    featuredImage: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Raj Kumar',
    publishedAt: new Date('2024-03-15'),
    tags: ['Coffee', 'Espresso', 'Brewing', 'Tips'],
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Seasonal Menu Updates: Fresh Flavors for Every Season',
    slug: 'seasonal-menu-updates',
    excerpt: 'Explore how we adapt our menu to celebrate the flavors of each season, bringing you fresh ingredients and innovative recipes year-round.',
    content: `At De Globe Café, we believe in celebrating the natural rhythm of seasons through our menu offerings. Each season brings unique ingredients and flavors that inspire our culinary creativity.

**Spring Awakening**

As winter fades, we welcome spring with fresh salads featuring early greens, strawberry-infused beverages, and light pastries that capture the season's renewal spirit. Our spring menu focuses on freshness and vitality.

**Summer Vibrancy**

Summer calls for refreshing cold brews, iced coffees, and fruit-forward desserts. We introduce tropical flavors and cooling ingredients that provide relief from the heat while maintaining our commitment to quality.

**Autumn Comfort**

Fall brings warming spices like cinnamon, nutmeg, and cardamom into our seasonal specialties. Pumpkin spice lattes, apple cinnamon pastries, and hearty soups become customer favorites during this cozy season.

**Winter Warmth**

Winter menu focuses on comfort and warmth. Rich hot chocolates, spiced chai, and hearty sandwiches provide the perfect antidote to cold weather. We also feature holiday-inspired treats that bring joy to the season.

**Local Sourcing**

Throughout all seasons, we prioritize local sourcing whenever possible. This not only ensures freshness but also supports our Lucknow community and reduces our environmental footprint.

Join us at De Globe Café to experience how each season brings new flavors and experiences to your table.`,
    featuredImage: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Priya Sharma',
    publishedAt: new Date('2024-03-10'),
    tags: ['Menu', 'Seasonal', 'Local', 'Fresh'],
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Coffee Culture in Lucknow: A Growing Movement',
    slug: 'coffee-culture-lucknow',
    excerpt: 'Dive into the evolving coffee culture in Lucknow and how De Globe Café has been part of this exciting transformation over the years.',
    content: `Lucknow's coffee culture has undergone a remarkable transformation over the past decade, evolving from a traditional tea-drinking city to embracing sophisticated coffee appreciation.

**Historical Context**

Traditionally, Lucknow has been known for its tea culture, with chai stalls on every corner serving aromatic, spiced tea. However, the younger generation's exposure to global coffee culture through travel and media has sparked a growing interest in specialty coffee.

**The Café Revolution**

The emergence of specialty coffee shops like De Globe Café has played a crucial role in educating locals about different coffee varieties, brewing methods, and the art of coffee appreciation. We've seen customers gradually transition from instant coffee to appreciating single-origin beans and artisanal brewing techniques.

**Community Building**

Coffee shops have become community hubs where students, professionals, and artists gather to work, socialize, and engage in meaningful conversations. These spaces foster creativity and connection in ways that traditional establishments didn't offer.

**Educational Initiatives**

At De Globe Café, we regularly conduct coffee cupping sessions, barista workshops, and educational events to help our community understand and appreciate coffee's complexity. These initiatives have contributed significantly to raising coffee awareness in Lucknow.

**Future Prospects**

The future of coffee culture in Lucknow looks bright. We're seeing increased demand for specialty coffee, growing appreciation for sustainable practices, and a willingness to experiment with new flavors and brewing methods.

De Globe Café is proud to be part of this cultural shift, contributing to Lucknow's evolving culinary landscape while maintaining our commitment to quality and community.`,
    featuredImage: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Amit Singh',
    publishedAt: new Date('2024-03-05'),
    tags: ['Culture', 'Lucknow', 'Community', 'History'],
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'Sustainable Practices: Our Commitment to the Environment',
    slug: 'sustainable-practices',
    excerpt: 'Learn about our environmental initiatives and how we\'re working towards a more sustainable future in the food and beverage industry.',
    content: `Environmental responsibility is at the heart of De Globe Café's operations. We believe that great coffee and food should not come at the expense of our planet's health.

**Sustainable Sourcing**

We partner with coffee farmers who practice sustainable agriculture, ensuring fair wages and environmentally friendly farming methods. Our beans are sourced from certified organic and rainforest-friendly farms whenever possible.

**Waste Reduction**

We've implemented comprehensive waste reduction strategies including composting organic waste, recycling programs, and encouraging customers to bring reusable cups with incentives. Our packaging is made from biodegradable or recyclable materials.

**Energy Efficiency**

Our café operations prioritize energy efficiency through LED lighting, energy-efficient equipment, and optimized heating and cooling systems. We're also exploring renewable energy options for our locations.

**Local Partnerships**

By partnering with local suppliers for ingredients and materials, we reduce transportation emissions while supporting the local economy. This approach ensures freshness while minimizing our carbon footprint.

**Community Education**

We actively educate our customers about environmental issues and encourage sustainable practices through workshops, information campaigns, and leading by example in our daily operations.

**Future Goals**

Our long-term goals include achieving carbon neutrality, expanding our sustainable sourcing programs, and continuing to innovate in environmental responsibility while maintaining the quality our customers expect.

Join us in our mission to enjoy great coffee while protecting the planet for future generations.`,
    featuredImage: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Raj Kumar',
    publishedAt: new Date('2024-02-28'),
    tags: ['Sustainability', 'Environment', 'Community', 'Responsibility'],
    readTime: '5 min read'
  }
];

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'menu', name: 'Menu' },
  { id: 'culture', name: 'Culture' },
  { id: 'sustainability', name: 'Sustainability' }
];

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { ref: headerRef, isInView: headerInView } = useIntersectionObserver();

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase())
      );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Layout 
      title="Blog - De Globe Café"
      description="Discover stories, tips, and insights about coffee culture, our community, and the passion behind De Globe Café."
    >
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative py-20 bg-gradient-to-br from-brand-text to-brand-secondary text-brand-light overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Blog"
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
              Our Blog
            </h1>
            <p className="text-xl text-brand-light/90 max-w-3xl mx-auto leading-relaxed">
              Discover stories, insights, and tips from the world of coffee, 
              food, and the vibrant community at De Globe Café.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
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

          {/* Blog Posts Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card hover className="overflow-hidden h-full group">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-caramel-700 text-white text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center text-sm text-espresso-600 mb-3 space-x-4">
                          <div className="flex items-center space-x-1">
                            <UserIcon className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h2 className="font-display font-bold text-xl text-espresso-900 mb-3 group-hover:text-caramel-700 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-espresso-700 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-cream-200 text-espresso-700 text-xs rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-caramel-700 font-medium group-hover:underline">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="font-display font-semibold text-2xl text-espresso-900 mb-4">
                No posts found
              </h3>
              <p className="text-espresso-700">
                Try selecting a different category to see more posts.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-espresso-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-cream-200 mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest blog posts, coffee tips, 
              and exclusive offers from De Globe Café.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-espresso-900 focus:outline-none focus:ring-2 focus:ring-caramel-500"
              />
              <button className="px-6 py-3 bg-caramel-700 hover:bg-caramel-600 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

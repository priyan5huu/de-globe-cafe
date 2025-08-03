import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarDaysIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Layout } from '../components/common/Layout';

const blogPosts = [
  {
    id: 1,
    slug: 'perfect-espresso-guide',
    title: 'The Art of Perfect Espresso: A Barista\'s Guide',
    content: `
      <p>Creating the perfect espresso is both an art and a science. It requires precision, quality ingredients, and a deep understanding of the brewing process. At De Globe Café, our baristas have perfected this craft over years of dedication.</p>
      
      <h2>The Foundation: Quality Beans</h2>
      <p>The journey to perfect espresso begins with selecting the right beans. We source our coffee from sustainable farms around the world, ensuring that each bean meets our exacting standards for flavor, aroma, and ethical production.</p>
      
      <h2>The Grind: Precision Matters</h2>
      <p>The grind size is crucial for espresso extraction. Too fine, and the water will over-extract, leading to bitter flavors. Too coarse, and you'll get a weak, under-extracted shot. Our baristas adjust the grind throughout the day to account for humidity and temperature changes.</p>
      
      <h2>The Pull: Timing and Pressure</h2>
      <p>A perfect espresso shot takes 25-30 seconds to extract. We monitor the flow rate, pressure, and color of the crema to ensure each shot meets our standards. The result is a rich, complex flavor profile with a perfect balance of sweetness and acidity.</p>
      
      <h2>The Finish: Serving with Care</h2>
      <p>The final step is serving the espresso immediately. The crema should be golden-brown with a smooth, velvety texture. We serve our espresso in pre-warmed cups to maintain the optimal temperature and preserve the delicate flavors.</p>
    `,
    excerpt: 'Discover the secrets behind brewing the perfect espresso shot, from bean selection to the final pour.',
    author: 'Marco Rodriguez',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Coffee Guide',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    slug: 'seasonal-menu-spring',
    title: 'Spring Awakening: Our New Seasonal Menu',
    content: `
      <p>As spring arrives, we're excited to introduce our new seasonal menu featuring fresh, vibrant flavors that celebrate the renewal of the season. Our culinary team has crafted dishes that highlight the best of spring produce.</p>
      
      <h2>Fresh Ingredients, Bold Flavors</h2>
      <p>This season's menu features locally sourced asparagus, tender spring greens, and the first strawberries of the year. Each dish is designed to showcase these ingredients at their peak freshness.</p>
      
      <h2>Signature Spring Drinks</h2>
      <p>Our beverage menu has also received a seasonal update. Try our Lavender Honey Latte, made with real lavender and local honey, or our refreshing Cucumber Mint Cooler for those warmer spring days.</p>
      
      <h2>Sustainable Sourcing</h2>
      <p>We're proud to partner with local farms and suppliers who share our commitment to sustainability. By sourcing locally, we reduce our environmental impact while supporting our community.</p>
    `,
    excerpt: 'Explore our new spring menu featuring fresh, seasonal ingredients and innovative flavor combinations.',
    author: 'Chef Isabella Martinez',
    date: '2024-03-20',
    readTime: '3 min read',
    category: 'Menu Updates',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
  }
];

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout title="Post Not Found">
        <div className="min-h-screen bg-gradient-to-br from-brand-light to-brand-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-brand-text mb-4">Post Not Found</h1>
            <p className="text-brand-secondary mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/80 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={post.title}
      description={post.excerpt}
    >
      <article className="min-h-screen bg-gradient-to-br from-brand-light to-brand-background">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          {/* Back Button */}
          <Link
            to="/blog"
            className="absolute top-8 left-8 inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
          
          {/* Title Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-3 py-1 bg-brand-primary text-white text-sm rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-brand-secondary mb-8 pb-8 border-b border-brand-accent"
          >
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <CalendarDaysIcon className="h-5 w-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none prose-brand"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-brand-accent"
          >
            <h3 className="text-xl font-display font-semibold text-brand-text mb-4">
              Share this article
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
                Share on Facebook
              </button>
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all">
                Share on Twitter
              </button>
              <button className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all">
                Share on WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-display font-bold text-brand-text mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-gradient-to-br from-white to-brand-light rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm rounded-full mb-3">
                        {relatedPost.category}
                      </span>
                      <h4 className="text-lg font-display font-semibold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-brand-secondary text-sm">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

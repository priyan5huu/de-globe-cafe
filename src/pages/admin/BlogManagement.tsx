import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  status: 'draft' | 'published' | 'archived';
  category: string;
  tags: string[];
  image: string;
  views: number;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Perfect Coffee Brewing',
    excerpt: 'Discover the secrets behind brewing the perfect cup of coffee, from bean selection to brewing techniques.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Admin',
    publishDate: '2024-01-15',
    status: 'published',
    category: 'Coffee Culture',
    tags: ['coffee', 'brewing', 'tips'],
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300',
    views: 1247,
  },
  {
    id: '2',
    title: 'Our Journey: From Bean to Cup',
    excerpt: 'Learn about our commitment to sourcing the finest coffee beans and our roasting process.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Admin',
    publishDate: '2024-01-10',
    status: 'published',
    category: 'Our Story',
    tags: ['story', 'sourcing', 'quality'],
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300',
    views: 856,
  },
  {
    id: '3',
    title: 'Seasonal Menu Updates',
    excerpt: 'Exciting new additions to our menu this season, featuring fresh ingredients and innovative flavors.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Admin',
    publishDate: '2024-01-08',
    status: 'draft',
    category: 'Menu Updates',
    tags: ['menu', 'seasonal', 'new'],
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=300',
    views: 0,
  },
  {
    id: '4',
    title: 'Community Events at De Globe Café',
    excerpt: 'Join us for our upcoming community events, workshops, and coffee tastings.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Admin',
    publishDate: '2024-01-05',
    status: 'published',
    category: 'Events',
    tags: ['events', 'community', 'workshops'],
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=300',
    views: 634,
  },
];

const categories = ['All', 'Coffee Culture', 'Our Story', 'Menu Updates', 'Events', 'Tips & Guides'];
const statuses: Array<'all' | BlogPost['status']> = ['all', 'draft', 'published', 'archived'];

export const BlogManagement: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState<'all' | BlogPost['status']>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || post.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleStatusChange = (id: string, newStatus: BlogPost['status']) => {
    setBlogPosts(posts =>
      posts.map(post =>
        post.id === id ? { ...post, status: newStatus } : post
      )
    );
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogPosts(posts => posts.filter(post => post.id !== id));
    }
  };

  const getStatusColor = (status: BlogPost['status']) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Blog Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Create and manage your café blog posts and articles.
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <Button onClick={() => setShowCreateModal(true)} className="inline-flex items-center">
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Post
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <Card className="p-4">
          <div className="text-2xl font-bold text-gray-900">{blogPosts.length}</div>
          <div className="text-sm text-gray-500">Total Posts</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-green-600">
            {blogPosts.filter(post => post.status === 'published').length}
          </div>
          <div className="text-sm text-gray-500">Published</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-yellow-600">
            {blogPosts.filter(post => post.status === 'draft').length}
          </div>
          <div className="text-sm text-gray-500">Drafts</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-blue-600">
            {blogPosts.reduce((total, post) => total + post.views, 0).toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Total Views</div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="sm:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="sm:w-36">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as 'all' | BlogPost['status'])}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Blog Posts List */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-24 w-32 object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <EyeIcon className="h-3 w-3" />
                            {post.views.toLocaleString()} views
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 ml-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-xs text-gray-500">Category:</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col gap-2">
                    <select
                      value={post.status}
                      onChange={(e) => handleStatusChange(post.id, e.target.value as BlogPost['status'])}
                      className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setEditingPost(post)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}

      {/* Create/Edit Modal */}
      {(showCreateModal || editingPost) && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h3>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setEditingPost(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center py-8">
              <p className="text-gray-500">Blog post editor will be implemented here</p>
              <div className="mt-4">
                <Button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingPost(null);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

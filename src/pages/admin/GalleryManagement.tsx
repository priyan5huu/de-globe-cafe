import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
  uploadDate: string;
  featured: boolean;
}

const mockGalleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Perfect Espresso',
    category: 'Coffee',
    description: 'Our signature espresso with perfect crema',
    uploadDate: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Latte Art',
    category: 'Coffee',
    description: 'Beautiful latte art by our skilled baristas',
    uploadDate: '2024-01-14',
    featured: false,
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Fresh Pastries',
    category: 'Food',
    description: 'Freshly baked croissants and pastries',
    uploadDate: '2024-01-13',
    featured: true,
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Cozy Interior',
    category: 'Ambiance',
    description: 'Our warm and inviting café interior',
    uploadDate: '2024-01-12',
    featured: false,
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Outdoor Seating',
    category: 'Ambiance',
    description: 'Relaxing outdoor seating area',
    uploadDate: '2024-01-11',
    featured: false,
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/2067406/pexels-photo-2067406.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Barista at Work',
    category: 'Team',
    description: 'Our skilled barista preparing coffee',
    uploadDate: '2024-01-10',
    featured: true,
  },
];

const categories = ['All', 'Coffee', 'Food', 'Ambiance', 'Team', 'Events'];

export const GalleryManagement: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>(mockGalleryImages);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = images.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToggleFeatured = (id: string) => {
    setImages(imgs =>
      imgs.map(img =>
        img.id === id ? { ...img, featured: !img.featured } : img
      )
    );
  };

  const handleDeleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(imgs => imgs.filter(img => img.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Gallery Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your café gallery images and showcase your best moments.
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <Button onClick={() => setShowUploadModal(true)} className="inline-flex items-center">
            <CloudArrowUpIcon className="h-4 w-4 mr-2" />
            Upload Images
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        <Card className="p-4">
          <div className="text-2xl font-bold text-gray-900">{images.length}</div>
          <div className="text-sm text-gray-500">Total Images</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-amber-600">
            {images.filter(img => img.featured).length}
          </div>
          <div className="text-sm text-gray-500">Featured Images</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-blue-600">
            {categories.filter(cat => cat !== 'All').length}
          </div>
          <div className="text-sm text-gray-500">Categories</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-green-600">
            {new Date().toLocaleDateString()}
          </div>
          <div className="text-sm text-gray-500">Last Updated</div>
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
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="sm:w-48">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FunnelIcon className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="h-48 w-full object-cover cursor-pointer transition-transform group-hover:scale-105"
                    onClick={() => setSelectedImage(image)}
                  />
                  <div className="absolute top-2 right-2">
                    {image.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {image.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {image.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {image.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(image.uploadDate).toLocaleDateString()}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleToggleFeatured(image.id)}
                        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                          image.featured
                            ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {image.featured ? 'Unfeature' : 'Feature'}
                      </button>
                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors"
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

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No images found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Upload New Images</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center py-8">
              <CloudArrowUpIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 mb-4">Image upload coming soon</p>
              <div className="mt-4">
                <Button onClick={() => setShowUploadModal(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Detail Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border max-w-2xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Category:</span>
                  <span className="ml-2 text-gray-600">{selectedImage.category}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Upload Date:</span>
                  <span className="ml-2 text-gray-600">
                    {new Date(selectedImage.uploadDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-medium text-gray-900">Description:</span>
                <p className="mt-1 text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

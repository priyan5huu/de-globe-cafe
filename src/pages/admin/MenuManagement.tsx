import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  featured: boolean;
  ingredients: string[];
  allergens: string[];
}

const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Espresso',
    description: 'Rich, aromatic espresso shot with perfect crema',
    price: 4.50,
    category: 'Coffee',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    featured: true,
    ingredients: ['Espresso beans', 'Water'],
    allergens: ['None'],
  },
  {
    id: '2',
    name: 'Artisan Cappuccino',
    description: 'Creamy cappuccino with steamed milk and foam art',
    price: 5.25,
    category: 'Coffee',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    featured: false,
    ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
    allergens: ['Dairy'],
  },
  {
    id: '3',
    name: 'Chocolate Croissant',
    description: 'Buttery, flaky croissant filled with dark chocolate',
    price: 4.95,
    category: 'Pastries',
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    featured: true,
    ingredients: ['Flour', 'Butter', 'Dark chocolate', 'Eggs'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
  },
  {
    id: '4',
    name: 'Grilled Chicken Panini',
    description: 'Grilled chicken breast with fresh vegetables and herbs',
    price: 12.50,
    category: 'Food',
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: false,
    featured: false,
    ingredients: ['Chicken breast', 'Ciabatta bread', 'Tomatoes', 'Lettuce', 'Herbs'],
    allergens: ['Gluten'],
  },
];

const categories = ['All', 'Coffee', 'Tea', 'Food', 'Pastries', 'Desserts'];

export const MenuManagement: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToggleAvailability = (id: string) => {
    setMenuItems(items =>
      items.map(item =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const handleToggleFeatured = (id: string) => {
    setMenuItems(items =>
      items.map(item =>
        item.id === id ? { ...item, featured: !item.featured } : item
      )
    );
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('Are you sure you want to delete this menu item?')) {
      setMenuItems(items => items.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Menu Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your café menu items, availability, and pricing.
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <Button onClick={() => setShowAddModal(true)} className="inline-flex items-center">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Menu Item
          </Button>
        </div>
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
                placeholder="Search menu items..."
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

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    {item.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.available
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        Category: <span className="font-medium">{item.category}</span>
                      </p>
                      <p className="text-lg font-bold text-amber-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => handleToggleAvailability(item.id)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        item.available
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {item.available ? 'Mark Unavailable' : 'Mark Available'}
                    </button>
                    <button
                      onClick={() => handleToggleFeatured(item.id)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        item.featured
                          ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {item.featured ? 'Unfeature' : 'Feature'}
                    </button>
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      onClick={() => setEditingItem(item)}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No menu items found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}

      {/* Add/Edit Modal Placeholder */}
      {(showAddModal || editingItem) && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingItem(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center py-8">
              <p className="text-gray-500">Menu item form will be implemented here</p>
              <div className="mt-4">
                <Button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingItem(null);
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

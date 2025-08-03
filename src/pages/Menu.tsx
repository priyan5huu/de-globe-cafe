import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Layout } from '../components/common/Layout';

const BRAND_COLORS = {
  primary: '#3B2F2F',
  secondary: '#C49E78',
  bgLight: '#F5F0E6',
  bgBeige: '#E8D9C5'
};

const FONTS = {
  heading: '"Playfair Display", serif',
  body: '"Montserrat", sans-serif'
};

const mockMenuItems = [
  // ☕ Tea / Coffee
  {
    id: '1',
    name: 'Special Coffee',
    description: 'Handmade coffee, brewed with passion, creates an unmatched experience. Rich aromas and smooth flavors.',
    price: 120,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tea-coffee',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Masala Chai',
    description: 'Traditional Indian tea with aromatic spices, perfect for any time of day.',
    price: 60,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tea-coffee',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Black Coffee',
    description: 'Pure, strong coffee for the true coffee enthusiast. Bold and energizing.',
    price: 100,
    image: 'https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tea-coffee',
    isBestSeller: false,
    isAvailable: true,
  },
  {
    id: '4',
    name: 'Green Tea',
    description: 'Refreshing and healthy green tea, perfect for a light moment.',
    price: 80,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tea-coffee',
    isBestSeller: false,
    isAvailable: true,
  },

  // 🥐 Snacks
  {
    id: '5',
    name: 'Aloo Samosa',
    description: 'Crispy Golden Samosas Filled With Spicy Mashed Potatoes And Peas.',
    price: 60,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'snacks',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '6',
    name: 'Chicken Samosa',
    description: 'Flaky Pastry Stuffed With Spiced Minced Chicken, Deep-Fried To Perfection.',
    price: 80,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'snacks',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '7',
    name: 'French Fries',
    description: 'Crispy golden fries, perfectly seasoned and served hot.',
    price: 120,
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'snacks',
    isBestSeller: false,
    isAvailable: true,
  },
  {
    id: '8',
    name: 'Bread Pakora',
    description: 'Spiced bread fritters, crispy outside and soft inside.',
    price: 90,
    image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'snacks',
    isBestSeller: false,
    isAvailable: true,
  },

  // 🍔 Burgers
  {
    id: '9',
    name: 'Aloo Burger',
    description: 'Crispy potato patty with fresh vegetables and tangy sauces.',
    price: 120,
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'burgers',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '10',
    name: 'Chicken Burger',
    description: 'Juicy chicken patty with lettuce, tomato, and special sauce.',
    price: 180,
    image: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'burgers',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '11',
    name: 'Veg Burger',
    description: 'Fresh vegetable patty with crisp lettuce and tangy mayo.',
    price: 100,
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'burgers',
    isBestSeller: false,
    isAvailable: true,
  },

  // 🍜 Maggi
  {
    id: '12',
    name: 'Plain Maggi',
    description: 'The Classic Instant Maggi Noodles, Simple Yet Satisfying.',
    price: 80,
    image: 'https://images.pexels.com/photos/4518617/pexels-photo-4518617.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'maggi',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '13',
    name: 'Cheese Veg Maggi',
    description: 'Classic Maggi Noodles Loaded With Melted Cheese And Fresh Veggies.',
    price: 120,
    image: 'https://images.pexels.com/photos/4518617/pexels-photo-4518617.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'maggi',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '14',
    name: 'Chicken Chilli Garlic Maggi',
    description: 'Spicy, Garlicky Maggi Tossed With Tender Chicken Pieces.',
    price: 150,
    image: 'https://images.pexels.com/photos/4518617/pexels-photo-4518617.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'maggi',
    isBestSeller: false,
    isAvailable: true,
  },

  // 🍲 Soup
  {
    id: '15',
    name: 'Veg Soup',
    description: 'A Light Yet Flavorful Vegetable Soup, Perfect For A Cozy Meal.',
    price: 100,
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'soup',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '16',
    name: 'Chicken Soup',
    description: 'Hearty chicken soup with tender pieces and aromatic herbs.',
    price: 140,
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'soup',
    isBestSeller: false,
    isAvailable: true,
  },
  {
    id: '17',
    name: 'Tomato Soup',
    description: 'Classic tomato soup with fresh herbs and cream.',
    price: 90,
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'soup',
    isBestSeller: false,
    isAvailable: true,
  },

  // 🍚 Fried Rice
  {
    id: '18',
    name: 'Veg Fried Rice',
    description: 'Aromatic basmati rice stir-fried with fresh vegetables and spices.',
    price: 150,
    image: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fried-rice',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '19',
    name: 'Chicken Fried Rice',
    description: 'Delicious fried rice with tender chicken pieces and mixed vegetables.',
    price: 180,
    image: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fried-rice',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '20',
    name: 'Egg Fried Rice',
    description: 'Classic fried rice with scrambled eggs and soy sauce.',
    price: 140,
    image: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fried-rice',
    isBestSeller: false,
    isAvailable: true,
  },

  // 🥟 Momos
  {
    id: '21',
    name: 'Veg Momos (8 Pcs)',
    description: 'Steamed dumplings filled with fresh vegetables and spices.',
    price: 120,
    image: 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'momos',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '22',
    name: 'Chicken Momos (8 Pcs)',
    description: 'Juicy chicken-filled steamed dumplings with aromatic spices.',
    price: 150,
    image: 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'momos',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '23',
    name: 'Fried Momos (8 Pcs)',
    description: 'Crispy fried momos served with spicy chutney.',
    price: 140,
    image: 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'momos',
    isBestSeller: false,
    isAvailable: true,
  },

  // 🥡 Chinese Starters (Veg)
  {
    id: '24',
    name: 'Veg Chilli Garlic Noodles',
    description: 'Spicy noodles tossed with fresh vegetables and garlic.',
    price: 140,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chinese-veg',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '25',
    name: 'Veg Manchurian',
    description: 'Deep-fried vegetable balls in tangy Manchurian sauce.',
    price: 160,
    image: 'https://images.pexels.com/photos/4518848/pexels-photo-4518848.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chinese-veg',
    isBestSeller: false,
    isAvailable: true,
  },
  {
    id: '26',
    name: 'Chilli Paneer',
    description: 'Cottage cheese cubes in spicy Indo-Chinese sauce.',
    price: 180,
    image: 'https://images.pexels.com/photos/4518848/pexels-photo-4518848.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chinese-veg',
    isBestSeller: true,
    isAvailable: true,
  },

  // 🥩 Chinese Starters (Non-Veg)
  {
    id: '27',
    name: 'Chicken Chilli Garlic Noodles',
    description: 'Spicy, Garlicky Noodles Tossed With Tender Chicken Pieces.',
    price: 180,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chinese-nonveg',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '28',
    name: 'Chicken Manchurian',
    description: 'Tender chicken pieces in savory Manchurian sauce.',
    price: 200,
    image: 'https://images.pexels.com/photos/4518848/pexels-photo-4518848.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chinese-nonveg',
    isBestSeller: true,
    isAvailable: true,
  },
  {
    id: '29',
    name: 'Chicken Chilli',
    description: 'Spicy chicken pieces stir-fried with bell peppers and onions.',
    price: 190,
    image: 'https://images.pexels.com/photos/4518848/pexels-photo-4518848.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'chinese-nonveg',
    isBestSeller: false,
    isAvailable: true,
  },
];

const categories = [
  { id: 'all', name: 'All Items', count: mockMenuItems.length, emoji: '🍽️' },
  { id: 'tea-coffee', name: 'Tea / Coffee', count: mockMenuItems.filter(item => item.category === 'tea-coffee').length, emoji: '☕' },
  { id: 'snacks', name: 'Snacks', count: mockMenuItems.filter(item => item.category === 'snacks').length, emoji: '🥐' },
  { id: 'burgers', name: 'Burgers', count: mockMenuItems.filter(item => item.category === 'burgers').length, emoji: '🍔' },
  { id: 'maggi', name: 'Maggi', count: mockMenuItems.filter(item => item.category === 'maggi').length, emoji: '🍜' },
  { id: 'soup', name: 'Soup', count: mockMenuItems.filter(item => item.category === 'soup').length, emoji: '🍲' },
  { id: 'fried-rice', name: 'Fried Rice', count: mockMenuItems.filter(item => item.category === 'fried-rice').length, emoji: '🍚' },
  { id: 'momos', name: 'Momos', count: mockMenuItems.filter(item => item.category === 'momos').length, emoji: '🥟' },
  { id: 'chinese-veg', name: 'Chinese Starters (Veg)', count: mockMenuItems.filter(item => item.category === 'chinese-veg').length, emoji: '🥡' },
  { id: 'chinese-nonveg', name: 'Chinese Starters (Non-Veg)', count: mockMenuItems.filter(item => item.category === 'chinese-nonveg').length, emoji: '🥩' },
];

// =====================================================================
// COMPONENT IMPLEMENTATION (PIXEL-PERFECT)
// =====================================================================
export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(mockMenuItems);

  // Initialize animations
  useEffect(() => {
    const loadAOS = async () => {
      if (typeof window !== 'undefined') {
        await import('aos/dist/aos.css');
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 800,
          easing: 'ease-out-quad',
          once: true,
          offset: 100
        });
      }
    };
    loadAOS();
  }, []);

  // Filter items when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(mockMenuItems);
    } else {
      setFilteredItems(mockMenuItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Set page title and meta tags
  useEffect(() => {
    document.title = 'Menu - De Globe Cafe | Authentic Indian Delicacies';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our delicious menu featuring authentic Indian cuisine, fresh coffee, and delectable snacks.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore our delicious menu featuring authentic Indian cuisine, fresh coffee, and delectable snacks.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <Layout>

      {/* Hero Section (EXACT MATCH) */}
      <div 
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND_COLORS.bgLight }}
      >
        {/* Floating coffee cup animation */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-10"
          style={{
            width: '600px',
            height: '600px',
            backgroundImage: 'url(/coffee-cup.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>

        <div 
          className="relative py-32 px-4 text-center"
          style={{ backgroundColor: BRAND_COLORS.primary }}
          data-aos="fade"
        >
          <div className="max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: FONTS.heading }}
              data-aos="fade-up"
            >
              Our Menu
            </h1>
            <p 
              className="text-xl text-white opacity-90 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Carefully crafted beverages and dishes made with premium ingredients
            </p>
          </div>
        </div>

        {/* Category Filter (STICKY NAV) */}
        <div 
          className="sticky top-0 z-50 bg-white shadow-sm"
          data-aos="fade-down"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex overflow-x-auto py-4 hide-scrollbar">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-4 py-2 mx-1 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-secondary text-primary'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 50)}
                >
                  {category.emoji} {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index % 3 * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {item.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Bestseller
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 
                      className="text-xl font-bold"
                      style={{ fontFamily: FONTS.heading, color: BRAND_COLORS.primary }}
                    >
                      {item.name}
                    </h3>
                    <span 
                      className="text-xl font-bold"
                      style={{ color: BRAND_COLORS.secondary }}
                    >
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4" style={{ fontFamily: FONTS.body }}>
                    {item.description}
                  </p>

                  <button
                    className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-300 ${
                      item.isAvailable
                        ? 'bg-secondary text-primary hover:bg-opacity-90'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {item.isAvailable ? 'Add to Order' : 'Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up">
              <p className="text-xl text-gray-500">No items found in this category.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div 
          className="py-16 px-4 text-center"
          style={{ backgroundColor: BRAND_COLORS.secondary }}
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: FONTS.heading, color: BRAND_COLORS.primary }}
            >
              Have Special Requests?
            </h2>
            <p 
              className="text-xl mb-8 opacity-90"
              style={{ color: BRAND_COLORS.primary }}
            >
              Our chefs would love to prepare something special just for you.
            </p>
            <button
              className="px-8 py-3 text-lg font-medium rounded-md transition-colors duration-300"
              style={{ 
                backgroundColor: BRAND_COLORS.primary,
                color: 'white',
                fontFamily: FONTS.body
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  ShoppingBagIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import { Card } from '../../components/ui/Card';

const stats = [
  {
    name: 'Total Customers',
    value: '1,247',
    change: '+12%',
    changeType: 'increase',
    icon: UserGroupIcon,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Monthly Orders',
    value: '856',
    change: '+8%',
    changeType: 'increase',
    icon: ShoppingBagIcon,
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Page Views',
    value: '12,489',
    change: '+18%',
    changeType: 'increase',
    icon: EyeIcon,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'New Inquiries',
    value: '23',
    change: '-2%',
    changeType: 'decrease',
    icon: ChatBubbleLeftIcon,
    color: 'from-orange-500 to-orange-600',
  },
];

const recentActivities = [
  {
    id: 1,
    type: 'order',
    message: 'New order placed by John Doe',
    time: '2 minutes ago',
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    type: 'inquiry',
    message: 'Contact form submission from Sarah Wilson',
    time: '15 minutes ago',
    icon: ChatBubbleLeftIcon,
  },
  {
    id: 3,
    type: 'user',
    message: 'New user registration: Mike Johnson',
    time: '1 hour ago',
    icon: UserGroupIcon,
  },
  {
    id: 4,
    type: 'blog',
    message: 'New blog post published: "Coffee Culture"',
    time: '2 hours ago',
    icon: CalendarIcon,
  },
];

const popularMenuItems = [
  {
    name: 'Signature Espresso',
    orders: 145,
    revenue: '$652.50',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Artisan Cappuccino',
    orders: 132,
    revenue: '$693.00',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Chocolate Croissant',
    orders: 89,
    revenue: '$440.55',
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Grilled Chicken Panini',
    orders: 76,
    revenue: '$950.00',
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening at De Globe Café today.
          </p>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <span className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <ArrowTrendingUpIcon className={`self-center flex-shrink-0 h-4 w-4 ${
                          stat.changeType === 'decrease' ? 'transform rotate-180' : ''
                        }`} />
                        <span className="sr-only">
                          {stat.changeType === 'increase' ? 'Increased' : 'Decreased'} by
                        </span>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="flow-root">
              <ul className="-mb-8">
                {recentActivities.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivities.length - 1 ? (
                        <span
                          className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white">
                            <activity.icon className="h-4 w-4 text-gray-500" />
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <div>
                            <p className="text-sm text-gray-900">
                              {activity.message}
                            </p>
                          </div>
                          <div className="whitespace-nowrap text-right text-sm text-gray-500">
                            <time>{activity.time}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Popular Menu Items */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Popular Menu Items
            </h3>
            <div className="space-y-4">
              {popularMenuItems.map((item) => (
                <div key={item.name} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-lg object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.orders} orders
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {item.revenue}
                    </p>
                    <p className="text-xs text-gray-500">
                      Revenue
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <div className="text-gray-400 mb-2">
                <ShoppingBagIcon className="h-8 w-8 mx-auto" />
              </div>
              <span className="text-sm font-medium text-gray-900">Add Menu Item</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <div className="text-gray-400 mb-2">
                <CalendarIcon className="h-8 w-8 mx-auto" />
              </div>
              <span className="text-sm font-medium text-gray-900">Create Blog Post</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <div className="text-gray-400 mb-2">
                <EyeIcon className="h-8 w-8 mx-auto" />
              </div>
              <span className="text-sm font-medium text-gray-900">View Analytics</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <div className="text-gray-400 mb-2">
                <ChatBubbleLeftIcon className="h-8 w-8 mx-auto" />
              </div>
              <span className="text-sm font-medium text-gray-900">Check Inquiries</span>
            </button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

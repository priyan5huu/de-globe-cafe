import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../../components/ui/Button';
import toast from 'react-hot-toast';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { isAuthenticated, user } = useAuthStore();

  // Redirect if already authenticated as admin
  if (isAuthenticated && user?.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Demo credentials - in production, this would connect to your actual auth API
      if (email === 'admin@deglobecafe.com' && password === 'admin123') {
        // Simulate successful login
        const mockUser = {
          id: '1',
          email: 'admin@deglobecafe.com',
          name: 'Admin User',
          role: 'admin' as const,
          createdAt: new Date(),
        };
        const mockToken = 'mock-jwt-token';
        
        // Manually set the auth state for demo purposes
        useAuthStore.setState({
          user: mockUser,
          token: mockToken,
          isAuthenticated: true,
        });
        
        toast.success('Welcome back, Admin!');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-text to-brand-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        <div className="bg-gradient-to-br from-brand-light to-brand-background rounded-xl shadow-2xl p-8 border border-brand-accent/30 backdrop-blur-sm">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-text to-brand-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-3xl">DC</span>
              </div>
            </div>
            <h2 className="font-display font-bold text-3xl text-brand-text mb-2">
              Admin Login
            </h2>
            <p className="text-brand-secondary">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Demo Credentials Info */}
          <div className="mb-6 p-4 bg-brand-background rounded-lg border border-brand-accent">
            <h3 className="font-semibold text-sm text-brand-text mb-2">Demo Credentials:</h3>
            <p className="text-xs text-brand-secondary mb-1">
              <strong>Email:</strong> admin@deglobecafe.com
            </p>
            <p className="text-xs text-brand-secondary">
              <strong>Password:</strong> admin123
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-brand-accent rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 placeholder-brand-secondary/50"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-brand-text mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-brand-accent rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 placeholder-brand-secondary/50"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-secondary hover:text-brand-text transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-text to-brand-primary hover:from-brand-primary hover:to-brand-text"
              size="lg"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-brand-secondary">
              Need help?{' '}
              <a href="mailto:admin@deglobecafe.com" className="text-brand-primary hover:text-brand-secondary transition-colors">
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Back to site link */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-white/80 hover:text-white transition-colors text-sm"
          >
            ← Back to De Globe Café
          </a>
        </div>
      </motion.div>
    </div>
  );
};

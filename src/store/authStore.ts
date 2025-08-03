import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { AuthState, User } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        try {
          const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            email,
            password,
          });

          const { user, token } = response.data;
          
          // Set authorization header for future requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          set({
            user,
            token,
            isAuthenticated: true,
          });
        } catch (error: any) {
          throw new Error(error.response?.data?.message || 'Login failed');
        }
      },

      logout: () => {
        // Remove authorization header
        delete axios.defaults.headers.common['Authorization'];
        
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      checkAuth: () => {
        const { token } = get();
        if (token) {
          // Set authorization header
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          // Verify token validity
          axios.get(`${API_BASE_URL}/auth/verify`)
            .catch(() => {
              // Token is invalid, logout
              get().logout();
            });
        }
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
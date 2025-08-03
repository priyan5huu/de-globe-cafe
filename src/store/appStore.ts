import { create } from 'zustand';
import axios from 'axios';
import { StoreState, MenuItem, GalleryImage, BlogPost, ContactInquiry } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const useAppStore = create<StoreState>((set, get) => ({
  menuItems: [],
  galleryImages: [],
  blogPosts: [],
  inquiries: [],
  isLoading: false,
  error: null,

  // Menu Items
  fetchMenuItems: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/menu`);
      set({ menuItems: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Gallery Images
  fetchGalleryImages: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/gallery`);
      set({ galleryImages: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Blog Posts
  fetchBlogPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/blog`);
      set({ blogPosts: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Contact Inquiries (Admin only)
  fetchInquiries: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_BASE_URL}/inquiries`);
      set({ inquiries: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Submit Contact Form
  submitInquiry: async (inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/inquiries`, inquiry);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to submit inquiry');
    }
  },
}));
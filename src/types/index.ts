export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'tea' | 'pastries' | 'sandwiches' | 'salads' | 'desserts';
  isBestSeller: boolean;
  isAvailable: boolean;
  allergens?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  alt: string;
  category?: string;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  tags: string[];
  isPublished: boolean;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  createdAt: Date;
  status: 'new' | 'read' | 'replied';
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor';
  name: string;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

export interface StoreState {
  menuItems: MenuItem[];
  galleryImages: GalleryImage[];
  blogPosts: BlogPost[];
  inquiries: ContactInquiry[];
  isLoading: boolean;
  error: string | null;
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

// Pages
import { Home } from './pages/Home';
import { SimpleHome } from './pages/SimpleHome';
import { Menu } from './pages/Menu';
import { Gallery } from './pages/Gallery';
import { Story } from './pages/Story';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Admin Components
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminLogin } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';
import { MenuManagement } from './pages/admin/MenuManagement';
import { GalleryManagement } from './pages/admin/GalleryManagement';
import { BlogManagement } from './pages/admin/BlogManagement';

// Styles
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App">
            {/* Main Routes */}
            <Routes>
              <Route path="/" element={<SimpleHome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/story" element={<Story />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Admin portal - access via direct URL only */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="menu" element={<MenuManagement />} />
                <Route path="gallery" element={<GalleryManagement />} />
                <Route path="blog" element={<BlogManagement />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#3B2F2F',
                  color: '#F5F0E6',
                },
              }}
            />
          </div>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
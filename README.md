# De Globe Café - Premium Coffee Shop Website

A modern, responsive React website for De Globe Café featuring a complete content management system, SEO optimization, and analytics integration.

## 🌟 Features

### Public Website
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Menu**: Filterable menu with categories and availability status
- **Gallery**: Image gallery with lightbox and category filtering
- **Blog System**: Dynamic blog with category-based filtering
- **Contact Form**: Integrated contact form with validation
- **SEO Optimized**: Meta tags, structured data, and analytics integration
- **Performance**: Optimized loading with lazy loading and image optimization

### Admin Dashboard
- **Secure Authentication**: Login system with role-based access
- **Menu Management**: CRUD operations for menu items
- **Gallery Management**: Image upload and organization
- **Blog Management**: Create, edit, and publish blog posts
- **Analytics Dashboard**: Real-time statistics and insights
- **User Management**: Admin user controls

### Technical Features
- **React 18**: Latest React with TypeScript support
- **Vite**: Fast development and build tooling
- **Framer Motion**: Smooth animations and transitions
- **Zustand**: Lightweight state management
- **React Query**: Server state management and caching
- **React Router**: Client-side routing with nested routes
- **React Helmet**: SEO meta tag management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/deglobe-cafe.git
   cd deglobe-cafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/          # Admin-specific components
│   ├── common/         # Shared components (Header, Footer, Layout)
│   └── ui/             # Basic UI components (Button, Card, etc.)
├── config/             # Configuration files
│   └── seo.ts          # SEO and analytics configuration
├── hooks/              # Custom React hooks
├── pages/              # Page components
│   ├── admin/          # Admin dashboard pages
│   └── ...             # Public pages
├── store/              # State management (Zustand stores)
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎯 Admin Dashboard

### Access Admin Panel
1. Navigate to `/admin/login`
2. Use demo credentials:
   - **Email**: `admin@deglobecafe.com`
   - **Password**: `admin123`

### Admin Features

#### Dashboard Overview
- Real-time statistics and metrics
- Recent activity feed
- Popular menu items analytics
- Quick action buttons

#### Menu Management
- Add, edit, and delete menu items
- Category and availability management
- Price and description updates
- Featured item controls

#### Gallery Management
- Upload and organize images
- Category-based organization
- Featured image selection
- Bulk operations

#### Blog Management
- Rich text editor for blog posts
- Draft, publish, and archive workflow
- Category and tag management
- SEO optimization for posts

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_FACEBOOK_PIXEL_ID=XXXXXXXXXXXXXXX
VITE_HOTJAR_ID=XXXXXXX

# API Configuration
VITE_API_BASE_URL=https://api.deglobecafe.com
VITE_CONTACT_EMAIL=info@deglobecafe.com

# Site Configuration
VITE_SITE_URL=https://deglobecafe.com
VITE_SITE_NAME="De Globe Café"
```

### SEO Configuration
Update `src/config/seo.ts` with your specific details:

```typescript
export const seoConfig = {
  siteName: 'Your Café Name',
  siteUrl: 'https://yourcafe.com',
  description: 'Your café description',
  // ... other settings
};
```

## 📱 Responsive Design

The website is optimized for all device sizes:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Key responsive features:
- Collapsible navigation menu
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized images for different screens

## 🎨 Customization

### Colors and Theming
The color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#F5F0E6',   // Cream
    100: '#E8D5B7',  // Light Beige
    500: '#D2691E',  // Caramel
    600: '#8B4513',  // Saddle Brown
    900: '#3B2F2F',  // Espresso
  }
}
```

### Typography
- **Headers**: Inter font family
- **Body**: System font stack for performance
- **Responsive scaling**: Fluid typography with clamp()

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deployment Options

#### 1. Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

#### 2. Vercel
1. Import project from GitHub
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variables

#### 3. Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server for SPA (Single Page Application)

### Server Configuration
For proper routing, configure your server to serve `index.html` for all routes:

**Nginx Example:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache Example:**
```apache
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Get Measurement ID
3. Add to environment variables
4. Verify tracking in GA4 dashboard

### Google Tag Manager
1. Create GTM container
2. Get Container ID
3. Add to environment variables
4. Configure tags and triggers

### Performance Monitoring
- Core Web Vitals tracking
- User interaction analytics
- Conversion tracking for contact forms

## 🔒 Security

### Content Security Policy
Configured in `src/config/seo.ts`:
- Restricts resource loading to trusted domains
- Prevents XSS attacks
- Ensures secure external integrations

### Admin Authentication
- Secure login flow
- Session management
- Role-based access control
- CSRF protection

## 🧪 Testing

### Unit Tests
```bash
npm run test
# or
yarn test
```

### E2E Tests
```bash
npm run test:e2e
# or
yarn test:e2e
```

### Performance Testing
```bash
npm run lighthouse
# or
yarn lighthouse
```

## 📈 Performance Optimization

### Image Optimization
- WebP and AVIF format support
- Lazy loading implementation
- Responsive image sizing
- CDN integration ready

### Code Splitting
- Route-based code splitting
- Dynamic imports for large components
- Bundle size optimization

### Caching Strategy
- Service worker implementation
- API response caching
- Static asset caching

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

### Code Quality
- ESLint configuration for React and TypeScript
- Prettier for code formatting
- Husky for pre-commit hooks
- Conventional commits

## 🆘 Troubleshooting

### Common Issues

#### Build Errors
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear build cache: `npm run clean`
3. Check Node.js version compatibility

#### Performance Issues
1. Check bundle size: `npm run analyze`
2. Optimize images and assets
3. Review third-party dependencies

#### Deployment Issues
1. Verify environment variables
2. Check build output directory
3. Ensure server configuration for SPA

## 📞 Support

For technical support or questions:
- **Email**: support@deglobecafe.com
- **Documentation**: [Project Wiki](link-to-wiki)
- **Issues**: [GitHub Issues](link-to-issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern café websites and UI patterns
- **Icons**: Heroicons for consistent iconography
- **Images**: Pexels for high-quality stock photography
- **Fonts**: Google Fonts for typography

---

**Built with ❤️ for De Globe Café**

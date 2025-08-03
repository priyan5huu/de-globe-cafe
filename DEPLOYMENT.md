# Deployment Guide - De Globe Café Website

This guide covers deploying the De Globe Café website to various hosting platforms with optimal performance and security configurations.

## 🚀 Pre-Deployment Checklist

### Code Preparation
- [ ] All components build without errors
- [ ] SEO configuration updated with production URLs
- [ ] Analytics IDs configured in environment variables
- [ ] Admin credentials changed from defaults
- [ ] All images optimized for web delivery
- [ ] Meta tags and structured data verified

### Environment Configuration
- [ ] Production environment variables set
- [ ] API endpoints configured for production
- [ ] Contact email addresses updated
- [ ] Social media links verified
- [ ] Google Analytics and other tracking setup

## 🌐 Hosting Platform Options

### 1. Netlify (Recommended)

#### Why Netlify?
- **Automatic Builds**: Deploy directly from Git repositories
- **Edge Network**: Global CDN for fast loading
- **Form Handling**: Built-in contact form processing
- **SSL Certificates**: Automatic HTTPS with Let's Encrypt
- **Redirects**: Easy SPA routing configuration

#### Deployment Steps
1. **Connect Repository**
   - Sign up at [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub/GitLab repository
   - Select the De Globe Café repository

2. **Build Configuration**
   ```
   Build command: npm run build
   Publish directory: dist
   Node version: 18
   ```

3. **Environment Variables**
   Go to Site Settings > Environment Variables and add:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   VITE_GTM_ID=GTM-XXXXXXX
   VITE_FACEBOOK_PIXEL_ID=XXXXXXXXXXXXXXX
   VITE_SITE_URL=https://your-site.netlify.app
   ```

4. **Custom Domain** (Optional)
   - Go to Domain Settings
   - Add your custom domain
   - Configure DNS records as instructed

#### Netlify-Specific Features
- **Form Processing**: Contact form submissions automatically handled
- **Functions**: Serverless backend capabilities
- **Split Testing**: A/B testing built-in
- **Analytics**: Basic visitor analytics included

### 2. Vercel

#### Why Vercel?
- **Optimized for React**: Excellent React performance
- **Edge Functions**: Serverless compute at the edge
- **Automatic Previews**: Deploy preview for every commit
- **Performance**: Excellent Core Web Vitals scores

#### Deployment Steps
1. **Import Project**
   - Sign up at [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub repository

2. **Build Configuration**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**
   Add in Project Settings > Environment Variables:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   VITE_GTM_ID=GTM-XXXXXXX
   VITE_SITE_URL=https://your-project.vercel.app
   ```

4. **Custom Domain**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Configure DNS as instructed

### 3. GitHub Pages

#### Setup for GitHub Pages
1. **Repository Configuration**
   - Ensure code is in a public GitHub repository
   - Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. **Repository Settings**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### 4. Traditional Web Hosting

#### For cPanel/Shared Hosting
1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload contents of `dist` folder to `public_html`
   - Ensure `.htaccess` file includes SPA routing:

```apache
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

3. **Configure Environment**
   - Contact hosting provider for environment variable setup
   - May need to hardcode some configurations

## 🔧 Performance Optimization

### Image Optimization
1. **Compress Images**
   - Use tools like TinyPNG or ImageOptim
   - Target 80-90% quality for JPEGs
   - Convert to WebP where supported

2. **Responsive Images**
   - Implement srcset for different screen sizes
   - Use lazy loading for below-fold images

### Caching Strategy
1. **Static Assets**
   - Set long cache times for CSS, JS, and images
   - Use hashed filenames for cache busting

2. **HTML Caching**
   - Short cache times for HTML files
   - Use ETags for conditional requests

### Core Web Vitals
1. **Largest Contentful Paint (LCP)**
   - Optimize hero images
   - Use preload for critical resources
   - Minimize render-blocking resources

2. **First Input Delay (FID)**
   - Code splitting for non-critical JavaScript
   - Minimize main thread work

3. **Cumulative Layout Shift (CLS)**
   - Set explicit dimensions for images
   - Avoid dynamic content injection

## 🔒 Security Configuration

### HTTPS Setup
- **Automated**: Most platforms provide automatic HTTPS
- **Custom Certificates**: Upload SSL certificates if using custom domain
- **Force HTTPS**: Redirect all HTTP traffic to HTTPS

### Security Headers
Add these headers via platform configuration or `.htaccess`:

```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

### Environment Security
- **Secure Secrets**: Never commit API keys to repository
- **Environment Variables**: Use platform-specific environment variable management
- **Admin Access**: Change default admin credentials immediately

## 📊 Analytics and Monitoring

### Google Analytics Setup
1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property for your domain
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Configure Goals**
   - Contact form submissions
   - Menu page visits
   - Blog post engagement

### Search Console
1. **Verify Ownership**
   - Add property in [Search Console](https://search.google.com/search-console)
   - Verify via HTML file or meta tag

2. **Submit Sitemap**
   - Generate sitemap.xml
   - Submit to Search Console
   - Monitor indexing status

### Performance Monitoring
1. **PageSpeed Insights**
   - Regularly test with [PageSpeed Insights](https://pagespeed.web.dev)
   - Monitor Core Web Vitals scores
   - Address performance recommendations

2. **Uptime Monitoring**
   - Set up monitoring with services like UptimeRobot
   - Configure alerts for downtime
   - Monitor from multiple locations

## 🛠️ Maintenance and Updates

### Regular Updates
1. **Dependencies**
   ```bash
   npm audit
   npm update
   ```

2. **Security Patches**
   - Monitor for security advisories
   - Update vulnerable packages promptly
   - Test updates in staging environment

### Content Updates
1. **Menu Changes**
   - Update through admin dashboard
   - Verify changes on live site
   - Test mobile responsiveness

2. **Blog Content**
   - Regular publishing schedule
   - SEO optimization for new posts
   - Social media promotion

### Backup Strategy
1. **Code Repository**
   - Git repository serves as code backup
   - Tag releases for easy rollback
   - Maintain development and production branches

2. **Content Backup**
   - Export admin content regularly
   - Store backups securely
   - Test restore procedures

## 🆘 Troubleshooting

### Common Deployment Issues

#### Build Failures
1. **Check Node Version**
   - Ensure platform uses Node.js 18+
   - Update package.json engines field if needed

2. **Missing Dependencies**
   - Verify all dependencies in package.json
   - Clear cache and reinstall: `npm ci`

3. **Environment Variables**
   - Check all required variables are set
   - Verify variable names match exactly

#### Routing Issues
1. **404 Errors on Refresh**
   - Configure SPA routing redirects
   - Check server configuration
   - Verify redirect rules

2. **Asset Loading**
   - Check base path configuration
   - Verify asset URLs in build output
   - Test from different devices/networks

#### Performance Issues
1. **Slow Loading**
   - Run Lighthouse audit
   - Optimize images and assets
   - Check CDN configuration

2. **SEO Problems**
   - Verify meta tags in page source
   - Check structured data validation
   - Submit updated sitemap

### Emergency Procedures
1. **Site Down**
   - Check hosting platform status
   - Verify DNS configuration
   - Contact hosting support if needed

2. **Quick Rollback**
   - Revert to previous Git commit
   - Redeploy last known good version
   - Investigate issue in development

## 📞 Support Contacts

### Platform Support
- **Netlify**: [support.netlify.com](https://support.netlify.com)
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **GitHub**: [support.github.com](https://support.github.com)

### Technical Resources
- **React Documentation**: [react.dev](https://react.dev)
- **Vite Documentation**: [vitejs.dev](https://vitejs.dev)
- **Web.dev**: [web.dev](https://web.dev) for performance guides

---

**Remember to test thoroughly in a staging environment before deploying to production!**

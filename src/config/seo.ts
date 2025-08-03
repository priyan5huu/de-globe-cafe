// SEO Configuration for De Globe Café
export const seoConfig = {
  // Basic Site Information
  siteName: 'De Globe Café',
  siteUrl: 'https://deglobecafe.com',
  description: 'Experience exceptional coffee, artisan pastries, and gourmet food at De Globe Café. Your perfect spot for coffee culture, community events, and memorable dining experiences.',
  
  // Social Media
  social: {
    twitter: '@deglobecafe',
    facebook: 'deglobecafe',
    instagram: 'deglobecafe',
    linkedin: 'company/deglobecafe',
  },
  
  // Default Meta Tags
  defaultMeta: {
    title: 'De Globe Café - Premium Coffee & Artisan Food Experience',
    description: 'Experience exceptional coffee, artisan pastries, and gourmet food at De Globe Café. Your perfect spot for coffee culture, community events, and memorable dining experiences.',
    keywords: 'coffee shop, café, artisan coffee, specialty coffee, pastries, gourmet food, community café, coffee culture, espresso, cappuccino, latte, fresh pastries, organic coffee',
    author: 'De Globe Café Team',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    language: 'en-US',
  },
  
  // Open Graph (Facebook) Tags
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'De Globe Café',
    image: '/images/og-image.jpg',
    imageAlt: 'De Globe Café - Premium Coffee Experience',
    imageWidth: 1200,
    imageHeight: 630,
  },
  
  // Twitter Card Tags
  twitterCard: {
    card: 'summary_large_image',
    site: '@deglobecafe',
    creator: '@deglobecafe',
    image: '/images/twitter-card.jpg',
    imageAlt: 'De Globe Café - Premium Coffee Experience',
  },
  
  // Structured Data (JSON-LD)
  structuredData: {
    restaurant: {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'De Globe Café',
      description: 'Premium coffee shop and café offering exceptional coffee, artisan pastries, and gourmet food in a cozy atmosphere.',
      url: 'https://deglobecafe.com',
      telephone: '+1-555-123-4567',
      email: 'info@deglobecafe.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Coffee Street',
        addressLocality: 'Downtown',
        addressRegion: 'State',
        postalCode: '12345',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.7589',
        longitude: '-73.9851',
      },
      openingHours: [
        'Mo-Fr 07:00-20:00',
        'Sa-Su 08:00-21:00',
      ],
      servesCuisine: ['Coffee', 'Pastries', 'Light Meals', 'Breakfast', 'Lunch'],
      priceRange: '$$',
      image: 'https://deglobecafe.com/images/cafe-exterior.jpg',
      logo: 'https://deglobecafe.com/images/logo.png',
      acceptsReservations: true,
      paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Mobile Payment'],
    },
    
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'De Globe Café',
      description: 'Premium coffee shop and café offering exceptional coffee, artisan pastries, and gourmet food.',
      url: 'https://deglobecafe.com',
      telephone: '+1-555-123-4567',
      email: 'info@deglobecafe.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Coffee Street',
        addressLocality: 'Downtown',
        addressRegion: 'State',
        postalCode: '12345',
        addressCountry: 'US',
      },
      openingHours: [
        'Mo-Fr 07:00-20:00',
        'Sa-Su 08:00-21:00',
      ],
      image: 'https://deglobecafe.com/images/cafe-exterior.jpg',
      logo: 'https://deglobecafe.com/images/logo.png',
    },
    
    breadcrumbList: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [],
    },
  },
  
  // Analytics Configuration
  analytics: {
    // Google Analytics 4
    googleAnalytics: {
      measurementId: 'G-XXXXXXXXXX', // Replace with actual GA4 Measurement ID
      config: {
        page_title: 'De Globe Café',
        custom_map: {
          custom_parameter: 'page_location',
        },
      },
    },
    
    // Google Tag Manager
    googleTagManager: {
      gtmId: 'GTM-XXXXXXX', // Replace with actual GTM ID
    },
    
    // Facebook Pixel
    facebookPixel: {
      pixelId: 'XXXXXXXXXXXXXXX', // Replace with actual Facebook Pixel ID
    },
    
    // Hotjar
    hotjar: {
      hjid: 'XXXXXXX', // Replace with actual Hotjar ID
      hjsv: '6',
    },
  },
  
  // Performance and Core Web Vitals
  performance: {
    // Image optimization settings
    images: {
      formats: ['webp', 'avif', 'jpg'],
      quality: 85,
      loading: 'lazy',
    },
    
    // Resource hints
    resourceHints: {
      preconnect: [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
      ],
      prefetch: [
        '/images/hero-bg.webp',
        '/images/menu-bg.webp',
      ],
    },
  },
  
  // Security Headers
  security: {
    contentSecurityPolicy: {
      'default-src': ["'self'"],
      'script-src': [
        "'self'",
        "'unsafe-inline'",
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
        'https://static.hotjar.com',
        'https://script.hotjar.com',
      ],
      'style-src': [
        "'self'",
        "'unsafe-inline'",
        'https://fonts.googleapis.com',
      ],
      'font-src': [
        "'self'",
        'https://fonts.gstatic.com',
      ],
      'img-src': [
        "'self'",
        'data:',
        'https:',
        'https://www.google-analytics.com',
      ],
      'connect-src': [
        "'self'",
        'https://www.google-analytics.com',
        'https://analytics.google.com',
      ],
    },
  },
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: 'De Globe Café - Premium Coffee & Artisan Food Experience',
    description: 'Experience exceptional coffee, artisan pastries, and gourmet food at De Globe Café. Your perfect spot for coffee culture, community events, and memorable dining experiences.',
    keywords: 'coffee shop, café, artisan coffee, specialty coffee, pastries, gourmet food, community café, coffee culture',
    url: '/',
  },
  
  menu: {
    title: 'Our Menu - Premium Coffee & Artisan Food | De Globe Café',
    description: 'Discover our carefully crafted menu featuring premium coffee, artisan pastries, gourmet sandwiches, and fresh salads. Quality ingredients, exceptional taste.',
    keywords: 'coffee menu, café menu, artisan pastries, gourmet food, specialty coffee drinks, espresso, cappuccino, latte',
    url: '/menu',
  },
  
  gallery: {
    title: 'Gallery - Coffee Culture & Ambiance | De Globe Café',
    description: 'Explore our café gallery showcasing our cozy atmosphere, delicious food, skilled baristas, and vibrant community events.',
    keywords: 'café gallery, coffee shop photos, ambiance, interior design, food photography, coffee art',
    url: '/gallery',
  },
  
  story: {
    title: 'Our Story - Coffee Passion & Community | De Globe Café',
    description: 'Learn about our journey from coffee passion to community hub. Discover our commitment to quality, sustainability, and exceptional café experiences.',
    keywords: 'coffee story, café history, coffee passion, community, sustainability, quality coffee',
    url: '/story',
  },
  
  blog: {
    title: 'Coffee Blog - Tips, Culture & Stories | De Globe Café',
    description: 'Explore coffee culture, brewing tips, café stories, and community news. Your source for everything coffee and café related.',
    keywords: 'coffee blog, coffee culture, brewing tips, café news, coffee stories, barista tips',
    url: '/blog',
  },
  
  contact: {
    title: 'Contact Us - Visit De Globe Café | Location & Hours',
    description: 'Visit De Globe Café for exceptional coffee and food. Find our location, hours, contact information, and get directions to our café.',
    keywords: 'contact café, café location, café hours, visit coffee shop, directions, contact information',
    url: '/contact',
  },
};

// Generate structured data for specific pages
export const generateStructuredData = (pageType: keyof typeof pageConfigs, data?: any) => {
  const baseData = seoConfig.structuredData;
  
  switch (pageType) {
    case 'menu':
      return {
        ...baseData.restaurant,
        hasMenu: {
          '@type': 'Menu',
          name: 'De Globe Café Menu',
          description: 'Our carefully crafted menu featuring premium coffee and artisan food',
        },
      };
      
    case 'blog':
      if (data?.post) {
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: data.post.title,
          description: data.post.excerpt,
          author: {
            '@type': 'Person',
            name: data.post.author,
          },
          datePublished: data.post.publishDate,
          image: data.post.image,
          publisher: {
            '@type': 'Organization',
            name: 'De Globe Café',
            logo: 'https://deglobecafe.com/images/logo.png',
          },
        };
      }
      return baseData.restaurant;
      
    default:
      return baseData.restaurant;
  }
};

export default seoConfig;

// Sitemap generation utility for De Globe Café
import { seoConfig } from '../config/seo';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (): string => {
  const baseUrl = seoConfig.siteUrl;
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/menu`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/gallery`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/story`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },
  ];

  // Add blog post URLs (these would typically come from your CMS/API)
  const blogPosts = [
    'the-art-of-perfect-coffee-brewing',
    'our-journey-from-bean-to-cup',
    'seasonal-menu-updates',
    'community-events-at-de-globe-cafe',
  ];

  blogPosts.forEach(slug => {
    urls.push({
      loc: `${baseUrl}/blog/${slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = (): string => {
  const baseUrl = seoConfig.siteUrl;
  
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /`;
};

// Generate structured data for rich snippets
export const generateRichSnippets = () => {
  return {
    restaurant: {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'De Globe Café',
      description: 'Premium coffee shop offering exceptional coffee, artisan pastries, and gourmet food.',
      url: seoConfig.siteUrl,
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
      servesCuisine: ['Coffee', 'Pastries', 'Light Meals'],
      priceRange: '$$',
      image: `${seoConfig.siteUrl}/images/cafe-exterior.jpg`,
      logo: `${seoConfig.siteUrl}/images/logo.png`,
      acceptsReservations: true,
      paymentAccepted: ['Cash', 'Credit Card', 'Mobile Payment'],
      hasMenu: {
        '@type': 'Menu',
        name: 'De Globe Café Menu',
        url: `${seoConfig.siteUrl}/menu`,
      },
    },
    
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'De Globe Café',
      url: seoConfig.siteUrl,
      logo: `${seoConfig.siteUrl}/images/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
      sameAs: [
        'https://www.facebook.com/deglobecafe',
        'https://www.instagram.com/deglobecafe',
        'https://twitter.com/deglobecafe',
      ],
    },
    
    webSite: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'De Globe Café',
      url: seoConfig.siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  };
};

export default {
  generateSitemap,
  generateRobotsTxt,
  generateRichSnippets,
};

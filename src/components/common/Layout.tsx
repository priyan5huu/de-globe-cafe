import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'De Globe Café - Artisanal Coffee & Fresh Cuisine',
  description = 'Experience the perfect blend of artisanal coffee, fresh cuisine, and warm hospitality at De Globe Café. Located in the heart of the city.',
  keywords = 'coffee, cafe, restaurant, artisanal, fresh food, downtown, specialty drinks',
  image = '/images/og-image.jpg',
}) => {
  const fullTitle = title.includes('De Globe Café') ? title : `${title} | De Globe Café`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
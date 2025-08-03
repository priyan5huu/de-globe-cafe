import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig, pageConfigs, generateStructuredData } from '../../config/seo';

interface SEOProps {
  page?: keyof typeof pageConfigs;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
  structuredData?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  page,
  title,
  description,
  keywords,
  image,
  url,
  noIndex = false,
  structuredData,
  breadcrumbs = [],
}) => {
  // Get page-specific config or use defaults
  const pageConfig = page ? pageConfigs[page] : null;
  
  const metaTitle = title || pageConfig?.title || seoConfig.defaultMeta.title;
  const metaDescription = description || pageConfig?.description || seoConfig.defaultMeta.description;
  const metaKeywords = keywords || pageConfig?.keywords || seoConfig.defaultMeta.keywords;
  const metaImage = image || seoConfig.openGraph.image;
  const metaUrl = url || (pageConfig?.url ? `${seoConfig.siteUrl}${pageConfig.url}` : seoConfig.siteUrl);
  
  // Generate breadcrumb structured data
  const breadcrumbData = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${item.url}`,
    })),
  } : null;
  
  // Get structured data
  const pageStructuredData = structuredData || (page ? generateStructuredData(page) : seoConfig.structuredData.restaurant);
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={seoConfig.defaultMeta.author} />
      <meta name="viewport" content={seoConfig.defaultMeta.viewport} />
      <meta name="language" content={seoConfig.defaultMeta.language} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : seoConfig.defaultMeta.robots} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaUrl} />
      
      {/* Open Graph (Facebook) */}
      <meta property="og:type" content={seoConfig.openGraph.type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={seoConfig.openGraph.imageAlt} />
      <meta property="og:image:width" content={seoConfig.openGraph.imageWidth.toString()} />
      <meta property="og:image:height" content={seoConfig.openGraph.imageHeight.toString()} />
      <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
      <meta property="og:locale" content={seoConfig.openGraph.locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={seoConfig.twitterCard.card} />
      <meta name="twitter:site" content={seoConfig.twitterCard.site} />
      <meta name="twitter:creator" content={seoConfig.twitterCard.creator} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={seoConfig.twitterCard.imageAlt} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3B2F2F" />
      <meta name="msapplication-TileColor" content="#3B2F2F" />
      
      {/* Preconnect for Performance */}
      {seoConfig.performance.resourceHints.preconnect.map((url: string) => (
        <link key={url} rel="preconnect" href={url} />
      ))}
      
      {/* DNS Prefetch */}
      {seoConfig.performance.resourceHints.preconnect.map((url: string) => (
        <link key={`dns-${url}`} rel="dns-prefetch" href={url} />
      ))}
      
      {/* Structured Data */}
      {pageStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(pageStructuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
      
      {/* Google Analytics */}
      {seoConfig.analytics.googleAnalytics.measurementId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${seoConfig.analytics.googleAnalytics.measurementId}`} />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${seoConfig.analytics.googleAnalytics.measurementId}', {
                page_title: '${metaTitle}',
                page_location: '${metaUrl}'
              });
            `}
          </script>
        </>
      )}
      
      {/* Google Tag Manager */}
      {seoConfig.analytics.googleTagManager.gtmId && (
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${seoConfig.analytics.googleTagManager.gtmId}');
          `}
        </script>
      )}
      
      {/* Facebook Pixel */}
      {seoConfig.analytics.facebookPixel.pixelId && (
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${seoConfig.analytics.facebookPixel.pixelId}');
            fbq('track', 'PageView');
          `}
        </script>
      )}
      
      {/* Hotjar */}
      {seoConfig.analytics.hotjar.hjid && (
        <script>
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${seoConfig.analytics.hotjar.hjid},hjsv:${seoConfig.analytics.hotjar.hjsv}};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
      )}
    </Helmet>
  );
};

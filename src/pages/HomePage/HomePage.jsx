

import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import Reviews from '@/components/view/Reviews/Reviews'
import { TrustedService } from '@/components/view/TrustedService/TrustedService'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import React from 'react'
import BlogPage from '../BlogPage/BlogPage'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import { PremiumServiceSlider } from '@/components/view/Card/ServiceScenarios'
import { SeoHead } from '@/seo/SeoHead'
import Script from 'next/script'
import ServicesSection from '@/components/Services'
import GMBReviews from '@/components/view/GmbReviews/GmbReviews'
import ServiceAreas from '@/components/view/ServiceArea/ServiceAreas'
import ModernHeroBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import HeroBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import HomeBlogCarousel from '@/components/view/Home/BlogCarousel/BlogCarousel'
import { headers } from 'next/headers'


export async function generateMetadata() {
  const headersList = headers();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.24carrepairdubai.com';
  const fullUrl = `${baseUrl}/`;

  return {
    title: '24/7 Mobile Car Repair Dubai | Fast On-Site Auto Service',
    description: 'Get immediate and professional mobile car repair services anywhere in Dubai, 24/7. Expert technicians for battery replacement, AC repair, oil change, tire services, and emergency roadside assistance. Fast, reliable, and affordable auto repair at your location.',
    keywords: ['mobile car repair Dubai', '24/7 car service Dubai', 'car battery replacement Dubai', 'AC repair Dubai', 'oil change Dubai', 'roadside assistance Dubai', 'emergency car repair Dubai', 'auto service Dubai', 'on-site car repair'],
    alternates: {
      canonical: fullUrl,
    },
    robots: 'index, follow',
    openGraph: {
      title: '24/7 Mobile Car Repair Dubai | Fast On-Site Auto Service',
      description: 'Get immediate and professional mobile car repair services anywhere in Dubai, 24/7. Expert technicians for battery replacement, AC repair, oil change, tire services, and emergency roadside assistance.',
      url: fullUrl,
      siteName: '24 Car Repair Dubai',
      images: [
        {
          url: `${baseUrl}/images/og-home-image.jpg`, 
          width: 1200,
          height: 630,
          alt: 'Mobile Car Repair Service in Dubai',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '24/7 Mobile Car Repair Dubai | Fast On-Site Auto Service',
      description: 'Get immediate and professional mobile car repair services anywhere in Dubai, 24/7. Expert technicians for battery replacement, AC repair, oil change, tire services, and emergency roadside assistance.',
      images: [`${baseUrl}/images/twitter-home-image.jpg`], 
    },
  };
}

export default function HomePage() {



    return (
        <div>

            <HeroBanner />
            {/* <PremiumServiceSlider /> */}
            <ServicesSection />
            {/* <FeaturedServices /> */}
            {/* <GalleryCarousel />
            <VideoSlider /> */}
            <TrustedService />
            {/* <BlogPage /> */}
            <HomeBlogCarousel />
            <WhoWeAre />
            {/* <GetTouch /> */}
            <MapComponent />
            {/* <GMBReviews /> */}
            <Reviews />
            <FAQSection />
            {/* <ServiceAreas /> */}
        </div>
    )
}

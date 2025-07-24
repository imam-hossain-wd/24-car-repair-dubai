

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

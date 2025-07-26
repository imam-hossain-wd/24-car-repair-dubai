import { Button } from "@/components/ui/button";
import { TrustedService } from "@/components/view/TrustedService/TrustedService";
import { WhoWeAre } from "@/components/view/WhoWeAre/WhoWeAre";
import {  Phone, ShieldCheck,  Wrench } from "lucide-react";


export async function generateMetadata() {
  const headersList = headers();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.24carrepairdubai.com';
  const fullUrl = `${baseUrl}/about`;

  return {
    title: 'About Us | 24/7 Mobile Car Repair Dubai',
    description: 'Learn more about 24/7 Mobile Car Repair Dubai – your trusted provider of on-site auto repair services across Dubai. Discover our mission, values, and commitment to delivering fast, reliable, and professional car maintenance and emergency assistance.',
    keywords: ['about 24/7 car repair Dubai', 'mobile auto service company', 'Dubai car repair mission', 'our values car service', 'trusted car repair Dubai'],
    alternates: {
      canonical: fullUrl,
    },
    robots: 'index, follow',
    openGraph: {
      title: 'About Us | 24/7 Mobile Car Repair Dubai',
      description: 'Learn about our mission, values, and commitment to fast, reliable, and professional mobile car repair services in Dubai.',
      url: fullUrl,
      siteName: '24 Car Repair Dubai',
      images: [
        {
          url: `${baseUrl}/images/og-about-image.jpg`, // Replace with your actual OG image path for about page
          width: 1200,
          height: 630,
          alt: 'About 24/7 Mobile Car Repair Dubai',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us | 24/7 Mobile Car Repair Dubai',
      description: 'Learn about our mission, values, and commitment to fast, reliable, and professional mobile car repair services in Dubai.',
      images: [`${baseUrl}/images/twitter-about-image.jpg`],
    },
  };
}

export default function AboutPage() {
  return (
    <>
     

      {/* Hero Section */}
      {/* <section className="relative h-[320px]  w-full bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden"> */}
<section className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[450px] w-full bg-gradient-to-br from-[#003053] to-[#0066CC] overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-10 bg-[url('/images/dot-grid-pattern.svg')] bg-cover md:bg-auto"></div>
  <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-[#B91C1C]/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl -mr-32 sm:-mr-40 md:-mr-60 -mt-32 sm:-mt-40 md:-mt-60"></div>
  <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-white/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl -ml-20 sm:-ml-30 md:-ml-40 -mb-20 sm:-mb-30 md:-mb-40"></div>

  {/* Content */}
  <div className="container h-full mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center relative z-10 py-10 sm:py-12 md:py-14">
    
    {/* Badge */}
    <div className="mb-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 inline-flex items-center gap-2 animate-fade-in">
      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white">
        <ShieldCheck className="w-3 h-3 text-[#003053]" />
      </div>
      <span className="text-white text-xs sm:text-sm font-medium tracking-wide">TRUSTED IN DUBAI SINCE 2010</span>
    </div>

    {/* Heading */}
    <h1 className=" font-bold text-white my-4 sm:mb-3 leading-snug max-w-3xl">
      <span className="text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-2 bg-clip-text bg-gradient-to-r from-amber-300 to-white">24 Car Service Dubai</span>
      <br />
      <span className="text-xl sm:text-2xl md:text-4xl mt-1 block">
        <span className="text-white">Your Trusted </span>
        <span className="underline decoration-amber-400 decoration-2 underline-offset-4">Automotive Partner</span>
      </span>
    </h1>

    {/* Subheading */}
    <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto mb-5 px-2">
      Premium 24/7 mobile car services with certified technicians and transparent pricing across all Dubai
    </p>

    {/* Action Buttons - side-by-side, linked */}
    <div className="flex  sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto justify-center">
      <Button 
        className="h-10 sm:h-12 md:h-12 px-4 sm:px-6 md:px-8 bg-amber-400 hover:bg-amber-500 text-[#003053] text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
        size="sm"
      >
        <Wrench className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        Our Services
      </Button>
      <Button 
        
        className="h-10 sm:h-12 md:h-12 px-4 sm:px-6 md:px-8 border border-white sm:border-2 text-white hover:bg-white/10 text-sm sm:text-base md:text-lg font-semibold"
        size="sm"
      >
        <Phone className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        +971 50 669 5990
      </Button>
    </div>

    {/* Stats - compact and responsive */}
    {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
      {[
        { value: "15+", label: "Years", icon: <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" /> },
        { value: "10K+", label: "Cars", icon: <Car className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" /> },
        { value: "50+", label: "Techs", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" /> },
        { value: "24/7", label: "Service", icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" /> }
      ].map((stat, i) => (
        <div 
          key={i} 
          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:border-amber-400/50 transition-colors text-center"
        >
          <div className="flex flex-col items-center gap-1">
            {stat.icon}
            <span className="text-base sm:text-lg font-bold text-white">{stat.value}</span>
            <span className="text-xs text-white/80">{stat.label}</span>
          </div>
        </div>
      ))}
    </div> */}
  </div>
</section>



      {/* Who We Are Section */}
<WhoWeAre />
      

      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="my-12 border-t border-gray-200" />
      </div>

      {/* Trusted Service Section */}
      <TrustedService />

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Ready to Experience the Best Car Service in Dubai?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            From emergency repairs to routine maintenance, our dedicated team is here to help 24/7.
          </p>
          <a
            href="/book-service"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition"
          >
            Book a Service Now
          </a>
        </div>
      </section>
    </>
  );
}

import { Button } from "@/components/ui/button";
import { TrustedService } from "@/components/view/TrustedService/TrustedService";
import { WhoWeAre } from "@/components/view/WhoWeAre/WhoWeAre";
import { CalendarCheck, Car, CheckCircle, Clock, Phone, ShieldCheck, Users, Wrench } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import aboutimage from '../../assets/images/gallery-2.jpg'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | 24CarServiceDubai</title>
        <meta
          name="description"
          content="Learn more about 24CarServiceDubai – your trusted partner for automotive care in Dubai. Meet our team, understand our mission, and explore our award-winning services."
        />
      </Head>

      {/* Hero Section */}
      {/* <section className="relative h-[320px]  w-full bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden"> */}
<section className="relative h-[400px] sm:h-[450px] md:h-[550px] w-full bg-gradient-to-br from-[#003053] to-[#0066CC] overflow-hidden">
  {/* Decorative elements - responsive sizes */}
  <div className="absolute inset-0 opacity-10 bg-[url('/images/dot-grid-pattern.svg')] bg-cover md:bg-auto"></div>
  <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-[#B91C1C]/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl -mr-32 sm:-mr-40 md:-mr-60 -mt-32 sm:-mt-40 md:-mt-60"></div>
  <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-white/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl -ml-20 sm:-ml-30 md:-ml-40 -mb-20 sm:-mb-30 md:-mb-40"></div>

  {/* Content container */}
  <div className="container h-full mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center relative z-10">
    {/* Trust badge - responsive sizing */}
    <div className="mb-2 sm:mb-4 md:mb-3 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-white/20 backdrop-blur-sm md:backdrop-blur-md rounded-full border border-white/30 inline-flex items-center gap-2 sm:gap-3 animate-fade-in">
      <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white">
        <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#003053]" />
      </div>
      <span className="text-white text-xs sm:text-sm font-medium tracking-wide sm:tracking-wider">TRUSTED IN DUBAI SINCE 2010</span>
    </div>
    
    {/* Main heading - responsive sizing */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-4 sm:mb-4 md:mb-6 leading-snug sm:leading-tight max-w-4xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">24 Car Service Dubai</span><br className="hidden sm:block" />
      <div className="text-4xl">
        <span className="text-white">Your Trusted</span> <span className="underline decoration-amber-400 decoration-2 sm:decoration-3 underline-offset-4 sm:underline-offset-8">Automotive Partner</span>
      </div>
    </h1>
    
    {/* Subheading - responsive sizing */}
    <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-6 px-2">
      Premium 24/7 mobile car services with certified technicians and transparent pricing across all Dubai
    </p>
    
    {/* Action buttons - responsive stacking */}
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

    {/* Stats grid - responsive layout */}
    <div className="mt-6 sm:mt-8 md:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full max-w-4xl">
      {[
        { value: "15+", label: "Years Experience", icon: <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /> },
        { value: "10K+", label: "Cars Serviced", icon: <Car className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /> },
        { value: "50+", label: "Certified Techs", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /> },
        { value: "24/7", label: "Availability", icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /> }
      ].map((stat, index) => (
        <div 
          key={index} 
          className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20 hover:border-amber-400/50 transition-colors"
        >
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <div className="text-amber-300">{stat.icon}</div>
            <span className="text-lg sm:text-xl md:text-xl font-bold text-white">{stat.value}</span>
            <span className="text-xs sm:text-sm text-white/80">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Floating mechanic illustration - responsive positioning */}
  {/* <div className="absolute bottom-0 right-0 w-1/2 h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-tl-2xl overflow-hidden opacity-70 md:opacity-100">
    <Image
      src={aboutimage}
      alt="24 Car Service mechanic"
      fill
      className="object-contain object-right-bottom"
      priority
      sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 30vw"
    />
  </div> */}
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

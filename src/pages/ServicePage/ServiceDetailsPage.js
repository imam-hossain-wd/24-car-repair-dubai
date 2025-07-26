import { services } from '@/data/services';
import Image from 'next/image';
import Link from 'next/link';
import {
  Battery,
  Check,
  Clock,
  Shield,
  MapPin,
  Phone,
  ChevronRight,
  CalendarCheck,
  Star,
  Wrench,
  ArrowRight,
  Car,
  AlertTriangle,
  HardHat,
  Fan,
  Droplet,
  Settings,
  Gauge
} from 'lucide-react';
import ServiceCard from '@/components/view/Card/ServiceCard';
import NotFound from '@/app/not-found';
import ServiceSchema from '@/components/Schemas/ServiceSchema';

export async function generateMetadata({ params }) {

  const service = getServiceDataBySlug(params.slug);
  const headersList = headers();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.24carrepairdubai.com'; 
  const fullUrl = `${baseUrl}/services/${params.slug}`;

  if (!service) {
    return {
      title: 'Service Not Found | 24/7 Mobile Car Repair Dubai',
      description: 'The requested car repair service could not be found. Please check our other services or return to the homepage.',
      robots: 'noindex, nofollow',
    };
  }

  const combinedDescription = `${service.intro.heading}. ${service.intro.content} Key features of our ${service.title.toLowerCase()} service include: ${service.features.join('. ')}. Ensure your vehicle is in top condition with our expert mobile service in Dubai. Book now for fast and reliable car repair at your location.`;

  return {
    title: `${service.title} | 24/7 Mobile Car Repair Dubai`,
    description: combinedDescription,
    alternates: {
      canonical: fullUrl, 
    },
    robots: 'index, follow',
    openGraph: {
      title: service.title,
      description: combinedDescription,
      url: fullUrl,
      siteName: '24 Car Repair Dubai', 
      images: [
        {
          url: service.service_image, 
          width: 1200, 
          height: 630,
          alt: service.title,
        },
      ],
      locale: 'en_US',
      type: 'article', 
    },
    twitter: {
      card: 'summary_large_image', 
      title: service.title,
      description: combinedDescription,
      images: [service.service_image],
    },
  };
}

export default function ServiceDetailsPage({ slug }) {

    const service = services.find(
    (s) => s.slug == slug
  ) 

  if (!service) {
    return NotFound()
  }

  // const service = services.find(s => s.slug === params.slug);
  const otherServices = services.filter(s => s.slug !== slug).slice(0, 4);


  const getServiceIcon = () => {
    const serviceIcons = {
      Battery: <Battery className="h-6 w-6" />,
      AC: <Fan className="h-6 w-6" />,
      Oil: <Droplet className="h-6 w-6" />,
      Engine: <Settings className="h-6 w-6" />,
      Brake: <AlertTriangle className="h-6 w-6" />,
      Radiator: <Gauge className="h-6 w-6" />,
      Gearbox: <Gauge className="h-6 w-6" />,
      Maintenance: <Car className="h-6 w-6" />
    };

    const matchedIcon = Object.entries(serviceIcons).find(([key]) => 
      service?.title?.includes(key)
    );

    return matchedIcon?.[1] ?? <Wrench className="h-6 w-6" />;
  };

  return (
    <div className="bg-white dark:bg-gray-900">

       <ServiceSchema serviceData={service} />
      {/* Hero Section with Animated Gradient */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
              <Star className="h-4 w-4 mr-2" />
              Premium Dubai Service
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {service.intro.subheading}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={`/booking?service=${service.slug}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                {service.ctaSection.buttonText}
              </Link>
              <Link 
                href="#service-details"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Learn More
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Service Image */}
      <div className="container px-4 mx-auto -mt-16 relative z-20">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-4 border-white dark:border-gray-800 overflow-hidden">
          <Image
            src={service.service_image}
            alt={service.title}
            fill
            className="object-contain p-4"
          />
        </div>
      </div>

      {/* Service Details Section */}
      <section id="service-details" className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Service Overview Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 mb-16 transition-all hover:shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {getServiceIcon()}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {service.intro.heading}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                      {service.intro.content}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      Service Highlights
                    </h3>
                    
                    <ul className="space-y-5 mb-8">
                      <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Service Duration</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">30-45 minutes average</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <Shield className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Warranty</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">12-24 month warranty</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <HardHat className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Technicians</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Certified professionals</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Coverage</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">All Dubai areas</p>
                        </div>
                      </li>
                    </ul>
                    
                    <Link
                      href={`/booking?service=${service.slug}`}
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                      <CalendarCheck className="h-5 w-5" />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-0.5 bg-primary"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Why Choose Our Service?
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "24/7 mobile service across Dubai",
                    "Certified technicians with specialized training",
                    "Premium quality parts with warranties",
                    "Fast response times (typically under 1 hour)",
                    "Transparent pricing with no hidden fees",
                    "Emergency roadside assistance available"
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-all shadow-sm hover:shadow-md group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Check className="h-5 w-5" />
                        </div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          {point}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Process Section */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-0.5 bg-primary"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Our Service Process
                  </h2>
                </div>
                
                <div className="relative">
                  <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-transparent" />
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: "Initial Diagnosis",
                        description: "Our technician performs a comprehensive assessment to identify the issue."
                      },
                      {
                        title: "Service Recommendation",
                        description: "We provide transparent recommendations and pricing options."
                      },
                      {
                        title: "Professional Service",
                        description: "Certified technicians perform the service using premium parts."
                      },
                      {
                        title: "Quality Testing",
                        description: "We thoroughly test all systems before completion."
                      },
                      {
                        title: "Final Handover",
                        description: "We explain the work done and provide warranty documentation."
                      }
                    ].map((step, index) => (
                      <div key={index} className="relative pl-16 group">
                        <div className="absolute left-0 top-1 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-0.5 bg-primary"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Frequently Asked Questions
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      question: "How quickly can you service my vehicle?",
                      answer: "We typically respond within 30-60 minutes in Dubai for emergency services."
                    },
                    {
                      question: "Do you provide warranty on your services?",
                      answer: "Yes, all our services come with a minimum 12-month warranty."
                    },
                    {
                      question: "Can I get service at my home or office?",
                      answer: "Absolutely! We're a mobile service and come to your preferred location."
                    },
                    {
                      question: "What payment methods do you accept?",
                      answer: "We accept cash, credit cards, and all major digital payment methods."
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all hover:border-primary"
                    >
                      <details className="group">
                        <summary className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-800 cursor-pointer list-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <h3 className="font-medium text-gray-900 dark:text-white text-lg">
                            {item.question}
                          </h3>
                          <ChevronRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="p-5 pt-0 text-gray-600 dark:text-gray-400">
                          {item.answer}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              {/* Service Coverage Card */}
              <div className="sticky top-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      Service Coverage Areas
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {['Downtown Dubai', 'Dubai Marina', 'Jumeirah', 'Business Bay', 'Al Quoz', 'Al Barsha', 'Deira', 'International City'].map((location, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {location}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      We cover all areas of Dubai with our mobile service.
                    </p>
                  </div>
                </div>

                {/* Emergency CTA Card */}
                <div className="mt-6 bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-xl overflow-hidden border-0">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Need Emergency Service?
                    </h3>
                    <p className="text-white/90 mb-6">
                      Call now for immediate assistance with your vehicle.
                    </p>
                    <Link
                      href="tel:+971506695990"
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-white text-primary font-medium rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                      <Phone className="h-5 w-5" />
                      Call +971 50 669 5990
                    </Link>
                  </div>
                </div>

                {/* Brands We Use Card */}
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Brands We Trust
                    </h3>
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-4">
                    {['Bosch', 'Varta', 'Amaron', 'AC Delco', 'Castrol', 'Mobil'].map((brand, index) => (
                      <div key={index} className="flex items-center justify-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Other Premium Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Complete car care solutions for Dubai drivers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



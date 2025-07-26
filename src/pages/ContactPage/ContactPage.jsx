
import GetTouch from '@/components/view/GetTouch/GetTouch'
import { SeoHead } from '@/seo/SeoHead'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import ServiceAreas from '@/components/view/ServiceArea/ServiceAreas'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import { SiteConfig } from '@/config/site'


export async function generateMetadata() {
  const headersList = headers();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.24carrepairdubai.com';
  const fullUrl = `${baseUrl}/contact`;

  return {
    title: 'Contact Us | 24/7 Mobile Car Repair Dubai',
    description: 'Get in touch with 24/7 Mobile Car Repair Dubai for immediate assistance or to schedule a service. Call us directly, send a message, or find our location on the map. We are available 24 hours a day for all your car repair needs in Dubai.',
    keywords: ['contact car repair Dubai', 'mobile auto service contact', '24/7 car service number', 'Dubai car repair phone', 'emergency car repair contact'],
    alternates: {
      canonical: fullUrl,
    },
    robots: 'index, follow',
    openGraph: {
      title: 'Contact Us | 24/7 Mobile Car Repair Dubai',
      description: 'Reach out to 24/7 Mobile Car Repair Dubai for immediate assistance or to schedule a service. Available 24 hours a day.',
      url: fullUrl,
      siteName: '24 Car Repair Dubai',
      images: [
        {
          url: `${baseUrl}/images/og-contact-image.jpg`, // Replace with your actual OG image path for contact page
          width: 1200,
          height: 630,
          alt: 'Contact 24/7 Mobile Car Repair Dubai',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us | 24/7 Mobile Car Repair Dubai',
      description: 'Reach out to 24/7 Mobile Car Repair Dubai for immediate assistance or to schedule a service. Available 24 hours a day.',
      images: [`${baseUrl}/images/twitter-contact-image.jpg`],
    },
  };
}

export default function ContactPage() {




  return (
    <div>
      <div className="bg-white">
        {/* Enhanced Hero Section */}
        <section className="relative w-full h-[400px] bg-gradient-to-br from-[#003053] to-[#0066CC] overflow-hidden flex items-center">
          {/* Decorative elements - smaller for mobile */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-[#B91C1C]/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl -mr-16 sm:-mr-20 md:-mr-32 -mt-16 sm:-mt-20 md:-mt-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-white/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl -ml-16 sm:-ml-20 md:-ml-32 -mb-16 sm:-mb-20 md:-mb-32"></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')] bg-cover"></div>

          <div className="container relative z-10 h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center px-4 space-y-2 sm:space-y-3 md:space-y-4 w-full">
              {/* Badge - smaller */}
              <div className="inline-flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 animate-fade-in">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white tracking-wider">24/7 SUPPORT</span>
              </div>

              {/* Main heading - responsive sizing */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white animate-fade-in-up leading-snug sm:leading-tight">
                Contact Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white">Car Experts</span>
              </h1>

              {/* Subheading - smaller */}
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto animate-fade-in-up delay-100 px-2">
                Professional vehicle assistance across Dubai
              </p>

              {/* Contact methods - compact responsive grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 animate-fade-in-up delay-200">
                {/* Phone card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20 hover:border-amber-400/50 transition-all">
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <div className="p-1.5 sm:p-2 rounded-full bg-[#003053]/20">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">Call Us</h3>
                    <a href="tel:+971506695990" className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-amber-300 transition-colors">
                      +971 50 669 5990
                    </a>
                  </div>
                </div>

                {/* WhatsApp card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20 hover:border-green-400/50 transition-all">
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <div className="p-1.5 sm:p-2 rounded-full bg-green-500/20">
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">WhatsApp</h3>
                    <a href="https://wa.me/971506695990" className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-green-400 transition-colors">
                      Chat Now
                    </a>
                  </div>
                </div>

                {/* Email card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20 hover:border-blue-400/50 transition-all">
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <div className="p-1.5 sm:p-2 rounded-full bg-blue-500/20">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">Email</h3>
                    <a href={`mailto:${SiteConfig.email}`} className="text-[10px] sm:text-xs md:text-sm font-bold text-white hover:text-blue-400 transition-colors break-all">
                      {SiteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <GetTouch />


        {/* service areas */}
        {/* <ServiceAreas /> */}
        {/* service areas */}



        {/* Map Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Our <span className="text-primary">Service Center</span> in Dubai
              </h2>
              <p className="text-lg text-gray-600">
                Visit our state-of-the-art facility in Al Quoz Industrial Area
              </p>
            </div>
            <MapComponent />
          </div>
        </section>
      </div>
    </div>
  )
}



{/* Contact Grid */ }
// <section className="py-16 md:py-24">
//   <div className="container mx-auto">
//     <div className="grid gap-12 lg:grid-cols-3">
//       {/* Contact Info Card */}
//       <Card className="border-0 bg-gradient-to-b from-primary/5 to-white shadow-lg">
//         <CardHeader>
//           <CardTitle className="text-2xl">Quick Contacts</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="flex items-start gap-4">
//             <div className="mt-1 rounded-full bg-primary/10 p-3">
//               <Phone className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Emergency Call</h3>
//               <p className="text-gray-600">+971 54 569 5980</p>
//               <Button variant="link" className="h-auto p-0 text-primary">
//                 Call Now
//               </Button>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="mt-1 rounded-full bg-primary/10 p-3">
//               <Mail className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Email Support</h3>
//               <p className="text-gray-600">24carservicedubai@gmail.com </p>
//               <Button variant="link" className="h-auto p-0 text-primary">
//                 Email Us
//               </Button>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="mt-1 rounded-full bg-primary/10 p-3">
//               <Clock className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Working Hours</h3>
//               <p className="text-gray-600">24/7 Service Available</p>
//               <p className="text-sm text-gray-500">
//                 Emergency support anytime
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Appointment Form */}
//       <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-lg lg:col-span-2">
//         <CardHeader>
//           <CardTitle className="text-2xl">Book a Service Appointment</CardTitle>
//           <p className="text-gray-600">
//             Schedule your car service with our expert technicians
//           </p>
//         </CardHeader>
//         <CardContent>
//           <form className="grid gap-6">
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Full Name</label>
//                 <Input placeholder="Your name" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Phone Number</label>
//                 <Input placeholder="+971" type="tel" />
//               </div>
//             </div>

//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Email</label>
//                 <Input placeholder="your@email.com" type="email" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Service Needed</label>
//                 <Input placeholder="e.g. Oil Change, AC Repair" />
//               </div>
//             </div>

//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Preferred Date</label>
//                 <div className="relative">
//                   <Input placeholder="Select date" type="date" />
//                   <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Preferred Time</label>
//                 <Input placeholder="Select time" type="time" />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium">Additional Notes</label>
//               <Textarea
//                 placeholder="Tell us about your car issues..."
//                 rows={4}
//               />
//             </div>

//             <Button size="lg" className="w-full">
//               Book Appointment Now
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   </div>
// </section>
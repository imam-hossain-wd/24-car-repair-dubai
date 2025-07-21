// 'use client'

// import { services } from "@/data/services";
// import Image from "next/image";
// import Link from "next/link";

// export default function ServicesSection() {
//   return (
//     <section className="py-8 bg-white">
//       <div className="container px-4 mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-6">
//           <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full mb-3">
//             OUR SERVICES
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Car Care</span>
//           </h2>
//           <p className="text-lg text-gray-500 max-w-2xl mx-auto">
//             Expert services delivered to your doorstep in Dubai
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="group relative bg-white rounded-xl p-3 lg:p-5 shadow-lg transition-all duration-300 border border-double border-emerald-200 border-emerald-100 flex flex-col items-center "
//             >
//               {/* Icon-style Image */}
//               <div className="relative w-16 h-16 mb-4 rounded-full bg-emerald-50 flex items-center justify-center p-3 group-hover bg-emerald-200 hover:bg-emerald-300 transition-colors duration-300">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Service Content */}
//               <div>
//                 <h3 className="text-lg text-center font-bold text-gray-900 mb-1 -mt-2">
//                   {service.title}
//                 </h3>
                
//                 {/* <ul className="space-y-1.5 mb-4">
//                   {service.features.slice(0, 2).map((feature, i) => (
//                     <li key={i} className="text-sm text-gray-500 flex items-start justify-start">
//                       <svg
//                         className="h-3.5 w-3.5 text-emerald-500 mr-1.5 mt-0.5 flex-shrink-0"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul> */}

//                 <div className="flex space-x-2 w-full flex justify-center gap-5 items-center">
//                   {/* <button className="text-xs bg-emerald-200 p-[7px] rounded-full font-medium text-black hover:text-emerald-800 transition-colors duration-300">
//                     See More →
//                   </button> */}
//                   <button className="text-xs w-[80%] font-medium bg-emerald-600 hover:bg-emerald-700 text-white py-1.5 px-3 rounded-full transition-colors duration-300">
//                     Book Now
//                   </button>
//                 </div>
//               </div>

//               {/* Hover Effect Indicator */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 opacity-100 transition-opacity duration-300 "></div>
//             </div>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="text-center mt-12">
//           <Link href="/services" className="inline-flex items-center px-6 py-3 border border-gray-200 text-sm font-medium rounded-full text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
//             View All 24 Services
//             <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'

import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white dark:bg-[#1F2937]">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider text-[#003053] bg-[#003053]/10 rounded-full mb-4 uppercase">
            OUR EXPERT SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003053] to-[#0066CC]">Premium</span> Car Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dubai's most trusted mobile car repair service at your doorstep
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#003053]/30 dark:hover:border-[#003053] flex flex-col"
            >
              {/* Service Icon */}
              <div className="relative w-16 h-16 mb-5 rounded-lg bg-[#003053]/10 dark:bg-[#003053]/20 flex items-center justify-center p-3 group-hover:bg-[#003053]/20 dark:group-hover:bg-[#003053]/30 transition-colors">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Service Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <ul className="space-y-2 mb-5">
                  {service.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <div className="w-1 h-1 mt-2 mr-2 bg-[#003053] dark:bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Link 
                  href={`/services/${service.slug}`} 
                  className="inline-flex items-center text-sm font-medium text-[#003053] dark:text-blue-400 hover:text-[#B91C1C] dark:hover:text-amber-400 transition-colors"
                >
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
                <button className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#003053] hover:bg-[#002244] text-white text-sm font-medium rounded-lg transition-colors">
                  <Phone className="h-4 w-4" />
                  Book Now
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#003053]/10 dark:group-hover:border-[#003053]/30 rounded-xl pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/services" 
            className="inline-flex items-center px-6 py-3 border-2 border-[#003053] text-sm font-bold rounded-full text-[#003053] hover:bg-[#003053] hover:text-white transition-all duration-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-[#003053]"
          >
            View All 24 Services
            <ChevronRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
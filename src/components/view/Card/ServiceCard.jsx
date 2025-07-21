// 'use client'

// import Image from "next/image";
// import Link from "next/link";
// import { CheckCircle2, Wrench, Droplet, Fan, Battery, Settings } from "lucide-react";
// import { Button } from "@/components/ui/button";



// const getServiceIcon = (title) => {
//   if (title.includes("Battery")) return <Battery className="h-8 w-8 text-yellow-500" />;
//   if (title.includes("AC")) return <Fan className="h-8 w-8 text-blue-500" />;
//   if (title.includes("Oil")) return <Droplet className="h-8 w-8 text-green-500" />;
//   if (title.includes("Brake")) return <Wrench className="h-8 w-8 text-red-500" />;
//   if (title.includes("Radiator")) return <Droplet className="h-8 w-8 text-blue-500" />;
//   if (title.includes("Engine")) return <Settings className="h-8 w-8 text-purple-500" />;
//   if (title.includes("ABS")) return <Wrench className="h-8 w-8 text-orange-500" />;
//   if (title.includes("DenamoCraft")) return <Wrench className="h-8 w-8 text-primary" />;
//   return <Wrench className="h-8 w-8 text-primary" />;
// };

// export const ServiceCard = ({ service }) => {
  
//   return (
//     <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 border-2 border-primary">
//       <div className="relative h-44 overflow-hidden ">
//         <Image
//           src={service?.service_image}
//           alt='object'
//           // alt={service.title}
//           fill
//           className="object-cover  transition-transform duration-500 group-hover:scale-105"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//         <div className="absolute bottom-4 left-4 right-4">
//           <div className="flex  items-center gap-3">
//             <div className="rounded-lg bg-white p-2 shadow-sm">
//               {getServiceIcon(service?.title)}
//             </div>
//             <h3 className="text-md font-bold text-white line-clamp-3">
//               {service.title}
//             </h3>
//           </div>
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="mb-4 space-y-2 ">
//           {service?.features?.slice(0, 4).map((feature, i) => (
//             <div key={i} className="flex items-center gap-2">
//               <CheckCircle2 className="h-4 w-4 text-green-500" />
//               <span className="text-sm">{feature}</span>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center justify-between">
//           <Button
//             variant="outline"
//             className="border-primary text-primary hover:bg-primary/10"
//             asChild
//           >
//             <Link href={`/services/${service?.slug}`}>
//               Details
//             </Link>
//           </Button>
//           <Button asChild>
//             <Link href="/contact">
//               Book Now
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };


// components/ServiceCard.js

'use client'

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary flex flex-col h-full">
      {/* Service Image - Centered with equal height */}
      <div className="relative w-full h-20 mb-2 rounded-lg  dark:bg-gray-700 flex items-center justify-center p-4  dark:group-hover:bg-gray-700/80 transition-colors overflow-hidden">
        <Image
          src={service.service_image}
          alt={service.title}
          width={140}
          height={140}
          className="object-contain w-auto h-auto max-w-full max-h-full"
          priority={false}
        />
      </div>

      {/* Service Content */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {service.title}
        </h3>
        
        {/* Features List with Check Icons */}
        <ul className="space-y-2 mb-5">
          {service.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="text-[13px] text-gray-600 dark:text-gray-300 flex items-start">
              <Check className="w-4 h-4 mt-0.5 mr-2 text-primary dark:text-primary-foreground flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="mt-auto space-y-3">
        <Link 
          href={`/services/${service.slug}`} 
          className="inline-flex items-center text-sm font-medium text-primary dark:text-primary-foreground hover:text-primary/80 dark:hover:text-primary-foreground/80 transition-colors group/link"
        >
          View full service details
          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
        </Link>
        <Link 
          href={`/booking?service=${service.slug}`}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-colors group/button"
        >
          <Phone className="h-4 w-4 transition-transform group-hover/button:scale-110" />
          <span>Instant Booking</span>
        </Link>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 dark:group-hover:border-primary/20 rounded-xl pointer-events-none transition-all duration-300"></div>
    </div>
  );
}
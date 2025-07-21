// 'use client'

// import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
// import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";
// import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
// import { BookAppointmentButton } from "@/components/ui/shared/Buttons/BookingAppointmentButton/BookingAppointmentButton";
// import React from "react";
// import { homeicons } from "@/utils/assets";
// import Image from "next/image";


// const highlights = [
//   {
//     icon: CheckCircle2,
//     color: "text-green-400",
//     background: "bg-green-500/20",
//     text: "No Hidden Fees"
//   },
//   {
//     icon: Clock,
//     color: "text-blue-400",
//     background: "bg-blue-500/20",
//     text: "Fast On-Site Repairs"
//   },
//   {
//     icon: Shield,
//     color: "text-purple-400",
//     background: "bg-purple-500/20",
//     text: "Service Guarantee"
//   }
// ];


// const { appointment,
//   company,
//   house,
//   installation,
//   maintenance,
//   roadside,
//   spare,
//   monitoring } = homeicons;

// const services = [
//   {
//     title: "Emergency Roadside",
//     icon: maintenance,
//     color: "text-amber-400"
//   },
//   {
//     title: "At Your Office",
//     icon: company
//   },
//   {
//     title: "Mobile Service",
//     icon: monitoring
//   },
//   {
//     title: "Home Breakdown",
//     icon: installation
//   },
//   {
//     title: "Engine Crisis",
//     icon: spare

//   },
//   {
//     title: "Scheduled Care",
//     icon: appointment

//   }
// ];

// export default function CompactHomeBanner() {
//   return (
//     <div className="relative overflow-hidden h-auto min-h-[70vh]">
//       {/* Modern Green Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-green-700 z-0" />

//       {/* Content Container */}
//       <div className="relative z-10 h-full flex  items-center py-6">
//         <div className="container px-4 mx-auto">
//           <div className="flex flex-col-reverse gap-5 lg:flex-row justify-around items-center">
//             {/* Left Column - Main Content */}
//             <div className="order-2 lg:order-1 p-2">
//               {/* Emergency Badge */}
//               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-2 border border-white/20">
//                 <Zap className="h-4 w-4 text-yellow-300" />
//                 <span className="text-xs font-medium text-white">24/7 Emergency Car Service</span>
//               </div>

//               {/* Main Title */}
//               <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
//                   Best Car Repair & Mechanic Servicing
//                 </span>  in Dubai
//               </h1>

//               {/* Description */}
//               <p className="text-lg text-white/90 mb-4 max-w-xl">
//                 Fast, reliable service at your home , office or roadside  we come to you!
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-3 mb-5">
//                 <div className="flex justify-between">
//                   <CallNowButton className="px-6 py-3 w-[48%]  text-base font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 shadow-lg" />
//                 <WhatsAppButton className="px-6 w-[48%] py-3 text-base font-semibold" />
//                 </div>
//                 <BookAppointmentButton variant="white" size="lg" className="px-6 py-3" />
//               </div>

//               {/* Highlights */}
//               <div className="flex flex gap-3">
//                 {highlights.map((item, index) => (
//                   <div key={index} className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
//                     <div className={`p-1.5 rounded-full ${item.background}`}>
//                       <item.icon className={`h-4 w-4 ${item.color}`} />
//                     </div>
//                     <span className="text-white text-xs font-medium">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column - Service Items */}
//             <div className="order-1 lg:order-2">
//               <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-5 ">
//                 {services.map((service, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-center gap-3 p-2 rounded-lg transition-all bg-white/70 "
//                   >
//                     <div className="group-hover rounded-full bg-emerald-10 ">

//                     <Image className="w-14 h-14" src={service.icon} width={70} height={70} alt={service.title} />
//                     </div>
//                     <span className="font-medium text-center text-xs md:text-[14px]">{service.title}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'

import { CheckCircle2, Clock, Shield, Phone, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import { homeicons } from "@/utils/assets";
import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";

const highlights = [
  {
    icon: CheckCircle2,
    title: "No Hidden Costs",
    description: "Transparent pricing",
    color: "text-emerald-500"
  },
  {
    icon: Clock,
    title: "30 Min Response",
    description: "Fast on-site service",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    title: "6 Month Warranty",
    description: "Quality guaranteed",
    color: "text-amber-400"
  }
];

const services = [
  { title: "AC Repair", icon: homeicons.maintenance },
  { title: "Battery Jump", icon: homeicons.roadside },
  { title: "Oil Change", icon: homeicons.monitoring },
  { title: "Brake Service", icon: homeicons.spare }
];

export default function HeroBanner() {
  return (
    <section className="relative bg-[#003053] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-40 bottom-0 w-80 h-80 bg-[#B91C1C]/10 rounded-full blur-3xl" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Emergency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B91C1C] rounded-full">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold">24/7 EMERGENCY SERVICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                Premium Car Repair
              </span> <br />
              Across Dubai
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-white/90 max-w-xl">
              Mobile mechanics serving your home, office, or roadside with 
              <span className="font-semibold text-amber-300"> 24/7 availability</span> 
              and transparent pricing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <CallNowButton 
                className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg" 
              />
              <WhatsAppButton 
                className="px-8 py-4 text-lg font-bold bg-[#1F2937] hover:bg-[#111827] border border-[#374151] shadow-lg" 
              />
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                  <div className={`${item.color} mb-2`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-white font-medium text-sm">{item.title}</h3>
                  <p className="text-white/70 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group"
              >
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-3 rounded-lg w-fit mb-3 group-hover:rotate-6 transition-transform">
                  <Image 
                    src={service.icon} 
                    width={24} 
                    height={24} 
                    alt={service.title}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-white font-medium">{service.title}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-amber-300 mr-2">Learn more</span>
                  <ChevronRight className="h-3 w-3 text-amber-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-[#1F2937] backdrop-blur-sm rounded-full border border-white/10">
        <MapPin className="h-4 w-4 text-amber-400" />
        <span className="text-sm">Serving All Dubai Areas</span>
      </div>
    </section>
  );
}
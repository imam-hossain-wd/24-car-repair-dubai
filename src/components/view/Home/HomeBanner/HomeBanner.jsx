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
    // color: "text-emerald-500"
    color: "text-amber-400"
  },
  {
    icon: Clock,
    title: "30 Min Response",
    description: "Fast on-site service",
    // color: "text-blue-400"
    color: "text-amber-400"
  },
  {
    icon: Shield,
    title: "Quality Service",
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
      <div className="relative z-10 container mx-auto px-4 py-10 lg:py-18">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-3">
            {/* Emergency Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B91C1C] rounded-full">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold">24/7 EMERGENCY SERVICE</span>
            </div> */}

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
              <span className="font-semibold text-amber-300 mr-1"> 24/7 availability</span> 
               and transparent pricing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row sm:flex-row gap-2 pt-2">
              <CallNowButton 
                className="px-8 py-4 w-[48%] text-lg font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg" 
              />
              <WhatsAppButton 
                className="px-8 py-4 w-[48%] text-lg font-bold bg-[#25D366] hover:bg-[#25D366]/90 border border-[#374151] shadow-lg" 
              />
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-3 ">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-3 rounded-lg border border-white/10">
                  <div className={`${item.color} mb-2`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-white text-center font-medium text-xs">{item.title}</h3>
                  {/* <p className="text-white/70 text-xs">{item.description}</p> */}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-2 gap-4 -mt-5">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group flex flex-col items-center"
              >
                <div className="bg-gradient-to-br from-amber-400 to-amber-500 p-2 rounded-lg w-fit mb-3 group-hover:rotate-6 transition-transform flex items-center">
                  <Image 
                    src={service.icon} 
                    width={100} 
                    height={100} 
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-white font-medium">{service.title}</h3>
                {/* <div className="flex items-center mt-2"> */}
                  {/* <span className="text-xs text-amber-300 mr-2">Learn more</span> */}
                  {/* <ChevronRight className="h-3 w-3 text-amber-300" /> */}
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Indicator */}
      {/* <div className="absolute bottom-6  left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-[#1F2937] backdrop-blur-sm rounded-full border border-white/10 mt-2">
        <MapPin className="h-4 w-4 text-amber-400" />
        <span className="text-sm">Serving All Dubai Areas</span>
      </div> */}
    </section>
  );
}
'use client'


import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";

import { services } from "@/data/services";
import ServiceCard from "./view/Card/ServiceCard";


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
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
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
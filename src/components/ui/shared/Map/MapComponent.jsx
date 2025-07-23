'use client'

import { SiteConfig } from '@/config/site';
import { MapPin, Phone, Mail, ChevronRight, MessageCircle } from 'lucide-react';

const MapComponent = () => {

  const {
    email,
    phoneNumber,
    phoneAction,
    location,
    cordinate,
  } = SiteConfig;

  const contactInfo = {
    address: location,
    phone: phoneNumber,
    whatsapp: "+971506695990",
    email,
    coordinates: "25.2201532,55.2534018"
  };

  const mapUrl = `https://maps.google.com/maps?q=${cordinate}&z=15&output=embed`;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Map Container */}
      <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
        <iframe
          title="24 Car Repair Dubai Location"
          src={mapUrl}
          width="100%"
          height="100%"
          className="filter grayscale-20 hover:grayscale-0 transition-all duration-300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        {/* Floating Contact Card */}
        <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white dark:bg-[#1F2937] p-4 rounded-lg shadow-lg max-w-md border border-gray-100 dark:border-gray-600 transition-all hover:shadow-md">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#003053]/10 dark:bg-[#003053]/20 rounded-full">
              <MapPin className="w-5 h-5 text-[#003053] dark:text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our Location</h3>
              <p className="text-gray-600 dark:text-gray-300">{location}</p>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#003053] dark:text-gray-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#003053] dark:hover:text-white transition-colors">
                    {phoneNumber}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#003053] dark:text-gray-400" />
                  <a href={`mailto:${email}`} className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#003053] dark:hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {/* Get Directions */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-[#003053] hover:bg-[#002244] text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-medium">Get Directions</span>
          </div>
          <ChevronRight className="w-5 h-5" />
        </a>

        {/* Call Now */}
        <a
          href={`tel:${phoneAction}`}
          className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:border-[#003053] shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#003053]/10 rounded-full">
              <Phone className="w-5 h-5 text-[#003053] dark:text-white" />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">Call Now</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/971506695990`}
          className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors hover:border-green-500 shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <span className="font-medium text-gray-800 dark:text-white">WhatsApp</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default MapComponent;
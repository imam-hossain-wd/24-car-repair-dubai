// 'use client'

// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Clock, Mail, Car, ChevronRight, MessageSquareText } from 'lucide-react';

// const MapComponent = () => {
//   // Coordinates for 24 Car Service Dubai
//   const latitude = 25.2430387;
//   const longitude = 55.2964023;
//   const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <motion.div 
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="w-full max-w-6xl mx-auto"
//     >
//       {/* Map Section */}
//       <div className="relative h-[500px] w-[90%] lg:w-full mx-auto rounded-t-2xl overflow-hidden shadow-lg">
//         <iframe
//           title="24 Car Service Dubai Location"
//           src={mapUrl}
//           width="100%"
//           height="100%"
//           className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
        
//         {/* Floating Contact Card */}
     
//         <div
//           className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl max-w-md"
//         >
//           <div className="flex items-start justify-center gap-2 ">
//             <div className="bg-red-100 mt-1 p-1 rounded-full">
//               <MapPin className="text-red-500 w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="text-md font-bold text-gray-900">24 Car Service Dubai</h3>
//               <p className="text-gray-600 text-sm">Al Mankhool , Dubai - UAE</p>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Get Directions Button */}
//       <motion.div variants={itemVariants} className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
//         <a
//           href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center gap-3 px-6 py-4 bg-primary hover:bg-green-600 text-white rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg"
//         >
//           <MapPin className="w-6 h-6 text-red-400" />
//           <span className="text-lg font-semibold">Get Directions</span>
//           <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
//         </a>
//       </motion.div>

//       {/* Quick Action Buttons */}
//       <motion.div 
//         variants={containerVariants}
//         className="grid grid-cols-3 gap-4 px-6 py-5 bg-white"
//       >
//         <motion.a 
//           variants={itemVariants}
//           href="tel:+971545695980"
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-blue-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-blue-100 rounded-full">
//             <Phone className="w-5 h-5 text-blue-500" />
//           </div>
//           <span className="text-sm font-medium">Call Now</span>
//         </motion.a>
        
//         <motion.a 
//           variants={itemVariants}
//           href="https://wa.me/971545695980
// "
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-green-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-green-100 rounded-full">
//             <MessageSquareText className="w-5 h-5 text-green-500" />
//           </div>
//           <span className="text-sm font-medium">WhatsApp</span>
//         </motion.a>
        
//         <motion.a 
//           variants={itemVariants}
//           href="mailto:24carservicedubai@gmail.com"
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-purple-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-purple-100 rounded-full">
//             <Mail className="w-5 h-5 text-purple-500" />
//           </div>
//           <span className="text-sm font-medium">Email Us</span>
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default MapComponent;


'use client'

import { MapPin, Phone, Mail, ChevronRight, MessageCircle } from 'lucide-react';

const MapComponent = () => {
  // Updated contact information
  const contactInfo = {
    address: "Al Mankhool, Dubai - UAE",
    phone: "+971 50 669 5990",
    whatsapp: "+971506695990",
    email: "24carrepairdubai@gmail.com",
    coordinates: "25.2430387,55.2964023"
  };

  const mapUrl = `https://maps.google.com/maps?q=${contactInfo.coordinates}&z=15&output=embed`;

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
              <p className="text-gray-600 dark:text-gray-300">{contactInfo.address}</p>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#003053] dark:text-gray-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#003053] dark:hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#003053] dark:text-gray-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#003053] dark:hover:text-white transition-colors">
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
          href={`https://www.google.com/maps/dir/?api=1&destination=${contactInfo.coordinates}`}
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
          href={`tel:${contactInfo.phone}`}
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
          href={`https://wa.me/${contactInfo.whatsapp}`}
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
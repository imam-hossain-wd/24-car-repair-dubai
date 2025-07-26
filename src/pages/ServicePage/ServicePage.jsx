

// 'use client'
// import { services } from "@/data/services";
// import ServiceCard from "@/components/view/Card/ServiceCard";


// export default function ServicePage() {
//   return (
//     <div>

//       <div className="bg-primary text-center py-10 md:py-20">

//         <h1 className="text-3xl md:text-5xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
//           Premium <span>Auto Care</span> Services
//         </h1>
//         <p className=" md:text-lg text-gray-300 mb-8">
//           Expert vehicle maintenance and repair services in Dubai with 24/7 availability
//         </p>


//       </div>

//       {/* Services Grid Section */}
//       <div className="container py-12 mx-auto px-4">
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-navy)]">
//             Our Comprehensive Services
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
//             Professional automotive services tailored to your needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service) => (
//             <ServiceCard key={service.slug} service={service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// src/app/services/page.js
// 'use client' is generally not needed if you only use server-side features like generateMetadata.
// If your component has client-side interactivity (e.g., useState, useEffect), keep 'use client'.
// We'll keep it for consistency with your provided code, but know it's not strictly necessary for metadata.
'use client'

import { services } from "@/data/services";
import ServiceCard from "@/components/view/Card/ServiceCard";
// No custom schema component needed here, metadata handles most SEO for this page.
// import { headers } from 'next/headers'; // Used for server-side metadata to get URL

// --- SEO Head Metadata for the Services Listing Page ---
// This function runs on the server to generate metadata for this specific route.
// If you uncommented 'use client' above, this function must be in a separate Server Component
// or you'll need to fetch the URL in a client-side way.
// For simplicity, assuming this page can run as a Server Component for metadata.
export const metadata = {
  title: 'Our Comprehensive Car Repair Services in Dubai | 24 Car Repair Dubai',
  description: 'Explore our full range of professional automotive services in Dubai, including car battery replacement, brake repair, oil change, AC service, radiator service, gearbox repair, and general car maintenance. Get expert vehicle care with 24/7 availability.',
  alternates: {
    canonical: 'https://www.24carrepairdubai.com/services', // Replace with your actual services page URL
  },
  robots: 'index, follow',
  openGraph: {
    title: 'All Car Services - 24 Car Repair Dubai',
    description: 'Find all the car repair and maintenance services you need in Dubai. From emergencies to routine checks, we cover it all.',
    url: 'https://www.24carrepairdubai.com/services', // Ensure this matches your canonical URL
    siteName: '24 Car Repair Dubai',
    images: [
      {
        url: 'https://res.cloudinary.com/dmzcvexar/image/upload/v1752508171/maintenance_iuw9st.png', // A general image representing your services
        width: 1200,
        height: 630,
        alt: 'Comprehensive Car Services in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Car Services - 24 Car Repair Dubai',
    description: 'Find all the car repair and maintenance services you need in Dubai. From emergencies to routine checks, we cover it all.',
    images: ['https://res.cloudinary.com/dmzcvexar/image/upload/v1752508171/maintenance_iuw9st.png'],
  },
};

export default function ServicePage() {
  return (
    <div>
      <div className="bg-primary text-center py-10 md:py-20">
        <h1 className="text-3xl md:text-5xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
          Premium <span>Auto Care</span> Services
        </h1>
        <p className=" md:text-lg text-gray-300 mb-8">
          Expert vehicle maintenance and repair services in Dubai with 24/7 availability
        </p>
      </div>

      {/* Services Grid Section */}
      <div className="container py-12 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-navy)]">
            Our Comprehensive Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Professional automotive services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}


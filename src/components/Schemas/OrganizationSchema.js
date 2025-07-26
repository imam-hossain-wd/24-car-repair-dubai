// src/components/Schemas/SchemaService.js
'use client';

import { JsonLd } from "@/lib/jsonLd";



export default function ServiceSchema({ serviceData }) {
  if (!serviceData) {
    console.warn("SchemaService: 'serviceData' prop is missing.");
    return null;
  }

  const currentUrl = `https://www.24carrepairdubai.com/services/${serviceData.slug}`;
  const featuresList = serviceData.features ? serviceData.features.join('. ') : '';
  const description = `${serviceData.intro.heading}. ${serviceData.intro.content} ${featuresList}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceData.title, // General type of service
    "name": serviceData.title,
    "description": description,
    "url": currentUrl,
    "image": serviceData.service_image,
    "provider": {
      "@type": "Organization",
      "name": "24 Car Repair Dubai",
      "url": "https://www.24carrepairdubai.com"
    },
    "areaServed": [
      { "@type": "Place", "name": "Dubai" }, // General Dubai area
      // You can add more specific locations if you serve only certain areas
      // Example: { "@type": "Place", "name": "Business Bay, Dubai" }
    ],
    // If you had pricing, you'd add an Offer:
    // "offers": {
    //   "@type": "Offer",
    //   "priceCurrency": "AED",
    //   "price": "XXX.XX", // Replace with actual price or price range
    //   "availability": "https://schema.org/InStock",
    //   "url": currentUrl
    // }
  };

  return <JsonLd data={schema} />;
}
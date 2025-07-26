import { JsonLd } from "@/lib/jsonLd";


export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveRepair", // A more specific type than general LocalBusiness
    "@id": "https://24carrepairdubai.com/#localbusiness",
    "name": "24 Car Repair Dubai",
    "url": "https://24carrepairdubai.com/",
    "image": "https://24carrepairdubai.com/images/24car-repair-business-image.jpg", // <--- UPDATE with your actual business image
    "telephone": "+971 50 669 5990",
    "email": "contact@24carrepairdubai.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Bay",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "UAE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2256355,
      "longitude": 55.1905546
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
          "https://schema.org/Saturday",
          "https://schema.org/Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "$$", // Example: You can use "$", "$$", "$$$"
    "areaServed": [
      { "@type": "Place", "name": "Business Bay, Dubai" },
      { "@type": "Place", "name": "Jumeirah, Dubai" },
      { "@type": "Place", "name": "Jumeirah 2 Dubai" },
      { "@type": "Place", "name": "Al Barsha, Dubai" }
    ],
    "serviceType": [ // List of services provided
      "Car Battery Replacement Dubai",
      "Car Brake Pad Repair Dubai",
      "Engine Oil Change Dubai",
      "Air Conditioner Repair Dubai",
      "Car Radiator Service Dubai",
      "Gearbox Repair & Service Dubai",
      "Car Maintenance"
    ]
  };

  return <JsonLd data={schema} />;
}
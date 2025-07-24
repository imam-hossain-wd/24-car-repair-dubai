// components/schemas/LocalBusinessSchema.tsx
import { SiteConfig } from "@/config/site-config"; // Adjust path as needed
import Script from "next/script";

export function LocalBusinessSchema() {
  const {
    brandName,
    url,
    email,
    phoneNumber,
    location,
    cordinate,
    description,
  } = SiteConfig;

  // Extract latitude and longitude from cordinate string
  const [latitude, longitude] = cordinate.split(",").map(Number);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brandName,
    image: `${url}/images/logo.png`, // Replace with your actual logo URL
    "@id": url,
    url: url,
    telephone: phoneNumber,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.split(",")[0].trim(), // "Al Satwa"
      addressLocality: location.split(",")[1].trim(), // "Dubai"
      addressRegion: "Dubai", // Assuming Dubai is the region
      postalCode: "", // Add if you have one
      addressCountry: "AE", // United Arab Emirates
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: latitude,
      longitude: longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ], 
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$", // Example: Adjust based on your pricing
    description: description,
    // Add sameAs for social media links if desired
    sameAs: SiteConfig.socialLinks.map((link) => link.href),
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
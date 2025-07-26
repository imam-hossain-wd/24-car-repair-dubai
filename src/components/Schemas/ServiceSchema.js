import { JsonLd } from "@/lib/jsonLd";


export default function ServiceSchema({ title, description, url, image, providerName, providerUrl }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "url": url,
    "image": image, // Image specific to this service
    "provider": {
      "@type": "Organization",
      "name": providerName || "24 Car Repair Dubai",
      "url": providerUrl || "https://24carservicedubai.com"
    },
    "serviceType": title, // Can be more specific if applicable
    "areaServed": [
      { "@type": "Place", "name": "Business Bay, Dubai" },
      { "@type": "Place", "name": "Jumeirah, Dubai" },
      { "@type": "Place", "name": "Jumeirah 2 Dubai" },
      { "@type": "Place", "name": "Al Barsha, Dubai" }
    ]
  };

  return <JsonLd data={schema} />;
}
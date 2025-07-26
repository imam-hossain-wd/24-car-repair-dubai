import { JsonLd } from "@/lib/jsonLd";


export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://24carrepairdubai.com/#website",
    "url": "https://24carrepairdubai.com/",
    "name": "24 Car Repair Dubai",
    "description": "24 Car Repair Dubai – Your On-Demand Car Savior, Anytime, Anywhere in Dubai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://24carrepairdubai.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  };

  return <JsonLd data={schema} />;
}
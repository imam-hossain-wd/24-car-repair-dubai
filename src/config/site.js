import { ChevronDown, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export const SiteConfig = {
  authorName: "Md Jahangir",
  brandName: "24 Car Repair Dubai",
  url: "https://24carservicedubai.com",
  email: "contact@24carrepairdubai.com",
  description: "Your On-Demand Car Savior Anywhere, Anytime in Dubai!",
  phoneNumber: "+971 50 669 5990",
  phoneAction: "+971506695990",
  location: "Al Satwa , Dubai , UAE",
  cordinate: "25.2256355,55.1905546",
  serviceAreas: ["Al Satwa", "Jumeirah, Dubai", "Jumeirah 2 Dubai", "Al Barsha, Dubai"],
  services: [
    {
      title: "Car Battery Replacement Dubai",
      href: "/services/car-battery-replacement-dubai"
    },
    {
      title: "Car Brake Pad Repair Dubai",
      href: "/services/car-brake-pad-repair-dubai"
    },
    {
      title: "Engine Oil Change Dubai",
      href: "engine-oil-change-dubai"
    },
    {
      title: "Air Conditioner Repair Dubai",
      href: "/services/air-conditioner-repair-dubai"
    },
    {
      title: "Car Radiator Service Dubai",
      href: "/services/car-radiator-service-dubai"
    },
    {
      title: "Gearbox Repair & Service Dubai",
      href: "/services/gearbox-repair-service-dubai"
    },
    {
      title: "Car Maintenance",
      href: "/services/car-maintenance-dubai"
    }
  ],


  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
  ],
  footerhrefs: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "sitemap", href: "/sitemap.xml" },
  ],

  socialLinks: [
    { name: "Facebook", icon: Facebook, href: "/facebook.com" },
    { name: "Instagram", icon: Instagram, href: "/instagram.com" },
    { name: "Twitter", icon: Twitter, href: "/twitter.com" },
    { name: "YouTube", icon: Youtube, href: "/youtube.com" },
  ],
  contactLinks: [
    { name: "Map", icon: MapPin, href: "/facebook.com" },
    { name: "Phone", icon: Phone, href: "/instagram.com" },
    { name: "Email", icon: Mail, href: "/twitter.com" },
  ]

}

//  MapPin, Phone, Mail, ChevronDown

// estructured object version of the SiteConfig

const {
 authorName,
  brandName,
  url,
  email,
  description,
  phoneNumber,
  phoneAction,
  location,
  serviceAreas,
  services,
  navItems,
  footerhrefs,
  socialLinks,
  contactLinks
} = SiteConfig;

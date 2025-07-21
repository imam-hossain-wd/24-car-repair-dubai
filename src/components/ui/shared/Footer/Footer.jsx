import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { FootersiteConfig } from "@/config/site";
import { bandlogo } from "@/utils/assets";

export function Footer() {
  const locations = [
    "Al Mankhool - Dubai , UAE",
    "Al Karama - Dubai , UAE",
    "Al Satwa - Dubai , UAE",
    "Jumeirah - Dubai , UAE",
    "Al Barsha - Dubai , UAE",
    "Al Fahidi - Dubai , UAE",
    "Al Jaddaf - Dubai , UAE",    
    "Al Jaffiliya - Dubai , UAE",
    "Dubai Marina - Dubai , UAE",
    "Downtown Dubai - Dubai , UAE",
  ];

  const services = [
    "Car Battery Replacement",
    "Car Brake Pad Repair",
    "Car Maintenance",
    "Gearbox Repair & Service",
    "Car Radiator Service",
    "Air Conditioner Repair",
    "Engine Oil Change"
  ];

  return (
    <footer className="bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="mb-3 -mt-3">
            <Link href="/" className="flex flex-col gap-3 hover:opacity-90 transition-opacity">
              <div className="relative w-20 h-20">
                <Image
                  src={bandlogo.logo3}
                  fill
                  alt={`${FootersiteConfig.name} Logo`}
                  className="object-contain"
                />
              </div>
              {/* <span className="text-xl font-bold">{FootersiteConfig.name}</span> */}
            </Link>
            <p className="text-sm opacity-90">{FootersiteConfig.description}</p>


              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-300" />
                  <div>
                    <Link
                      href="tel:+971568703512"
                      className="text-sm hover:text-green-300 transition-colors block"
                    >
                      +971 54 569 5980
                    </Link>
                    <p className="text-xs opacity-80 mt-1">24/7 Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-300" />
                  <Link
                    href="mailto:carrepairsdubai@gmail.com"
                    className="text-sm hover:text-green-300 transition-colors"
                  >
                    carrepairsdubai@gmail.com
                  </Link>
                </div>


              </div>

               {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <Link
                href="#"
                aria-label="Facebook"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services Column - Collapsible on mobile */}
          <div className="space-y-4">
            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h3 className="text-lg font-semibold">Our Services</h3>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:-rotate-180 lg:hidden" />
              </summary>

              <nav className="mt-4 grid grid-cols-1 gap-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 text-sm hover:text-green-300 transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/80"></span>
                    {service}
                  </Link>
                ))}
              </nav>
            </details>
          </div>


<div className="flex items-start gap-3">
  <div className="w-full">
    <h4 className="font-medium text-lg">Service Areas:</h4>
    <ul className="mt-2 text-sm space-y-1.5 list-disc pl-5"> {/* `list-disc` adds bullets, `pl-5` indents */}
      {locations.map((location, index) => (
        <li key={index} className="opacity-90 hover:opacity-100 transition-opacity">
          {location}
        </li>
      ))}
    </ul>
  </div>
</div>

          {/* Company Links Column - Collapsible on mobile */}
          <div className="space-y-4">
            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h3 className="text-lg font-semibold">Company</h3>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:-rotate-180 lg:hidden" />
              </summary>

              <nav className="mt-4 space-y-2">
                {FootersiteConfig.footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-green-300 transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/80"></span>
                    {link.title}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} {FootersiteConfig.name}. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-4 text-xs opacity-70">
            <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
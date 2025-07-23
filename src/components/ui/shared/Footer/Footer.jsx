import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { SiteConfig } from "@/config/site";
import { bandlogo } from "@/utils/assets";
import Logo from "../Logo/Logo";

export function Footer() {


  const {
    authorName,
    brandName,
    url,
    description,
    phoneNumber,
    phoneAction,
    location,
    serviceAreas,
    services,
    footerhrefs,
    socialLinks,
    email
  } = SiteConfig;

  return (
    <footer className="bg-[#003053] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="-mt-5 mb-4">


            <div className="">
              <Logo />
            </div>

            <p className="text-sm text-white/80 ">
              Dubai's premier mobile car repair service, delivering expert solutions 24/7.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <div>
                  <Link
                    href="tel:+971506695990"
                    className="text-sm font-medium hover:text-amber-400 transition-colors"
                  >
                    {phoneNumber}
                  </Link>
                  <p className="text-xs text-white/60 mt-1">24/7 Emergency Support</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <Link
                  href="mailto:24carrepairdubai@gmail.com"
                  className="text-sm font-medium hover:text-amber-400 transition-colors"
                >
                  {email}
                </Link>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <p className="text-sm font-medium">Mobile Service Across Dubai</p>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-white/20 pb-2">Our Services</h3>
            <nav className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors flex items-start gap-2"
                >
                  <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-white/20 pb-2">Service Areas</h3>
            <div className="grid grid-cols-1 gap-2">
              {serviceAreas.map((location, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
                  <span className="text-sm text-white/80">{location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-white/20 pb-2">Company</h3>
            <nav className="space-y-2">
              {footerhrefs.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors flex items-start gap-2"
                >
                  <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  aria-label={name}
                  className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:bg-opacity-20 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-xs text-white/60 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/60 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
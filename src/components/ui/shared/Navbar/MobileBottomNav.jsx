"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wrench, Info, Mail, BookOpen, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookAppointmentButton } from "../Buttons/BookingAppointmentButton/BookingAppointmentButton";


const mobileNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Wrench },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Floating Action Button */}
      {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <BookAppointmentButton size="icon" className="rounded-full shadow-lg h-12 w-12">
          <span className="sr-only">Book Appointment</span>
        </BookAppointmentButton>
      </div> */}
      
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-t shadow-lg">
        <div className="flex justify-around items-center h-12">
          {mobileNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-colors",
                pathname === item.href ? "text-primary" : "text-gray-600"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-transform",
                  pathname === item.href && "scale-110"
                )}
              />
              <span className="text-xs mt-0">{item.name}</span>
              {pathname === item.href && (
                <div className="w-1 h-1 rounded-full bg-primary " />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
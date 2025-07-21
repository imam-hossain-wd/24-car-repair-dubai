
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { BookAppointmentButton } from "../Buttons/BookingAppointmentButton/BookingAppointmentButton";
import { bandlogo } from "@/utils/assets";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

        {/* Top Contact Bar - Hidden on mobile */}
        <div className="hidden md:block border-b bg-primary/10 text-sm">
          <div className="container mx-auto py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="tel:+971506695990" className="flex items-center gap-1 hover:underline">
                <Phone className="h-4 w-4 text-primary" />
                <span>+971 50 669 5990</span>
              </Link>
              <Link href="mailto:24carrepairdubai@gmail.com" className="flex items-center gap-1 hover:underline">
                <Mail className="h-4 w-4 text-primary" />
                <span>24carrepairdubai@gmail.com</span>
              </Link>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Dubai, UAE (24/7 Mobile Service)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="container  mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          {/* Mobile Contact Info + Logo */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/" className="hidden md:flex flex-col justify-center items-center">
              <Image
                className="w-12 h-12"
                src={bandlogo?.logo}
                quality={100}
                width={1000}
                height={1000}
                alt="24 car service dubai band logo"
              />

              <h2 className="text-primary text-xs italic">24 Car Repair Dubai</h2>

            </Link>
          </div>

          {/* Desktop Logo (centered) */}
          <Link href="/" className="hidden md:flex flex-col justify-center items-center">
            <Image
              className="w-12 h-12"
              src={bandlogo?.logo}
              quality={100}
              width={1000}
              height={1000}
              alt="24 car service dubai band logo"
            />

            <h2 className="text-primary text-xs italic">24 Car Repair Dubai</h2>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          {/* <div className="hidden items-center gap-4 md:flex">
            <div className="hidden lg:flex">
              <BookAppointmentButton className="w-40 h-8 -py-4" size="sm" />
            </div>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 pt-10">
                  <div className="flex border-b pb-4 items-center justify-between">
                    <Link href="/" className="hidden md:flex flex-col justify-center items-center">
                      <Image
                        className="w-12 h-12"
                        src={bandlogo?.logo}
                        quality={100}
                        width={1000}
                        height={1000}
                        alt="24 car service dubai band logo"
                      />

                      <h2 className="text-primary text-xs italic">24 Car Repair Dubai</h2>

                    </Link>
                  </div>
                  <nav className="grid gap-1 -mt-4">
                    {navItems.map((item) => (
                      <SheetTrigger key={item.href} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center rounded-lg px-3 py-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary",
                            pathname === item.href &&
                            "bg-primary/10 text-primary"
                          )}
                        >
                          {item.name}
                        </Link>
                      </SheetTrigger>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>


      </header>
    </>
  );
}
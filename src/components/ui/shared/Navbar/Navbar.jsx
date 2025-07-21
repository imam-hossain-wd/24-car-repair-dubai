// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Menu,
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Instagram,
//   Youtube,
//   Twitter,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import Image from "next/image";
// import { bandlogo } from "@/utils/assets";
// import { BookAppointmentButton } from "../Buttons/BookingAppointmentButton/BookingAppointmentButton";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "Services", href: "/services" },
//   // { name: "Products", href: "/products" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
//   { name: "Blog", href: "/blog" },
//   { name: "Gallery", href: "/gallery" },
// ];

// const socialLinks = [
//   { name: "Facebook", icon: Facebook, href: "#" },
//   { name: "Instagram", icon: Instagram, href: "#" },
//   { name: "Twitter", icon: Twitter, href: "#" },
//   { name: "YouTube", icon: Youtube, href: "#" },
// ];

// export function Navbar() {
//   const pathname = usePathname();

//   return (
//     // <div className="flex flex-col justify-center items-center">
//     <>
//       {/* Top Bar */}
      

//       {/* Main Navbar */}
//       <header className="sticky top-0  z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
//           {/* Mobile Menu */}
//           <div className="hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="hover:bg-transparent"
//                 >
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left" className="w-[300px] sm:w-[400px]">
//                 <div className="flex flex-col gap-8 pt-10">
//                   <div className="flex border-b-1 pb-2 items-center justify-between">
//                     <Link href="/" className="text-lg ml-14  font-semibold">
//                       24CarServiceDubai
//                     </Link>
//                   </div>
//                   <nav className="grid gap-1 -mt-8">
//                     {navItems.map((item) => (
//                       <SheetTrigger key={item.href} asChild>
//                         <Link
//                           href={item.href}
//                           className={cn(
//                             "flex items-center rounded-lg px-3 py-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary",
//                             pathname === item.href &&
//                               "bg-primary/10 text-primary"
//                           )}
//                         >
//                           {item.name}
//                         </Link>
//                       </SheetTrigger>
//                     ))}
//                   </nav>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>

//           {/* Logo - Centered on mobile */}
//           <Link href="/" className="  flex flex-col justify-center items-center">
//             <Image
//               className="w-18 h-18"
//               src={bandlogo.logo3}
//               quality={100}
//               width={1000}
//               height={1000}
//               alt="24 car service dubai band logo"
//             />
//             {/* <h3 className="text-[#04a909] -mt-7 text-[20px] font-bold">24 Car Service Dubai</h3> */}
//           </Link>
//           {/* <Link href="/" className="text-xl font-bold md:text-2xl">
//             24CarServiceDubai
//           </Link> */}

//           {/* Desktop Navigation */}
//           <nav className="hidden items-center gap-8 md:flex">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={cn(
//                   "text-sm font-medium transition-colors hover:text-primary",
//                   pathname === item.href
//                     ? "text-primary"
//                     : "text-muted-foreground"
//                 )}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop Actions */}
//           <div className=" items-center gap-4 md:flex">
//             <div className="hidden lg:flex">
//               <BookAppointmentButton size="sm" />
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }


// // +971 56 870 3512

// // 24carservicedubai@gmail.com
// // Al Satwa, Dubai


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
import { bandlogo } from "@/utils/assets";
import { BookAppointmentButton } from "../Buttons/BookingAppointmentButton/BookingAppointmentButton";

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
              <Link href="tel:+971568703512" className="flex items-center gap-1 hover:underline">
                <Phone className="h-4 w-4 text-primary" />
                <span>+971 54 569 5980 </span>
              </Link>
              <Link href="mailto:24carservicedubai@gmail.com" className="flex items-center gap-1 hover:underline">
                <Mail className="h-4 w-4 text-primary" />
                <span>24carservicedubai@gmail.com</span>
              </Link>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Al Mankhool , Dubai - UAE</span>
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
            <Link href="/" className="flex-shrink-0">
              <Image
                className="w-16 h-16"
                src={bandlogo.logo3}
                quality={100}
                width={1000}
                height={1000}
                alt="24 car service dubai band logo"
              />
            </Link>
            
            <div className="hidden sm:flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4 text-primary" />
                <Link 
                  href="tel:+971568703512" 
                  className="text-xs font-medium hover:underline"
                >
                  +971 56 870 3512
                </Link>
              </div>
              
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4 text-primary" />
                <Link 
                  href="mailto:24carservicedubai@gmail.com" 
                  className="text-xs font-medium hover:underline truncate max-w-[160px]"
                >
                  24carservicedubai@gmail.com
                </Link>
              </div>
              
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">Al Mankhool - Dubai - United Arab Emirates</span>
              </div>
            </div>
          </div>

          {/* Desktop Logo (centered) */}
          <Link href="/" className="hidden md:flex flex-col justify-center items-center">
            <Image
              className="w-18 h-18"
              src={bandlogo.logo3}
              quality={100}
              width={1000}
              height={1000}
              alt="24 car service dubai band logo"
            />
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
          <div className="hidden items-center gap-4 md:flex">
            <div className="hidden lg:flex">
              <BookAppointmentButton className="w-40 h-8 -py-4" size="sm" />
            </div>
          </div>

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
                    <Link href="/" className="text-lg font-semibold">
                      24CarServiceDubai
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


import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/shared/Footer/Footer";

import { MobileBottomNav } from "@/components/ui/shared/Navbar/MobileBottomNav";
import { Navbar } from "@/components/ui/shared/Navbar/Navbar";
import { FloatingButtons } from "@/components/ui/shared/Buttons/FloatingButtons/FloatingButtons";
import Head from "next/head";
import Script from "next/script";
// import { FloatingButtons } from "@/components/ui/shared/Buttons/FloatingButtons/FloatingButtons";
// import { MobileBottomNav } from "@/components/ui/shared/Navbar/MobileBottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Car Repair Across Dubai || 24 Car Repair Dubai",
  description: "One of the best car repair and servicing company in dubai || 24 Car Repair Dubai",
  verification: {
    google: "NlI4dow02YyoBrkiYB1LPx4pXesSILADHN7vEms7yMM"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NERR1NYZD8"
        strategy="afterInteractive"
        async
      />

      {/* Google Tag Manager - inline configuration script */}
      {/* This script initializes the dataLayer and configures gtag with your GA4 Measurement ID. */}
      {/* 'id="google-analytics"' provides a unique identifier for this specific script. */}
      {/* 'dangerouslySetInnerHTML' is used to inject the inline script content. */}
      <Script
        id="google-analytics-config" // A unique ID for this script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NERR1NYZD8');
          `,
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          {/* <FloatingButtons /> */}
          <MobileBottomNav />
          <Footer />
        </div>
      </body>
    </html>
  );
}

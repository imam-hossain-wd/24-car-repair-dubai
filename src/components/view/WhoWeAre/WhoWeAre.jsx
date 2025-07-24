// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Users, Shield, Award, Clock } from "lucide-react";
// import whoweare from '../../../assets/24 car service about section.webp'


// export function WhoWeAre() {
//   return (
//     <section className="container mx-auto py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="px-4 mx-auto max-w-7xl">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Image Section - Made fully responsive */}

//           <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[500px]">
//             {/* Background accent */}
//             <div className="absolute -left-3 sm:-left-4 md:-left-8 -top-3 sm:-top-4 md:-top-8 z-0 h-full w-full rounded-xl sm:rounded-2xl bg-primary/10"></div>

//             {/* Main image container */}
//             <div className="relative z-10 h-full w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]">
//               <Image
//                 src={whoweare}
//                 alt="24 Car Service Dubai professional team working on cars"
//                 fill
//                 className="object-cover"
//                 quality={90}
//                 priority={true}  // Changed to true for better mobile loading
//                 sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
//               />

//               {/* Image overlay */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 sm:p-4 md:p-6 text-white">
//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-green-400" />
//                   <span className="text-base sm:text-lg md:text-xl font-semibold sm:font-bold">Since 2010</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
        


//           <div className="space-y-4 sm:space-y-6">
//   {/* Heading */}
//   <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
//     <span className="text-primary">Who We Are</span> - Your Trusted Car Care Partner
//   </h2>
  
//   {/* Description */}
//   <p className="text-base sm:text-lg text-gray-600">
//     <span className="text-primary">24 Car Service Dubai</span> is a premier automotive service center with over a decade of
//     experience serving Dubai's drivers. Our team of certified technicians delivers
//     exceptional car care with honesty and expertise.
//   </p>

//   {/* Key Points */}
//   <div className="space-y-3 sm:space-y-4">
//     {[
//       {
//         icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />,
//         title: "Expert Team",
//         description: "ASE-certified technicians with 10+ years experience"
//       },
//       {
//         icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />,
//         title: "Reliable Service",
//         description: "12-month warranty on all repairs and services"
//       },
//       {
//         icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />,
//         title: "Award Winning",
//         description: "Recognized as Dubai's best auto service center 2023"
//       },
//       {
//         icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />,
//         title: "Quick Turnaround",
//         description: "90% of repairs completed within 24 hours"
//       }
//     ].map((point, index) => (
//       <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-4">
//         <div className="mt-0.5 sm:mt-0.5 md:mt-1 rounded-full bg-primary/10 p-1 sm:p-1.5 md:p-2">
//           {point.icon}
//         </div>
//         <div>
//           <h3 className="text-sm sm:text-base md:text-lg font-medium sm:font-semibold">{point.title}</h3>
//           <p className="text-xs sm:text-sm md:text-base text-gray-600">{point.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Mission Statement */}
//   <div className="rounded-lg sm:rounded-xl bg-primary/5 p-3 sm:p-4 md:p-6">
//     <h3 className="mb-1 sm:mb-2 text-base sm:text-lg md:text-xl font-medium sm:font-semibold">Our Mission</h3>
//     <p className="text-xs sm:text-sm md:text-base text-gray-700">
//       &ldquo;To provide unparalleled 24/7 on-demand car services throughout Dubai with
//       immediate, reliable, and professional assistance that keeps our customers
//       moving safely on the road.&rdquo;
//     </p>
//   </div>

//   {/* Buttons */}
//   <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
//     <Button className="h-9 sm:h-10 md:h-12 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg">
//       Meet Our Team
//     </Button>
//     <Button variant="outline" className="h-9 sm:h-10 md:h-12 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg border-primary text-primary hover:bg-primary/10">
//       Our Story
//     </Button>
//   </div>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Shield, Award, Clock, Wrench, CheckCircle } from "lucide-react";
import whoweare from '../../../assets/24 car service about section.webp'

export function WhoWeAre() {
  const features = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Team",
      description: "ASE-certified technicians with 10+ years experience",
      color: "text-blue-500"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Reliable Service",
      description: "12-month warranty on all repairs",
      color: "text-emerald-500"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Award Winning",
      description: "Dubai's best auto service center 2023",
      color: "text-amber-500"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Quick Turnaround",
      description: "90% of repairs completed in 24h",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#1F2937] overflow-hidden relative">
  {/* Decorative elements */}
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#003053]/10 rounded-full blur-3xl pointer-events-none z-0"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="relative group">
        {/* Background shape */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#003053]/10 to-[#B91C1C]/10 rounded-3xl transform rotate-1 scale-95 group-hover:rotate-0 transition-all duration-500"></div>

        {/* Main image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl sm:aspect-[4/3] aspect-[16/9]">
          <Image
            src={whoweare}
            alt="24 Car Service Dubai professional team"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Experience badge */}
          <div className="absolute top-6 left-6 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-md flex items-center gap-2">
            <Wrench className="h-5 w-5 text-[#003053] dark:text-white" />
            <span className="font-bold text-sm">Since 2010</span>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <div className="text-white">
              <p className="text-sm font-medium">Our certified technicians</p>
              <h3 className="text-lg sm:text-xl font-bold mt-1">Ready to Serve You 24/7</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider text-[#003053] bg-[#003053]/10 rounded-full uppercase dark:text-white dark:bg-white/10">
            ABOUT OUR COMPANY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Dubai's Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003053] to-[#0066CC]">Car Care</span> Experts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-[#003053] dark:text-white">24 Car Service Dubai</span> delivers exceptional automotive services with honesty, expertise, and 24/7 availability across all Emirates.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#003053]/30 dark:hover:border-[#003053] transition-all hover:shadow-md"
            >
              <div className={`p-2.5 rounded-lg ${feature.color}/10 mb-3`}>
                <div className={feature.color}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#003053]/5 to-[#0066CC]/5 border border-[#003053]/20 dark:border-[#003053]/30">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-[#003053] dark:text-white mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Our Commitment</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                "To provide unparalleled automotive services with immediate, reliable, and professional assistance that keeps Dubai moving safely."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button 
            className="h-12 px-6 bg-[#003053] hover:bg-[#002244] text-white shadow-lg hover:shadow-xl"
            size="lg"
          >
            Meet Our Technicians
          </Button>
          <Button 
            variant="outline"
            className="h-12 px-6 border-[#003053] text-[#003053] hover:bg-[#003053]/10 dark:border-white dark:text-white dark:hover:bg-white/10"
            size="lg"
          >
            Our Service Promise
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
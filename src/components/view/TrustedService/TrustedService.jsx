// import Image from "next/image";
// import { 
//   BadgeCheck, Zap, Clock, DollarSign, 
//   MessageCircle, Shield, Leaf, ChevronRight 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function TrustedService() {
//   return (
//     <section className="py-16 md:py-10 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Animated header */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-600 bg-green-100 rounded-full animate-pulse">
//             Dubai's Preferred Choice
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-bold sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-primary">
//             Why Dubai Trusts <br/>
//             <span className="text-primary">24 Car Service</span>
//           </h2>
//         </div>

//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* 3D Card with Parallax Effect */}
//           <div className="relative group h-[300px] lg:h-[500px] w-[90%] md:w-full mx-auto perspective-1000">
//             <div className="relative h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-12">
//               <div className="absolute inset-0 -mt-5 lg:-mt-20 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 backface-hidden">
//                 <Image
//                   src="https://img.freepik.com/free-photo/mechanic-man-uniform-holding-wrenches-auto-service-center-smiling-camera_496169-1000.jpg?t=st=1746875957~exp=1746879557~hmac=e38a8a718281435b7f985692e92bd36f91dbbdfecf814e46a1d851d650f05d67&w=996"
//                   alt="Luxury car service in Dubai"
//                   fill
//                   className=" opacity-70 w-[300px] h-[300px]"
//                   quality={100}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
//                   <div className="space-y-2 text-white">
//                     <div className="flex items-center gap-1">
//                       <div className="p-2 rounded-full bg-green-500/20">
//                         <BadgeCheck className="h-6 w-6 text-green-400" />
//                       </div>
//                       <span className="text-xl font-bold">Dubai's Most Trusted</span>
//                     </div>
//                     <h3 className="text-3xl font-bold">Premium Car Care <br/>Redefined</h3>
//                     <div className="flex flex-wrap gap-4">
//                       {["10,000+ Cars Repaired", "4.9 ★ Google Rating", "98% Retention"].map((stat, i) => (
//                         <span key={i} className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full">
//                           {stat}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Modern Feature Grid */}
//           <div className="space-y-8 mx-5">
//             <p className="text-lg text-gray-600 leading-relaxed">
//               With 15+ years perfecting automotive excellence in Dubai, we combine cutting-edge technology with artisan craftsmanship for your luxury vehicle.
//             </p>

//             {/* Hexagonal Grid Features */}
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-4 ">
//               {[
//                 { icon: <BadgeCheck className="h-6 w-6" />, title: "Certified Technicians", color: "text-green-500" },
//                 { icon: <Zap className="h-6 w-6" />, title: "On-Demand Service", color: "text-yellow-500" },
//                 { icon: <Clock className="h-6 w-6" />, title: "24/7 Availability", color: "text-blue-500" },
//                 { icon: <DollarSign className="h-6 w-6" />, title: "Transparent Pricing", color: "text-emerald-500" },
//                 { icon: <MessageCircle className="h-6 w-6" />, title: "Free Consultation", color: "text-purple-500" },
//                 { icon: <Shield className="h-6 w-6" />, title: "Guaranteed Repairs", color: "text-red-500" },
//                 { icon: <Leaf className="h-6 w-6" />, title: "Eco-Friendly", color: "text-teal-500" },
//                 { icon: <Leaf className="h-6 w-6" />, title: "Hassle-Free Booking", color: "text-teal-500" },
//               ].map((feature, index) => ( 
//                 <div 
//                   key={index}
//                   className="p-1 lg:p-2 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary/20 group border border-primary"
//                 >
//                   <div className="flex items-center gap-2 lg:gap-4">
//                     <div className={`p-2 lg:p-3 rounded-lg ${feature.color}/10 group-hover:bg-primary/10 transition-colors`}>
//                       <div className={feature.color}>
//                         {feature.icon}
//                       </div>
//                     </div>
//                     <h3 className="text-md font-semibold text-gray-800 group-hover:text-primary transition-colors">
//                       {feature.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Animated Stats */}
//             <div className="grid grid-cols-3 gap-2 ">
//               {[
//                 { value: "15+", label: "Years", decoration: "🏆" },
//                 { value: "10k+", label: "Clients", decoration: "🚗" },
//                 { value: "24/7", label: "Support", decoration: "⏱️" },
//               ].map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 text-center hover:shadow-lg transition-all border border-primary"
//                 >
//                   <p className="text-3xl font-bold text-primary flex flex-col items-center justify-center gap-1 lg:gap-3">
//                    <span className="text-xl">{stat.decoration} {stat.value} </span>
//                   </p>
//                   <p className="text-sm lg:text-md text-gray-600 mt-1">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Glowing CTA */}
//             <Button className=" h-14 px-8 text-lg font-medium rounded-xl bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group">
//               Explore Premium Services
//               <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { 
  BadgeCheck, Zap, Clock, DollarSign, 
  MessageCircle, Shield, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import trustedserviceimage from '../../../assets/images/gallery-3.jpg'

export function TrustedService() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#1F2937]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#003053] bg-[#003053]/10 rounded-full uppercase dark:text-white dark:bg-white/10">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Dubai's Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003053] to-[#0066CC]">Trusted</span> 
            <br />Car Service
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            15+ years of premium automotive care delivered to your doorstep
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Card */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl group">
            <Image
              src={trustedserviceimage} // Replace with your image
              alt="Professional car service in Dubai"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003053]/80 via-transparent to-transparent p-8 flex flex-col justify-end">
              <div className="space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <BadgeCheck className="h-6 w-6 text-amber-400" />
                  </div>
                  <span className="text-xl font-bold">Certified Dubai Experts</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["10,000+ Repairs", "4.9 ★ Rating", "24/7 Service"].map((stat, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mobile mechanics bring dealership-quality service directly to your home or office across all Dubai Emirates, combining cutting-edge diagnostics with old-school craftsmanship.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: <BadgeCheck className="h-5 w-5" />, 
                  title: "Certified Experts", 
                  desc: "ASE-certified technicians",
                  color: "text-emerald-500" 
                },
                { 
                  icon: <Zap className="h-5 w-5" />, 
                  title: "Rapid Response", 
                  desc: "30 min average arrival",
                  color: "text-amber-500" 
                },
                { 
                  icon: <Clock className="h-5 w-5" />, 
                  title: "24/7 Availability", 
                  desc: "Anytime emergencies",
                  color: "text-blue-500" 
                },
                { 
                  icon: <DollarSign className="h-5 w-5" />, 
                  title: "Fair Pricing", 
                  desc: "No hidden fees",
                  color: "text-green-500" 
                },
                { 
                  icon: <MessageCircle className="h-5 w-5" />, 
                  title: "Free Diagnosis", 
                  desc: "Transparent assessment",
                  color: "text-purple-500" 
                },
                { 
                  icon: <Shield className="h-5 w-5" />, 
                  title: "Warranty", 
                  desc: "6 months guarantee",
                  color: "text-[#B91C1C]" 
                },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#003053]/50 dark:hover:border-[#003053] transition-all hover:shadow-md group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg ${feature.color}/10 group-hover:bg-[#003053]/10`}>
                      <div className={feature.color}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "15+", label: "Years", border: "border-emerald-500/20" },
                { value: "10K+", label: "Clients", border: "border-blue-500/20" },
                { value: "24/7", label: "Support", border: "border-amber-500/20" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`p-4 text-center rounded-xl border-t-4 ${stat.border} bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all`}
                >
                  <p className="text-2xl font-bold text-[#003053] dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="px-8 py-6 text-base font-bold bg-[#003053] hover:bg-[#002244] text-white shadow-lg"
              >
                Book Emergency Service
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-base font-bold border-[#003053] text-[#003053] hover:bg-[#003053]/10 dark:text-white dark:border-white dark:hover:bg-white/10"
              >
                View All Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
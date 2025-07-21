
// import { Button } from '@/components/ui/button'
// import { MapPin } from 'lucide-react'
// import React from 'react'

// export default function ServiceAreas() {

//     const serviceAreas = [
//         'Al Mankhool - Dubai, UAE',
//         'Al Karama - Dubai, UAE',
//         'Al Satwa - Dubai, UAE',
//         'Jumeirah - Dubai, UAE',
//         'Al Barsha - Dubai, UAE',
//         'Al Fahidi - Dubai, UAE',
//         'Al Jaddaf - Dubai, UAE',
//         'Al Jaffiliya - Dubai, UAE',
//         'Dubai Marina - Dubai, UAE',
//         'Downtown Dubai - Dubai, UAE'
//     ];
//     return (
//         <section className=" bg-white">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-8">
//                     <h2 className="text-2xl font-bold sm:text-3xl mb-3">
//                         We Serve <span className="text-primary">All Dubai</span>
//                     </h2>
//                     <p className="text-gray-600 text-sm sm:text-base">
//                         Fast mobile services across these locations:
//                     </p>
//                 </div>

//                 <div className="max-w-3xl mx-auto">
//                     <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
//                         {serviceAreas.map((area, index) => (
//                             <div
//                                 key={index}
//                                 className="group flex flex-col items-center justify-center p-3 sm:p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-all border border-gray-200 hover:border-primary/30"
//                             >
//                                 <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1.5" />
//                                 <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight">
//                                     {area.split(' - ')[0]}
//                                 </h3>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center mt-8">
//                         <Button
//                             variant="ghost"
//                             size="sm"
//                             className="text-primary text-sm hover:bg-primary/10 border border-primary/20"
//                         >
//                             Check Your Area
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }



import { Button } from '@/components/ui/button'
import { MapPin, Clock, ChevronRight, Phone } from 'lucide-react'
import React from 'react'

export default function ServiceAreas() {
  const serviceAreas = [
    'Al Mankhool', 'Al Karama', 'Al Satwa', 'Jumeirah', 
    'Al Barsha', 'Downtown', 'Marina', 'JLT', 'JBR', 'Business Bay'
  ];

  const workingHours = [
    { day: 'Monday', hours: '7:00 AM - 11:00 PM' },
    { day: 'Tuesday', hours: '7:00 AM - 11:00 PM' },
    { day: 'Wednesday', hours: '7:00 AM - 11:00 PM' },
    { day: 'Thursday', hours: '7:00 AM - 11:00 PM' },
    { day: 'Friday', hours: '7:00 AM - 11:00 PM' },
    { day: 'Saturday', hours: '24 Hours' },
    { day: 'Sunday', hours: '24 Hours' }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#1F2937]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#003053] bg-[#003053]/10 rounded-full uppercase dark:text-white dark:bg-white/10">
            SERVICE COVERAGE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003053] to-[#0066CC]">All Dubai</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our mobile mechanics cover every corner of Dubai with 24/7 emergency support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Service Areas */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-[#003053]/10 dark:bg-[#003053]/20">
                <MapPin className="w-6 h-6 text-[#003053] dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Service Areas</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-[#003053]/5 dark:hover:bg-[#003053]/10 transition-all border border-gray-200 dark:border-gray-600 hover:border-[#003053]/30 dark:hover:border-[#003053]"
                >
                  <MapPin className="w-4 h-4 text-[#003053] dark:text-white flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full border-[#003053] text-[#003053] hover:bg-[#003053]/10 dark:border-white dark:text-white dark:hover:bg-white/10"
              >
                Check Full Coverage Map
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-[#003053]/10 dark:bg-[#003053]/20">
                <Clock className="w-6 h-6 text-[#003053] dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Working Hours</h3>
            </div>

            <div className="space-y-3">
              {workingHours.map((day, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{day.day}</span>
                  <span className={`text-sm font-semibold ${day.hours === '24 Hours' ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    {day.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button className="w-full bg-[#003053] hover:bg-[#002244] text-white">
                Book Emergency Service
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#003053] to-[#0066CC] rounded-xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">24/7 Emergency Service Available</h3>
              <p className="text-white/90">Our team is always ready for urgent car repairs across Dubai</p>
            </div>
            <Button 
              variant="secondary" 
              className="whitespace-nowrap bg-white text-[#003053] hover:bg-white/90"
              size="lg"
            >
              Call Now: +971 50 669 5990
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

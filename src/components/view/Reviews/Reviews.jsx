// 'use client'

// import React from 'react';
// import { Star, ChevronRight, Check } from 'lucide-react';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import Image from 'next/image';
// import googleLogo from '../../../assets/googleLogo.png'
// import googleVerifiedBadge from '../../../assets/googleVerifiedBadge.png'
// import googleTextIcon from '../../../assets/googleTextIcon.png'
// import Link from 'next/link';

// const reviews = [
//   {
//     name: "Ahmed K.",
//     rating: 5,
//     comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
//     date: "2 days ago",
//     isGoogleReview: true
//   },
//   {
//     name: "Sarah M.",
//     rating: 5,
//     comment: "Honest mechanics who actually care. Didn't try to upsell unnecessary repairs like other shops.",
//     date: "1 week ago",
//     isGoogleReview: true
//   },
//   {
//     name: "Rajiv P.",
//     rating: 4,
//     comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
//     date: "3 weeks ago",
//     isGoogleReview: true
//   },
//   {
//     name: "Fatima L.",
//     rating: 5,
//     comment: "Fast and transparent service. Explained everything clearly before starting the repair.",
//     date: "5 days ago",
//     isGoogleReview: true
//   },
//   {
//     name: "Omar H.",
//     rating: 4,
//     comment: "Convenient on-site service, but a bit pricey compared to local garages. Still worth it for emergencies.",
//     date: "2 weeks ago",
//     isGoogleReview: true
//   }
// ];

// export default function Reviews() {
//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="w-[90%] mx-auto px-4 max-w-7xl ">
//         <div className='mb-2'>

//           <div className='text-center'>
//             <h2 className="text-3xl font-bold sm:text-4xl md:text-[2.5rem] mb-2">
//               Customer Reviews
//             </h2>
//             <h3 className="text-xl text-gray-600 mb-3">What Our Customers Say</h3>

//           </div>

//           <div className='w-full md:w-[70%] mx-auto mb-4 px-1 md:px-10 flex rounded justify-between items-center bg-gray-100 p-2 '>
//             <div>
//               <div className='flex gap-1 items-center'>
//                 <Image
//                   src={googleTextIcon}
//                   alt="Google"
//                   width={1000}
//                   height={1000}
//                   quality={100}
//                   className="w-24 h-10"
//                 />
//                 <span className='font-bold text-[20px]'> Reviews</span>


//               </div>
//               <div className="flex items-center gap-1 mt-1">
//                 <span className="text-[22px] font-bold mr-1">4.9</span>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-500" />
//                   ))}
//                 </div>
//                 <span className="text-gray-600 text-md">(52)</span>
//               </div>
//             </div>

//             <div className="text-center">
//               <button className="bg-primary hover:bg-green-600 text-white px-4 md:px-6 py-2 rounded-full text-[14px] md:text-lg font-medium transition-colors">
//                <Link href="https://g.page/r/CdrwD2SVrLO7EAI/review">
//                 Review us on Google</Link>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             loop={true}
//             spaceBetween={30}
//             slidesPerView={1}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1.2,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//           >
//             {reviews.map((review, i) => (
//               <SwiperSlide key={i}>
//                 <Card className="h-full border border-gray-200/70 bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
//                   <CardHeader className="pb-0">
//                     <div className="flex justify-between items-start gap-4">
//                       <div className="flex items-center gap-3">
//                         <div className="relative">
//                           <div className="bg-gradient-to-br from-primary to-green-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-medium">
//                             {review.name.charAt(0)}
//                           </div>
//                           {review.isGoogleReview && (
//                             <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
//                               <Image
//                                 src={googleLogo}
//                                 alt="Google Verified"
//                                 width={14}
//                                 height={14}
//                                 className="w-3.5 h-3.5"
//                               />
//                             </div>
//                           )}
//                         </div>
//                         <div>
//                           <div className='flex justify-center items-center gap-1'>
//                             <h3 className="text-base font-semibold">{review.name}</h3>
//                             <Image
//                               src={googleVerifiedBadge}
//                               alt="Google"
//                               width={100}
//                               height={100}
//                               quality={100}
//                               className="w-6 h-6"
//                             />
//                           </div>
//                           <p className="text-xs text-gray-500">{review.date}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pt-4">
//                     <div className="flex gap-1 mb-3">
//                       {[...Array(5)].map((_, j) => (
//                         <Star
//                           key={j}
//                           className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
//                         />
//                       ))}
//                     </div>
//                     <p className="text-gray-700 mb-4 text-sm line-clamp-4">
//                       &quot;{review.comment}&quot;
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <a
//                         href="https://share.google/2cj4qTPpn0OHGc1zf"
//                         className="text-primary hover:text-green-600 text-sm font-medium flex items-center gap-1 transition-colors"
//                       >
//                         Read full review <ChevronRight className="w-4 h-4" />
//                       </a>
//                       {review.isGoogleReview && (
//                         <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
//                           <Check className="w-3 h-3" />
//                           Google Verified
//                         </span>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'

import { Star, ChevronRight, Check, ChevronLeft, ChevronRight as RightIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import googleLogo from '../../../assets/googleLogo.png'
import googleVerifiedBadge from '../../../assets/googleVerifiedBadge.png'
import googleTextIcon from '../../../assets/googleTextIcon.png'
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

const reviews = [
  {
    name: "Ahmed K.",
    rating: 5,
    comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
    date: "2 days ago",
    isGoogleReview: true
  },
  {
    name: "Sarah M.",
    rating: 5,
    comment: "Honest mechanics who actually care. Didn't try to upsell unnecessary repairs like other shops.",
    date: "1 week ago",
    isGoogleReview: true
  },
  {
    name: "Rajiv P.",
    rating: 5,
    comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
    date: "3 weeks ago",
    isGoogleReview: true
  },
  {
    name: "Fatima L.",
    rating: 5,
    comment: "Fast and transparent service. Explained everything clearly before starting the repair.",
    date: "5 days ago", 
    isGoogleReview: true
  },
  {
    name: "Omar H.",
    rating: 5,
    comment: "Convenient on-site service. Their mobile mechanics saved me when my car broke down at work.",
    date: "2 weeks ago",
    isGoogleReview: true
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white dark:bg-[#1F2937]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#003053] bg-[#003053]/10 rounded-full uppercase dark:text-white dark:bg-white/10">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003053] to-[#0066CC]">Dubai Drivers</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear what our customers say about their experience
          </p>
        </div>

        {/* Google Rating Badge */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <Image 
                src={googleLogo}
                alt="Google" 
                width={80} 
                height={80}
                className="w-16 h-16"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">52+ Google Reviews</p>
              </div>
            </div>
          </div>
          <Link
            href="https://g.page/r/CdrwD2SVrLO7EAI/review"
            className="px-6 py-3 bg-[#003053] hover:bg-[#002244] text-white rounded-full font-medium flex items-center gap-2 transition-colors shadow-md hover:shadow-lg"
          >
            Leave a Review
            <RightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.review-swiper-next',
              prevEl: '.review-swiper-prev',
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <div className="p-6">
                    {/* Review Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="bg-gradient-to-br from-[#003053] to-[#0066CC] rounded-full w-12 h-12 flex items-center justify-center text-white font-medium text-lg">
                            {review.name.charAt(0)}
                          </div>
                          {review.isGoogleReview && (
                            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-900 rounded-full p-1 border border-gray-200 dark:border-gray-600">
                              <Image 
                                src="/images/google-icon.png" 
                                alt="Google Verified" 
                                width={16} 
                                height={16}
                                className="w-4 h-4"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
                        </div>
                      </div>
                      {review.isGoogleReview && (
                        <span className="inline-flex items-center gap-1 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                          <Check className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-5 w-5 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-4">
                      &quot;{review.comment}&quot;
                    </p>

                    {/* Read More */}
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-[#003053] dark:text-blue-400 hover:text-[#B91C1C] dark:hover:text-amber-400 transition-colors"
                    >
                      Read full review
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="review-swiper-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md border border-gray-200 dark:border-gray-600 hover:bg-[#003053] hover:text-white transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="review-swiper-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md border border-gray-200 dark:border-gray-600 hover:bg-[#003053] hover:text-white transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
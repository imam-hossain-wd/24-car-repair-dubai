'use client'

import { ChevronRight, CalendarDays, User } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import blogData from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeBlogCarousel() {
  return (
    <section className="py-16 bg-white dark:bg-[#1F2937]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-[#003053] bg-[#003053]/10 rounded-full uppercase dark:text-white dark:bg-white/10">
            EXPERT ADVICE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003053] to-[#0066CC]">Car Care</span> Tips
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Essential maintenance guides for Dubai's climate
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.blog-swiper-next',
              prevEl: '.blog-swiper-prev',
            }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {blogData.blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003053]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center mr-4">
                        <CalendarDays className="h-4 w-4 mr-1 text-[#003053] dark:text-gray-300" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-[#003053] dark:text-gray-300" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[#003053] dark:hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-sm font-medium text-[#003053] dark:text-blue-400 hover:text-[#B91C1C] dark:hover:text-amber-400 transition-colors"
                    >
                      Read Article
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="blog-swiper-prev absolute top-1/2 -left-4 z-10 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md border border-gray-200 dark:border-gray-600 hover:bg-[#003053] hover:text-white transition-colors">
            <ChevronRight className="h-5 w-5 rotate-180" />
          </button>
          <button className="blog-swiper-next absolute top-1/2 -right-4 z-10 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-md border border-gray-200 dark:border-gray-600 hover:bg-[#003053] hover:text-white transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 border-2 border-[#003053] text-sm font-bold rounded-full text-[#003053] hover:bg-[#003053] hover:text-white transition-all dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-[#003053]"
          >
            View All Articles
            <ChevronRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
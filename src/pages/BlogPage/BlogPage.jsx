"use client";
import { blogs } from "@/data/blogdata";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003053] to-[#0066CC] py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0  opacity-20 dark:opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Expert Car Repair Insights
          </h1>
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-white max-w-2xl mx-auto ">
            Professional tips and services for your vehicle in Dubai
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-[var(--brand-navy)] text-white text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[var(--brand-navy)] dark:hover:text-blue-300 transition-colors font-poppins">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <Button
                  asChild
                  variant="outline"
                  className="border-[var(--brand-navy)] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  <Link href={`/blog/${blog.slug}`}>
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12 dark:bg-gray-800 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-primary font-bold  mb-4 font-poppins">
            Need Immediate Car Repair?
          </h2>
          <p className=" text-md md:text-lg text-primary mb-6 max-w-2xl mx-auto dark:text-gray-400">
            Our team is available 24/7 for emergency services in Dubai
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg font-bold shadow-lg"
          >
            <Link href="tel:+971506695990">
              Call Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
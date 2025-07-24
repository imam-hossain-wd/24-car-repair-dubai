

'use client'
import { services } from "@/data/services";
import ServiceCard from "@/components/view/Card/ServiceCard";


export default function ServicePage() {
  return (
    <div>

      <div className="bg-primary text-center py-10 md:py-20">

        <h1 className="text-3xl md:text-5xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
          Premium <span>Auto Care</span> Services
        </h1>
        <p className=" md:text-lg text-gray-300 mb-8">
          Expert vehicle maintenance and repair services in Dubai with 24/7 availability
        </p>


      </div>

      {/* Services Grid Section */}
      <div className="container py-12 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-navy)]">
            Our Comprehensive Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Professional automotive services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}


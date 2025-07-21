'use client'

import { services } from "@/data/services";
import ServiceCard from "@/components/view/Card/ServiceCard";


export default function ServicePage() {
  return (
    <div>

      <div className="container py-12 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
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


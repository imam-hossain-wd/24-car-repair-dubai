
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import React from 'react'

export default function ServiceAreas() {

    const serviceAreas = [
        'Al Mankhool - Dubai, UAE',
        'Al Karama - Dubai, UAE',
        'Al Satwa - Dubai, UAE',
        'Jumeirah - Dubai, UAE',
        'Al Barsha - Dubai, UAE',
        'Al Fahidi - Dubai, UAE',
        'Al Jaddaf - Dubai, UAE',
        'Al Jaffiliya - Dubai, UAE',
        'Dubai Marina - Dubai, UAE',
        'Downtown Dubai - Dubai, UAE'
    ];
    return (
        <section className=" bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold sm:text-3xl mb-3">
                        We Serve <span className="text-primary">All Dubai</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Fast mobile services across these locations:
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                        {serviceAreas.map((area, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center justify-center p-3 sm:p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-all border border-gray-200 hover:border-primary/30"
                            >
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1.5" />
                                <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight">
                                    {area.split(' - ')[0]}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary text-sm hover:bg-primary/10 border border-primary/20"
                        >
                            Check Your Area
                        </Button>
                    </div>
                </div>
            </div>
        </section>

    )
}

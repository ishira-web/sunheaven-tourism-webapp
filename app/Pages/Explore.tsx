'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Explore() {
    const destinations = [
        {
            src: "/poster1.jpg",
            alt: "Sigiriya Rock Fortress",
            title: "Sigiriya"
        },
        {
            src: "/poster2.jpg",
            alt: "Tea Plantations",
            title: "Hill Country"
        },
        {
            src: "/poster3.jpg",
            alt: "Pristine Beaches",
            title: "Coastal Paradise"
        },
        {
            src: "/poster4.jpg",
            alt: "Wildlife Safari",
            title: "Wildlife"
        }
    ]

    return (
        <div className="w-full min-h-auto py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 font-poppins">
                        Explore Sri Lanka
                    </h1>
                    <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[3/4] cursor-pointer"
                        >
                            <Image
                                src={destination.src}
                                alt={destination.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white text-2xl font-bold font-poppins">
                                        {destination.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* View Gallery Button */}
                <div className="flex justify-center mt-12">
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-5  font-poppins font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                        View Gallery
                    </Button>
                </div>
            </div>
        </div>
    )
}
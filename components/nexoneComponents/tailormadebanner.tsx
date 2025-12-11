'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TailormadeBanner() {
    return (
        <div className="w-full">
            <motion.div
                className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                    {/* Desktop Background Image */}
                    <Image
                        src="/special-interest-tours_Banner-1.webp"
                        alt="Tailor-Made Tours Sri Lanka"
                        fill
                        className="object-cover hidden md:block"
                        priority
                    />

                    {/* Mobile Background Image */}
                    <Image
                        src="/Tailor-Made-Tours.webp"
                        alt="Tailor-Made Tours Sri Lanka"
                        fill
                        className="object-cover md:hidden"
                        priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full px-6 sm:px-8 md:px-12">
                            <div className="max-w-4xl mx-auto text-center">
                                <motion.p
                                    className="text-white/95 text-xs sm:text-sm md:text-base font-semibold mb-4 md:mb-5 font-poppins tracking-widest uppercase"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                >
                                    Personalized Experiences
                                </motion.p>

                                <motion.h1
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 md:mb-6 font-romie leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                >
                                    Create Your Perfect Sri Lanka Adventure
                                </motion.h1>

                                <motion.p
                                    className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light font-poppins leading-relaxed max-w-3xl mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.6 }}
                                >
                                    Every journey is unique. Share your dreams, interests, and travel style with us, and we'll design a bespoke itinerary crafted exclusively for you.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </motion.div>
        </div>
    )
}

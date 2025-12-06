'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CustomTourBanner() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
            <div className="container mx-auto">
                <motion.div
                    className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background Image */}
                    <Image
                        src="/poster2.jpg"
                        alt="Sri Lanka Wildlife"
                        fill
                        className="object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                            <div className="max-w-xl lg:max-w-2xl">
                                <motion.p
                                    className="text-white/90 text-xs sm:text-sm md:text-base font-medium mb-3 md:mb-4 font-poppins"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    We Are Here
                                </motion.p>
                                
                                <motion.h2
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 font-romie leading-tight"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    Let's Plan Your Dream Sri Lanka Journey Together
                                </motion.h2>
                                
                                <motion.p
                                    className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 font-romie leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Tell us what you love, and we'll craft a trip just for you with a personal touch.
                                </motion.p>
                                
                                <motion.button
                                    className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl transition-all duration-300 border-2 border-white/40 hover:border-white/70 font-poppins shadow-2xl hover:shadow-white/20 text-sm sm:text-base md:text-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Plan Your Tour
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

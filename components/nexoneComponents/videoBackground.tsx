'use client'
import { motion } from 'framer-motion'
import { Button } from '../ui/button';

export default function VideoBackground() {
    return (
        <div className="relative w-full h-full">
            {/* Video Background */}
            <video
             autoPlay 
             loop 
             muted
             playsInline
             preload="auto"
             poster="/poster.jpg"
             className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 z-0" >
            
            <source src="/bgmovie.mp4" type="video/mp4" />
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>

            {/* Text Overlay with Framer Motion */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-poppins font-semibold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl text-center"
                    style={{ 
                        textShadow: '0 0 40px rgba(251, 191, 36, 0.5), 0 0 80px rgba(251, 191, 36, 0.3)'
                    }}
                >
                    Discover Your Sunlit Escape in Sri Lanka
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-poppins font-semibold  text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl px-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
                    style={{
                        textShadow: '0 2px 20px rgba(255, 255, 255, 0.3)'
                    }}
                >
                    Experience the perfect blend of nature,culture,adventure and tropical bliss with Sunheaven Lanka Tour
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-6 sm:mt-8"
                >
                <Button className="px-5 py-6 uppercase font-poppins font-semibold text-white text-sm bg-amber-600">View Tour Packages</Button>
                </motion.div>
            </div>
        </div>
    );
}
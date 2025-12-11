'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PackageCardProps {
    image: string
    title: string
    subtitle: string
    href?: string
}

export default function PackageCard({
    image,
    title,
    subtitle,
    href
}: PackageCardProps) {
    const ButtonContent = () => (
        <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 border border-white/40 hover:border-white/60 font-poppins shadow-xl hover:shadow-2xl transform hover:scale-105">
            Discover Tour
        </button>
    )

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full"
        >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                {/* Background Image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-white">
                    {/* Title & Subtitle */}
                    <div className="text-center mt-8">
                        <h3 className="text-3xl md:text-4xl font-bold mb-3 font-romie leading-tight drop-shadow-lg">
                            {title}
                        </h3>
                        <p className="text-base md:text-[13px] text-white/95 font-poppins max-w-xs mx-auto leading-relaxed drop-shadow-md">
                            {subtitle}
                        </p>
                    </div>
                    
                    {/* Discover Tour Button */}
                    {href ? (
                        <Link href={href}>
                            <ButtonContent />
                        </Link>
                    ) : (
                        <ButtonContent />
                    )}
                </div>
            </div>
        </motion.div>
    )
}

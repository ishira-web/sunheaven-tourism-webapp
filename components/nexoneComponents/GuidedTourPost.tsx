'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface GuidedTourPostProps {
  imageSrc: string
  title: string
  description: string
  duration: string
  isReversed?: boolean
}

export default function GuidedTourPost({
  imageSrc,
  title,
  description,
  duration,
  isReversed = false
}: GuidedTourPostProps) {
  return (
    <div className="w-full py-12 md:py-16">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full lg:w-1/2 px-4 lg:px-0"
          initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-romie text-gray-800 mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-gray-600 font-poppins text-sm sm:text-base leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex items-center gap-2 mb-8 text-gray-700 font-medium font-poppins">
              <span className="font-bold">Duration:</span>
              <span>{duration}</span>
            </div>

            <Link href="/contact">
              <button className="bg-[#6b5e52] text-white px-8 py-3 rounded-full font-poppins text-sm font-semibold hover:bg-[#5a4e44] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Book Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

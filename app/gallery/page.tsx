'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  { src: '/poster1.jpg', alt: 'Sri Lanka Landscape', size: 'large' },
  { src: '/Cultural-Heritage-Tour.webp', alt: 'Cultural Heritage', size: 'small' },
  { src: '/poster2.jpg', alt: 'Wildlife Encounter', size: 'medium' },
  { src: '/Scenic-Sri-Lanka-1.webp', alt: 'Scenic Views', size: 'medium' },
  { src: '/poster3.jpg', alt: 'Train Journey', size: 'small' },
  { src: '/special-interest-tours_Banner-1.webp', alt: 'Special Moments', size: 'large' },
  { src: '/poster4.jpg', alt: 'Beautiful Beaches', size: 'medium' },
  { src: '/1-1.webp', alt: 'Ancient Ruins', size: 'small' },
  { src: '/2-1.webp', alt: 'Ayurveda Retreat', size: 'small' },
  { src: '/3-1.webp', alt: 'Tea Plantations', size: 'medium' },
  { src: '/4-1.webp', alt: 'Bird Watching', size: 'small' },
  { src: '/Classic-Mini-Tour-1.webp', alt: 'Classic Tours', size: 'medium' }
]

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header content */}
        <div className="text-center mb-16">
           <motion.p 
              className="text-amber-600 font-poppins text-sm uppercase tracking-[0.2em] mb-4 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Capturing Moments
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-romie text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Gallery
            </motion.h1>
            <motion.p 
              className="text-gray-500 font-poppins max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore the beauty of Sri Lanka through our lens. From misty mountains to golden beaches, every corner of this island tells a story.
            </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                image.size === 'large' ? 'md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className={`relative w-full ${
                  image.size === 'large' ? 'h-[500px]' : 
                  image.size === 'medium' ? 'h-[350px]' : 'h-[250px]'
                } bg-gray-100`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Hover Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-white font-romie text-lg tracking-wide">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

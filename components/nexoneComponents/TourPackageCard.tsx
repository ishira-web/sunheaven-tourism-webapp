'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TourPackageCardProps {
    image: string
    title: string
    duration: string
    description: string
    highlights: string
    exclusions: string
    inclusions: string
    imageOnRight?: boolean
}

export default function TourPackageCard({
    image,
    title,
    duration,
    description,
    highlights,
    exclusions,
    inclusions,
    imageOnRight = false
}: TourPackageCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const detailsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!cardRef.current || !contentRef.current || !imageRef.current || !detailsRef.current) return

        const ctx = gsap.context(() => {
            // Content animation - fade in and slide up
            gsap.from(contentRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none none'
                }
            })

            // Image animation - scale and fade in
            gsap.from(imageRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none none'
                }
            })

            // Details stagger animation
            gsap.from(detailsRef.current!.children, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: detailsRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            })
        }, cardRef)

        return () => ctx.revert()
    }, [])

    return (
        <div 
            ref={cardRef}
            className={`flex flex-col ${imageOnRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start max-w-7xl mx-auto mb-16 lg:mb-20 px-4 sm:px-6`}
        >
            {/* Content Section */}
            <div ref={contentRef} className="w-full lg:w-1/2 space-y-5 lg:space-y-6">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-2 text-gray-900 leading-tight tracking-tight">
                        {title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 font-poppins tracking-wide uppercase">
                        {duration}
                    </p>
                </div>

                <p className="text-gray-700 leading-[1.7] sm:leading-[1.8] font-poppins text-sm sm:text-base md:text-lg">
                    {description}
                </p>

                <div ref={detailsRef} className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                    <div className="leading-relaxed">
                        <span className="font-semibold text-gray-900 font-poppins text-xs sm:text-sm tracking-wide block sm:inline mb-1 sm:mb-0">HIGHLIGHTS: </span>
                        <span className="text-gray-600 font-poppins text-sm sm:text-base">{highlights}</span>
                    </div>

                    <div className="leading-relaxed">
                        <span className="font-semibold text-gray-900 font-poppins text-xs sm:text-sm tracking-wide block sm:inline mb-1 sm:mb-0">INCLUSIONS: </span>
                        <span className="text-gray-600 font-poppins text-sm sm:text-base">{inclusions}</span>
                    </div>

                    <div className="leading-relaxed">
                        <span className="font-semibold text-gray-900 font-poppins text-xs sm:text-sm tracking-wide block sm:inline mb-1 sm:mb-0">EXCLUSIONS: </span>
                        <span className="text-gray-600 font-poppins text-sm sm:text-base">{exclusions}</span>
                    </div>
                </div>

                <button className="bg-[#6B5D52] hover:bg-[#5a4d44] text-white font-medium px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg transition-all duration-300 font-poppins shadow-md hover:shadow-lg mt-4 sm:mt-6 transform hover:scale-105 text-xs sm:text-sm tracking-wide uppercase w-full sm:w-auto">
                    Enquire Now
                </button>
            </div>

            {/* Image Section */}
            <div ref={imageRef} className="w-full lg:w-1/2">
                <div className="relative h-[280px] sm:h-[350px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
    )
}

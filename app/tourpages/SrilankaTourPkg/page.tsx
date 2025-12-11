'use client'

import { useEffect, useRef } from 'react'
import SriLankaTourPkgBanner from '@/components/nexoneComponents/SriLankaTourPkgBanner'
import TourPackageCard from '@/components/nexoneComponents/TourPackageCard'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SrilankaTourPkg() {
    const sectionHeaderRef = useRef<HTMLDivElement>(null)
    const bannerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Banner fade in animation
        if (bannerRef.current) {
            gsap.from(bannerRef.current, {
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out'
            })
        }

        // Section header animation
        if (sectionHeaderRef.current) {
            gsap.from(sectionHeaderRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionHeaderRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            })
        }
    }, [])

    return (
        <div className="bg-gradient-to-b from-white via-gray-50/30 to-white">
            {/* Banner Section */}
     
                <SriLankaTourPkgBanner />
           
            
            {/* Tour Packages Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Section Header */}
                <div ref={sectionHeaderRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase mb-3 sm:mb-4 font-poppins">
                        Explore Our Collection
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight px-4">
                        Curated Tour Packages
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6 font-poppins leading-relaxed px-4">
                        Discover handpicked journeys designed to showcase the very best of Sri Lanka's culture, nature, and heritage.
                    </p>
                    <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#6B5D52] to-transparent mx-auto"></div>
                </div>

                {/* Tour Cards */}
                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                    <TourPackageCard
                        image="/Best-of-Sri-Lanka-1.webp"
                        title="Classic Mini Tour"
                        duration="4 Days / 3 Nights"
                        description="A short but powerful journey through Sri Lanka's Cultural Triangle. Perfect for travellers with limited time who want a taste of heritage, history, and spirituality."
                        highlights="Colombo/ Kandy / Dambulla / Sigiriya / Polonnaruwa /Anuradhapura"
                        exclusions="Air tickets, entrance fees, personal expenses."
                        inclusions="Accommodation, transfers, English-speaking guide, daily breakfast."
                        imageOnRight={false}
                    />

                    <TourPackageCard
                        image="/poster2.jpg"
                        title="Grand Island Tour"
                        duration="7 Days / 6 Nights"
                        description="Experience the best of Sri Lanka from ancient cities to pristine beaches. This comprehensive tour covers cultural sites, wildlife, and coastal relaxation."
                        highlights="Colombo / Sigiriya / Kandy / Nuwara Eliya / Yala / Galle / Bentota"
                        exclusions="Air tickets, entrance fees, personal expenses."
                        inclusions="Accommodation, transfers, English-speaking guide, daily breakfast, safari jeep."
                        imageOnRight={true}
                    />

                    <TourPackageCard
                        image="/Round-Tour-with-Ayurveda.webp"
                        title="Round Tour with Ayurveda"
                        duration="10 Days / 9 Nights"
                        description="Blend cultural discovery with Ayurveda wellness sessions for a truly restorative holiday. Explore heritage by day, rejuvenate with treatments in the evening."
                        highlights="Colombo / Sigiriya / Kandy / Nuwara Eliya / Yala / Galle / Bentota"
                        exclusions="Air tickets, entrance fees, personal expenses."
                        inclusions="Accommodation, transfers, English-speaking guide, daily breakfast, safari jeep."
                        imageOnRight={false}
                    />

                    <TourPackageCard
                        image="/Classic-Mini-Tour-1.webp"
                        title="Cultural Heritage Tour"
                        duration="5 Days / 4 Nights"
                        description="Experience the best of Sri Lanka from ancient cities to pristine beaches. This comprehensive tour covers cultural sites, wildlife, and coastal relaxation."
                        highlights="Colombo / Sigiriya / Kandy / Nuwara Eliya / Yala / Galle / Bentota"
                        exclusions="Air tickets, entrance fees, personal expenses."
                        inclusions="Accommodation, transfers, English-speaking guide, daily breakfast, safari jeep."
                        imageOnRight={true}
                    />
                </div>
            </div>
        </div>
    )
}

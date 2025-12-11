'use client'

import PackageCard from '@/components/nexoneComponents/PackageCard'
import CustomTourBanner from '@/components/nexoneComponents/CustomTourBanner'
import { motion } from 'framer-motion'

export default function PackagesPage() {
    const packages = [
        {
            id: 1,
            image: '/poster2.jpg',
            title: 'Sri Lanka Tour Packages',
            subtitle: 'Discover all corners of Sri Lanka with our carefully crafted tour',
            href: '/tourpages/SrilankaTourPkg'
        },
        {
            id: 2,
            image: '/poster.jpg',
            title: 'Special Interest Tours',
            subtitle: 'Our special interest Tours are crafted for travelers with unique passions'
        },
        {
            id: 3,
            image: '/poster2.jpg',
            title: 'Tailor Made Tours',
            subtitle: 'Enjoy personalized itineraries designed to match your interests and wishes',
            href: '/tourpages/tailormade'
        },
        {
            id: 4,
            image: '/poster.jpg',
            title: 'Sri Lanka Day Tours',
            subtitle: 'Short on time but still want to experience Sri Lanka\'s highlights?',
            href: '/tourpages/guideddaytours'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-white py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-slate-600 text-sm md:text-base font-medium mb-3 font-poppins tracking-wide">
                            Choose You Favour
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 font-romie">
                            Discover Our Tours
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Packages Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <PackageCard
                                image={pkg.image}
                                title={pkg.title}
                                subtitle={pkg.subtitle}
                                href={pkg.href}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Custom Tour Banner */}
            <CustomTourBanner />
        </div>
    )
}

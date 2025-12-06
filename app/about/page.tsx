'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Hero Section with Image */}
            <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden">
                <Image
                    src="/poster2.jpg"
                    alt="Sri Lanka Tours"
                    fill
                    className="object-cover brightness-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 flex items-center justify-center">
                    <motion.div
                        className="text-center px-4 max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-romie tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            About Us
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-xl text-white/95 font-poppins max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Your trusted partner for authentic Sri Lankan adventures
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Introduction Section */}
                <motion.div
                    className="max-w-7xl mx-auto mb-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left side - Text content */}
                            <div>
                                <motion.div
                                    className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    ESTABLISHED IN HIKKADUWA
                                </motion.div>
                                <motion.h2
                                    className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-romie leading-tight"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    Who We Are
                                </motion.h2>
                                <motion.div
                                    className="space-y-5 text-lg font-poppins text-slate-700 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <p>
                                        Sunheaven Lanka Tours is a premier travel agency based in the scenic coastal town of <span className="font-semibold text-slate-900">Hikkaduwa, Sri Lanka</span>. We are passionate about showcasing the beauty, culture, and warmth of our island nation.
                                    </p>
                                    <p>
                                        With years of experience in the tourism industry, we specialize in creating <span className="font-semibold text-slate-900">personalized and tailored travel experiences</span> that go beyond typical tourist itineraries. From private tours to group adventures, we craft every journey to match your unique preferences.
                                    </p>
                                    <p>
                                        Our dedicated team of local experts ensures that every trip is not just a vacation, but a <span className="font-semibold text-slate-900">memorable journey</span> filled with authentic experiences, hidden gems, and warm Sri Lankan hospitality.
                                    </p>
                                </motion.div>

                                {/* Stats */}
                                <motion.div
                                    className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <div>
                                        <div className="text-3xl md:text-4xl font-bold text-amber-600 font-poppins">500+</div>
                                        <div className="text-sm md:text-base text-slate-600 mt-1">Happy Travelers</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl md:text-4xl font-bold text-amber-600 font-poppins">50+</div>
                                        <div className="text-sm md:text-base text-slate-600 mt-1">Tour Packages</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl md:text-4xl font-bold text-amber-600 font-poppins">10+</div>
                                        <div className="text-sm md:text-base text-slate-600 mt-1">Years Experience</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right side - Image */}
                            <motion.div
                                className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Image
                                    src="/about-professional.png"
                                    alt="Professional Sunheaven Lanka Tours Team"
                                    fill
                                    className="object-cover object-center"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Why Choose Us Section */}
                <div className="max-w-6xl mx-auto mb-24">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-romie">
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-poppins">
                            We deliver exceptional service and unforgettable experiences through our core values
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-6 lg:gap-8 font-poppins"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {/* Card 1 */}
                        <motion.div
                            className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl shadow-lg p-8 md:p-10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                                Memorable Experiences
                            </h3>
                            <p className="text-white/90 leading-relaxed text-base">
                                We go beyond sightseeing to create meaningful connections with Sri Lankan culture, nature, and people. Every moment is designed to leave a lasting impression.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl shadow-lg p-8 md:p-10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                                Personalized Service
                            </h3>
                            <p className="text-white/90 leading-relaxed text-base">
                                Your interests, pace, and preferences shape every itinerary. We listen, understand, and craft experiences that feel uniquely yours.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl shadow-lg p-8 md:p-10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                                Local Expertise
                            </h3>
                            <p className="text-white/90 leading-relaxed text-base">
                                As born-and-raised Sri Lankans, we know the hidden beaches, secret viewpoints, and authentic local spots that guidebooks miss.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl shadow-lg p-8 md:p-10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                                24/7 Support
                            </h3>
                            <p className="text-white/90 leading-relaxed text-base">
                                Travel with confidence knowing our team is always available. Questions, changes, or emergencies – we're here for you around the clock.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    className="w-full max-w-5xl mx-auto text-center px-4 mb-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl shadow-2xl p-10 md:p-16">
                        <motion.h3
                            className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Ready to Explore Sri Lanka?
                        </motion.h3>
                        <motion.p
                            className="text-lg md:text-xl text-white/90 font-poppins mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Let us create your perfect Sri Lankan adventure. Contact us today to start planning your dream vacation.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-poppins"
                            >
                                Get in Touch
                            </Link>
                            <Link
                                href="/tours"
                                className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-poppins"
                            >
                                View Our Tours
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Trusted Platforms Section */}
                <motion.div
                    className="w-full max-w-4xl mx-auto text-center px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h4 className="text-slate-900 font-poppins text-2xl font-bold mb-8">
                            Trusted on Leading Travel Platforms
                        </h4>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                            {/* TripAdvisor */}
                            <motion.div
                                className="flex flex-col items-center group cursor-pointer"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-slate-50 rounded-xl p-6 transition-all duration-300 group-hover:shadow-xl border border-slate-200">
                                    <Image
                                        src="/tripadvisor.png"
                                        alt="TripAdvisor"
                                        width={160}
                                        height={60}
                                        className="h-14 w-auto object-contain"
                                    />
                                </div>
                            </motion.div>

                            {/* Divider */}
                            <div className="hidden md:block h-20 w-px bg-slate-300"></div>

                            {/* Booking.com */}
                            <motion.div
                                className="flex flex-col items-center group cursor-pointer"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-slate-50 rounded-xl p-6 transition-all duration-300 group-hover:shadow-xl border border-slate-200">
                                    <Image
                                        src="/bookingcom.png"
                                        alt="Booking.com"
                                        width={160}
                                        height={60}
                                        className="h-14 w-auto object-contain"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

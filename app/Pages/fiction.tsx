'use client'

import { motion } from 'framer-motion'
import { Compass, Heart } from 'lucide-react'

export default function Fiction() {
    return (
        <div className="w-full min-h-auto bg-gradient-to-t from-cyan-100 to-slate-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                {/* Main Topic */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 font-poppins">
                        Discover Tropic Vista Tours
                    </h1>
                    <p className="text-lg text-slate-600 font-poppins max-w-3xl mx-auto leading-relaxed">
                        Your trusted gateway to Sri Lanka's heart — where golden coasts, lush highlands, and ancient wonders await. Our passionate team designs tailor-made experiences that celebrate authenticity, comfort, and adventure.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Who We Are Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-2xl shadow-xl p-8 text-center border border-cyan-100"
                    >
                        <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Compass className="w-8 h-8 text-cyan-600" />
                        </div>
                        <h2 className="text-2xl font-bold font-poppins text-slate-900 mb-4">Who We Are</h2>
                        <p className="text-slate-600 leading-relaxed font-poppins text-sm">
                            Tropic Vista Tours is a licensed Sri Lankan travel agency recognized by SLTDA. Based in Colombo, we create unforgettable journeys for every traveler-from cultural explorations to luxury escapes and nature retreats.
                        </p>
                    </motion.div>

                    {/* Our Mission Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-2xl shadow-xl p-8 text-center border border-none"
                    >
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="w-8 h-8 text-amber-600" />
                        </div>
                        <h2 className="text-2xl font-bold font-poppins text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed font-poppins text-sm">
                            To reveal Sri Lanka's beauty through meaningful, responsible travel-connecting hearts with heritage and empowering local communities while preserving our island's natural charm.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
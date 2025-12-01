'use client'
import { motion } from 'framer-motion'
import { Users, Car, Clock, Leaf } from 'lucide-react'

export default function Choose() {
    const features = [
        {
            icon: Users,
            title: "Expert Local Guides",
            description: "Our guides are passionate locals who know Sri Lanka's best-kept secrets — making every trip more personal and unforgettable.",
            color: "cyan"
        },
        {
            icon: Car,
            title: "Comfortable Private Rides",
            description: "Travel in style and comfort with our air-conditioned private vehicles, ensuring smooth and safe journeys.",
            color: "blue"
        },
        {
            icon: Clock,
            title: "24/7 Customer Support",
            description: "We're here for you anytime — before, during, and after your trip — to make sure everything runs perfectly.",
            color: "cyan"
        },
        {
            icon: Leaf,
            title: "Sustainable Travel",
            description: "We promote eco-friendly travel experiences that protect Sri Lanka's natural beauty and empower local communities.",
            color: "cyan"
        }
    ]

    return (
        <div className="w-full min-h-auto bg-gradient-to-b from-cyan-100 to-slate-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-poppins">
                        Why Choose Us
                    </h1>
                    <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <feature.icon className="w-8 h-8 text-blue-600" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-slate-900 mb-3 font-poppins">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed font-poppins">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
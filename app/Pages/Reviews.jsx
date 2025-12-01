'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function Reviews() {
    const reviews = [
        {
            name: "Sarah Johnson",
            country: "United States",
            rating: 5,
            platform: "tripadvisor",
            review: "Absolutely incredible experience! Our guide was knowledgeable and friendly. The tour was perfectly organized and we got to see the most beautiful parts of Sri Lanka.",
            date: "November 2024",
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            country: "Singapore",
            rating: 5,
            platform: "booking",
            review: "Best tour company in Sri Lanka! From airport pickup to drop-off, everything was seamless. The private vehicle was comfortable and our driver was excellent.",
            date: "October 2024",
            avatar: "MC"
        },
        {
            name: "Emma Williams",
            country: "United Kingdom",
            rating: 5,
            platform: "tripadvisor",
            review: "Tropic Vista Tours made our honeymoon unforgettable. The attention to detail and personalized service exceeded our expectations. Every destination was magical!",
            date: "December 2024",
            avatar: "EW"
        },
        {
            name: "David Martinez",
            country: "Spain",
            rating: 5,
            platform: "booking",
            review: "Professional, reliable, and friendly service. Our 7-day tour covered all the highlights - from ancient temples to pristine beaches. Worth every penny!",
            date: "November 2024",
            avatar: "DM"
        },
        {
            name: "Lisa Anderson",
            country: "Australia",
            rating: 5,
            platform: "tripadvisor",
            review: "The local guides shared fascinating stories and took us to hidden gems. The eco-friendly approach and support for local communities made the trip even more meaningful.",
            date: "October 2024",
            avatar: "LA"
        },
        {
            name: "James Taylor",
            country: "Canada",
            rating: 5,
            platform: "booking",
            review: "Exceptional customer service! Available 24/7 and always responsive. The itinerary was flexible and tailored to our interests. Couldn't have asked for better!",
            date: "December 2024",
            avatar: "JT"
        }
    ]

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${
                    index < rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'
                }`}
            />
        ))
    }

    return (
        <div className="w-full py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-poppins relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-poppins">
                        Trusted by Travelers Worldwide
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it — hear from our satisfied customers
                    </p>
                </motion.div>

                {/* Reviews Swiper */}
                <div className="max-w-7xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={600}
                        loop={true}
                        className="reviews-swiper-pro !pb-16"
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index} className="!w-[90%] sm:!w-[450px]">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-2xl h-full relative overflow-hidden group"
                                >
                                    {/* Decorative gradient */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
                                    
                                    {/* Platform Badge - Top Right */}
                                    <div className="absolute top-6 right-6">
                                        <div className="w-16 h-16 bg-white rounded-xl shadow-md p-2 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                            {review.platform === 'tripadvisor' ? (
                                                <Image
                                                    src="/tripadvisor.png"
                                                    alt="TripAdvisor"
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <Image
                                                    src="/bookingcom.png"
                                                    alt="Booking.com"
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Quote Icon */}
                                    <Quote className="w-10 h-10 text-cyan-500/20 mb-4" />

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {renderStars(review.rating)}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-slate-700 text-base leading-relaxed mb-6 font-poppins relative z-10">
                                        "{review.review}"
                                    </p>

                                    {/* Reviewer Info */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                                        {/* Avatar */}
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                            {review.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-slate-900 font-bold font-poppins">
                                                {review.name}
                                            </h4>
                                            <p className="text-slate-500 text-sm">
                                                {review.country}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-slate-400">{review.date}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            className="swiper-button-prev-custom group w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-cyan-500 text-white flex items-center justify-center shadow-lg transition-all duration-300"
                            aria-label="Previous"
                        >
                            <span className="text-xl">←</span>
                        </button>
                        <button
                            className="swiper-button-next-custom group w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-cyan-500 text-white flex items-center justify-center shadow-lg transition-all duration-300"
                            aria-label="Next"
                        >
                            <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .reviews-swiper-pro .swiper-pagination {
                    bottom: 0 !important;
                }
                
                .reviews-swiper-pro .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: rgba(255, 255, 255, 0.3);
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                
                .reviews-swiper-pro .swiper-pagination-bullet-active {
                    background: #06b6d4;
                    width: 30px;
                    border-radius: 5px;
                }
                
                .reviews-swiper-pro .swiper-slide {
                    transition: all 0.3s ease;
                }
                
                .reviews-swiper-pro .swiper-slide-active {
                    transform: scale(1);
                }
                
                .reviews-swiper-pro .swiper-slide:not(.swiper-slide-active) {
                    opacity: 0.5;
                }
            `}</style>
        </div>
    )
}
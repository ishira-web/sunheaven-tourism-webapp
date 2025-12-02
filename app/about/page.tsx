import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section with Image */}
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <Image
                    src="/poster2.jpg"
                    alt="Sri Lanka Tours"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-poppins">
                            About Sunheaven Lanka Tours
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-poppins">
                            Your Gateway to Sri Lanka's Wonders
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introduction Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900  mb-6 font-poppins">
                            Who We Are
                        </h2>
                        <p className="text-base  font-poppins text-slate-700 leading-relaxed mb-6">
                            Sunheaven Lanka Tours is a leading travel agency based in Hikkaduwa, Sri Lanka. We specialize in providing personalized and tailored travel experiences to our clients, ensuring that every trip is memorable and enjoyable. We offer a wide range of services including private tours, group tours, and custom-made trips to suit your specific needs and preferences.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 font-poppins">
                        Why Choose Sunheaven Lanka Tours
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 font-poppins">
                        {/* Card 1 */}
                        <div className="bg-green-900 rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
                            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                                Memorable Experiences
                            </h3>
                            <p className="text-white leading-relaxed text-sm">
                                We make every effort to ensure that your trip is a memorable and enjoyable experience. You will experience warm and friendly service from our dedicated staff.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-green-900 rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
                            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                                Personalized Service
                            </h3>
                            <p className="text-white leading-relaxed text-sm">
                                Every journey is crafted to match your preferences and interests, ensuring a unique and authentic Sri Lankan experience tailored just for you.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-green-900 rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
                            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                                Local Expertise
                            </h3>
                            <p className="text-white leading-relaxed text-sm">
                                With deep knowledge of Sri Lanka's hidden gems and popular attractions, we provide authentic insights and unforgettable experiences.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-green-900 rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
                            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white  mb-3 font-poppins">
                                24/7 Support
                            </h3>
                            <p className="text-white leading-relaxed text-sm">
                                Round-the-clock assistance to ensure your journey is smooth, safe, and stress-free from start to finish.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg shadow-xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-poppins">
                            Ready to Explore Sri Lanka?
                        </h3>
                        <p className="text-xl text-white/90 font-poppins">
                            We look forward to welcoming you to our beautiful country
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

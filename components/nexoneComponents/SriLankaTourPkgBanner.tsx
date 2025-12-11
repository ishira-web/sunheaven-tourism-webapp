export default function SriLankaTourPkgBanner() {
    return (
        <div className="relative w-full h-[280px] overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/Sri-Lanka-Tour-Packages-Banner.jpg')",
                }}
            >
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/15"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                {/* Small heading */}
                <p className="text-white/90 text-sm md:text-base font-semibold tracking-wide mb-3">
                    Best Resort For You
                </p>

                {/* Main heading */}
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight mb-4 max-w-5xl">
                    Discover Sri Lanka with our carefully designed tour packages
                </h1>

                {/* Description */}
                <p className="text-white/95 text-xs md:text-sm font-semibold leading-relaxed max-w-3xl">
                    from quick cultural getaways to full island adventures. Each itinerary combines iconic highlights<br className="hidden md:block" />
                    with authentic experiences, guided by our expert team. Whether you want heritage, wildlife,<br className="hidden md:block" />
                    wellness, or scenic escapes, we have the perfect journey for you.
                </p>
            </div>
        </div>
    )
}

import GuidedTourPost from "@/components/nexoneComponents/GuidedTourPost";

export default function GuidedDayTours() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-romie text-gray-900 mb-6">
                    guided day tours
                </h1>
                <p className="max-w-3xl mx-auto text-gray-600 font-poppins text-sm sm:text-base leading-relaxed">
                    Short on time but still want to experience Sri Lanka's highlights? Our guided day tours are designed to give you unforgettable snapshots of the island's culture, history, wildlife, and landscapes. Starting from Colombo, Negombo, or Bandaranaike International Airport (CMB), each tour includes private transfers in an air-conditioned vehicle with an English-speaking chauffeur-guide.
                </p>
            </div>

            {/* Tour Posts Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <GuidedTourPost 
                    imageSrc="/Cultural-Heritage-Tour.webp"
                    title="Kandy & Pinnawala Day Tour"
                    description="Visit the world-famous Pinnawala Elephant Orphanage, explore the sacred Temple of the Tooth Relic, stroll through the Peradeniya Botanical Gardens, and enjoy a Kandy city tour."
                    duration="Full day"
                />
            </div>
        </div>
    )
}
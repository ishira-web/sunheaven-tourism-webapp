'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const cards = [
  {
    title: "Cultural Tours",
    description: "Discover Sri Lanka's seven UNESCO World Heritage Sites. Walk through the ancient cities of Anuradhapura and Polonnaruwa, climb Sigiriya Rock Fortress, and immerse yourself in Kandy's living traditions.",
    image: "/1-1.webp", 
    link: "/contact" 
  },
  {
    title: "Ayurveda & Yoga Retreats Tours",
    description: "Discover the balance of body and mind with our Ayurveda and Yoga Retreat Tours in Sri Lanka. These tours combine ancient healing therapies, daily yoga sessions, and peaceful natural environments for a total wellness getaway.",
    image: "/2-1.webp", 
    link: "/contact"
  },
  {
    title: "Scenic Sri Lanka Tours",
    description: "Experience the island's natural splendor with our Scenic Sri Lanka Tours, featuring rolling tea hills, cascading waterfalls, and the famous train journey to Ella, where you'll cross the iconic Nine Arches Bridge surrounded by breathtaking mountain views.",
    image: "/3-1.webp",
    link: "/contact"
  },
  {
    title: "Wildlife & Bird Watching Tours",
    description: "From Yala's elusive leopards to Udawalawe's gentle elephants and Sinharaja's rare birds, Sri Lanka is a wildlife paradise. Explore expert-led safaris and sanctuaries rich in biodiversity.",
    image: "/4-1.webp",
    link: "/contact"
  }
]

export default function TailorMadeCards() {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col h-full bg-sky-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col grow p-6 text-center">
              <h3 className="text-xl font-bold font-romie text-gray-900 mb-4 h-12 flex items-center justify-center">
                {card.title}
              </h3>
              
              <p className="text-sm text-gray-600 font-poppins leading-relaxed mb-8 grow">
                {card.description}
              </p>
              
              <div className="mt-auto">
                <Link href={card.link}>
                  <button className="px-8 py-2 border border-gray-400 rounded-full text-sm font-semibold text-gray-800 hover:bg-black hover:text-white transition-colors duration-300 font-poppins">
                    Let&apos;s Talk
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

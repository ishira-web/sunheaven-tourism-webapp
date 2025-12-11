'use client'

import PackageCard from "@/components/nexoneComponents/PackageCard"
import { motion } from 'framer-motion'

export default function OurServices() {
  const services = [
    {
      id: 1,
      image: "/poster.jpg",
      title: "Airport Transfers",
      subtitle: "Seamless private transfers from Bandaranaike International Airport to any destination in Sri Lanka"
    },
    {
      id: 2,
      image: "/poster2.jpg",
      title: "Day Tours",
      subtitle: "Enjoy Sri Lanka's best attractions in one day adventures packed with culture, nature and flavour"
    },
    {
      id: 3,
      image: "/poster.jpg",
      title: "Long Tours",
      subtitle: "From the misty hills to golden coasts, explore Sri Lanka over several unforgettable days"
    },
    {
      id: 4,
      image: "/poster2.jpg",
      title: "Custom Tours",
      subtitle: "Personalized itineraries designed around your interests - you dream it, we make it happen"
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-600 text-sm md:text-base font-medium mb-3 font-poppins tracking-wide">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 font-romie">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-poppins">
            Discover the perfect travel experience tailored just for you
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <PackageCard
                image={service.image}
                title={service.title}
                subtitle={service.subtitle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

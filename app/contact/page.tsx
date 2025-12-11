'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.p 
          className="text-gray-500 font-poppins text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.p>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-romie text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Talk to us
        </motion.h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {/* Phone Card */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start text-left hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-[#6b5e52] p-3 rounded-full text-white mr-6 mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-romie">Phone</h3>
                <p className="text-gray-600 font-poppins text-sm mb-1">+94 77 668 6965 / +94 78 803 2515</p>
                <p className="text-gray-600 font-poppins text-sm">+94 72 105 8986 (Whatsapp)</p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start text-left hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-[#6b5e52] p-3 rounded-full text-white mr-6 mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-romie">Email</h3>
                <p className="text-gray-600 font-poppins text-sm">info@visitsrilankatours.com</p>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start text-left hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-[#6b5e52] p-3 rounded-full text-white mr-6 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-romie">Address</h3>
                <p className="text-gray-600 font-poppins text-sm mb-1">No. 29, Carmel Group, Dambulla</p>
                <p className="text-gray-600 font-poppins text-sm">Road, Kurunegala 60499, Sri Lanka</p>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] md:h-[500px] bg-gray-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.33806371728!2d80.366258!3d7.486338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a39e8f4989d%3A0xc39a9c6c8c4c7c8!2sKurunegala%2C%20Sri%20Lanka!5e0!3m2!1sen!2suk!4v1625123456789!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  )
}

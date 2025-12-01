'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Our Services', href: '#services' },
        { name: 'Packages', href: '#packages' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ]

    const services = [
        { name: 'Airport Transfers', href: '#' },
        { name: 'Day Tours', href: '#' },
        { name: 'Long Tours', href: '#' },
        { name: 'Custom Tours', href: '#' },
        { name: 'Hotel Bookings', href: '#' },
        { name: 'Travel Insurance', href: '#' },
    ]

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ]

    return (
        <footer className="w-full bg-white text-slate-900 font-poppins relative overflow-hidden border-t border-slate-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #0891b2 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-6">
                            <Image 
                                src="/Logo.png" 
                                alt="Tropic Vista Tours" 
                                width={150} 
                                height={120}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            Your trusted gateway to Sri Lanka's heart. We create unforgettable journeys celebrating authenticity, comfort, and adventure.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-cyan-500 border border-slate-200 flex items-center justify-center transition-all duration-300 group"
                                >
                                    <social.icon className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 hover:text-cyan-600 text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-cyan-600 group-hover:w-4 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="text-slate-600 hover:text-cyan-600 text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-cyan-600 group-hover:w-4 transition-all duration-300"></span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        123 Galle Road, Colombo 03,<br />Sri Lanka
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-cyan-600" />
                                </div>
                                <a href="tel:+94112345678" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">
                                    +94 11 234 5678
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-cyan-600" />
                                </div>
                                <a href="mailto:info@tropicvistatours.com" className="text-slate-600 hover:text-cyan-600 text-sm transition-colors">
                                    info@tropicvistatours.com
                                </a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-slate-900 mb-3">Subscribe to Newsletter</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                                <button className="w-10 h-10 rounded-lg bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-colors">
                                    <Send className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-600 text-sm text-center md:text-left">
                            © {currentYear} Created by NexonTeam with <span className="text-cyan-600">Next.js</span>. All rights reserved. | Licensed by NexonTeam
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="#" className="text-slate-600 hover:text-cyan-600 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-slate-600 hover:text-cyan-600 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-slate-600 hover:text-cyan-600 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>
        </footer>
    )
}
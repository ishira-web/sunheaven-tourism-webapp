'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Packages', href: '/packages' },
        { name: 'Transport', href: '/transport' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <>
            <header className="w-full h-16 bg-white/95 backdrop-blur-md font-poppins fixed top-0 left-0 right-0 z-50">
                <div className="w-full h-full flex items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image 
                            src="/Logo.png" 
                            alt="Logo" 
                            width={190} 
                            height={150} 
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="text-sm hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed top-16 right-0 bottom-0 w-64 bg-white shadow-2xl z-40 md:hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-700 hover:text-amber-600 font-medium text-lg py-2 px-4 rounded-lg hover:bg-amber-50 transition-all duration-300"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    )
}
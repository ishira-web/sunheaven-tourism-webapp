'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const cursorDotRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorDot = cursorDotRef.current

        if (!cursor || !cursorDot) return

        // GSAP quickTo for smooth, performant animation
        const xTo = gsap.quickTo(cursor, 'x', { duration: 0.6, ease: 'power3' })
        const yTo = gsap.quickTo(cursor, 'y', { duration: 0.6, ease: 'power3' })
        
        const xDotTo = gsap.quickTo(cursorDot, 'x', { duration: 0.3, ease: 'power3' })
        const yDotTo = gsap.quickTo(cursorDot, 'y', { duration: 0.3, ease: 'power3' })

        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX)
            yTo(e.clientY)
            xDotTo(e.clientX)
            yDotTo(e.clientY)
        }

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 1.5,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove)

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
        
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            {/* Main cursor circle */}
            <div
                ref={cursorRef}
                className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
                style={{
                    width: '40px',
                    height: '40px',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className="w-full h-full rounded-full border-2 border-white bg-amber-100 "></div>
            </div>

            {/* Cursor dot */}
            <div
                ref={cursorDotRef}
                className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
                style={{
                    width: '8px',
                    height: '8px',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className="w-full h-full rounded-full bg-white"></div>
            </div>

            <style jsx global>{`
                * {
                    cursor: none !important;
                }
                
                @media (pointer: coarse) {
                    .custom-cursor,
                    .custom-cursor-dot {
                        display: none;
                    }
                    
                    * {
                        cursor: auto !important;
                    }
                }
            `}</style>
        </>
    )
}

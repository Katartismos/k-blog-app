'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function WhiteScreenTransition() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useGSAP(() => {
    if (overlayRef.current) {
      // Synchronously cover the screen on route change or refresh
      gsap.set(overlayRef.current, { opacity: 1, display: 'block' })
      
      // Briefly delay to let all other GSAP animations (Header, Main) calculate 
      // their initial 'from' state positions without being seen. Then fade out.
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none' })
        }
      })
    }
  }, { dependencies: [pathname], scope: overlayRef }) // Re-run whenever the route changes

  return (
    <div 
      ref={overlayRef} 
      // Fixed overlay, extreme z-index, pure white background
      className="fixed inset-0 bg-white z-9999 pointer-events-none" 
    />
  )
}

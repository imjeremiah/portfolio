/**
 * @file AnimatedSection.tsx
 * @description Powerful animation wrapper with dramatic effects for modern portfolios.
 * @summary Creates stunning scroll-triggered animations with multiple variants
 * including fade-up, slide-in, scale, and stagger effects.
 */

'use client'

import { motion, useReducedMotion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type AnimationType = 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'dramatic'

interface AnimatedSectionProps {
  /** Content to animate */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Animation delay in seconds */
  delay?: number
  /** Type of animation to use */
  animation?: AnimationType
  /** Duration of animation */
  duration?: number
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  dramatic: {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0
    }
  }
}

/**
 * Powerful animation wrapper that creates stunning scroll-triggered animations.
 */
export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'dramatic',
  duration = 0.4,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10px' }}
      variants={animationVariants[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
        type: 'spring',
        damping: 20, // Snappier feel
        stiffness: 200 // More responsive
      }}
    >
      {children}
    </motion.div>
  )
}

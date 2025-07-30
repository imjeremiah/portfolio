/**
 * @file HeroSection.tsx
 * @description Stunning hero section with dramatic typography and animations.
 * @summary Creates an impressive first impression with large typography,
 * smooth animations, and modern design elements.
 */

'use client'

import { motion } from 'framer-motion'

/**
 * Smooth scroll to projects section
 */
function scrollToProjects() {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

/**
 * Hero section component with dramatic animations and modern typography.
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,255,0.05),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        {/* Main heading with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Name with greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: 'spring',
              damping: 20,
              stiffness: 150
            }}
            className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none"
          >
            <span className="block bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              <span className="font-semibold">Hi, I'm </span>
              <span className="font-black">Jeremiah</span>
            </span>
          </motion.h1>

          {/* Role/tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-subtle-gray">
              AI-First Software Engineer
            </h2>
            <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl text-subtle-gray leading-relaxed">
              Building innovative projects that solve real problems through cutting-edge technology and clean, scalable code.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="pt-8"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-full bg-accent-blue px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-blue to-blue-600"
                initial={false}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Scroll indicator with animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center space-y-3"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-subtle-gray">
                Scroll to explore
              </span>
              <motion.div
                animate={{ height: [120, 130, 120] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-px bg-gradient-to-b from-subtle-gray to-transparent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute top-20 left-10 h-20 w-20 rounded-full bg-accent-blue/10 blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-purple-500/10 blur-xl"
      />
    </section>
  )
}

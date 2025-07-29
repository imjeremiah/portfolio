/**
 * @file ProjectCard.tsx
 * @description Modern project card with stunning hover effects and animations.
 * @summary Creates an impressive project showcase with dynamic layouts,
 * smooth hover effects, and engaging visual presentation.
 */

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Project } from '@/lib/types'
import { DemoModal } from '@/components/shared/DemoModal'

interface ProjectCardProps {
  /** Project data to display */
  project: Project
  /** Card index for staggered animations */
  index: number
  /** Whether to reverse the layout (image on right) */
  isReversed?: boolean
}

/**
 * Project card component with dramatic hover effects and modern design.
 */
export function ProjectCard({ project, index, isReversed = false }: ProjectCardProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title={project.title}
        demoUrl={project.demoUrl}
      />
      
      {/* Project Card */}
    <motion.article
      className={`group relative grid lg:grid-cols-2 gap-12 items-center ${
        isReversed ? 'lg:grid-flow-col-dense' : ''
      }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project image */}
      <motion.div
        className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-2xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          {/* Image */}
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.imagePath}
              alt={project.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>

          {/* Floating action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14l11-7z" />
              </svg>
            </button>
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Project content */}
      <div className={`space-y-8 ${isReversed ? 'lg:col-start-1' : ''}`}>
        {/* Project number */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-7xl font-black text-accent-blue/20"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Project title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
        >
          {project.title}
        </motion.h3>

        {/* Project description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-subtle-gray leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {project.techStack.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.1 }}
              className="px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue font-medium text-sm border border-accent-blue/20 hover:bg-accent-blue/20 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="group relative overflow-hidden rounded-full bg-accent-blue px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
                            <span>View Demo</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14l11-7z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-blue-600 transition-transform duration-300 group-hover:scale-105" />
          </button>
          
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border-2 border-subtle-gray/30 px-8 py-4 font-semibold text-current transition-all duration-300 hover:border-accent-blue hover:text-accent-blue hover:scale-105"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View Code</span>
              <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </span>
          </Link>

          {/* Research paper button - conditional for projects with published research */}
          {project.paperUrl && (
            <Link
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border-2 border-purple-500/30 px-8 py-4 font-semibold text-purple-600 dark:text-purple-400 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Read Paper</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.article>
    </>
  )
}

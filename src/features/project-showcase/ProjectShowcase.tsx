/**
 * @file ProjectShowcase.tsx
 * @description Stunning project showcase with dramatic animations and modern design.
 * @summary Displays portfolio projects with engaging hover effects,
 * staggered animations, and impressive visual presentation.
 */

import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/lib/project-data'

/**
 * Project showcase section with enhanced animations and modern layout.
 */
export function ProjectShowcase() {
  return (
    <section id="projects" className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,255,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <AnimatedSection animation="dramatic" delay={0.2}>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Selected Work
            </h2>
            <p className="text-xl md:text-2xl text-subtle-gray max-w-4xl mx-auto leading-relaxed">
              A curated collection of projects that showcase technical excellence, innovative problem-solving, and passion for creating exceptional user experiences.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="dramatic" 
              delay={0.4 + index * 0.2}
            >
              <ProjectCard 
                project={project} 
                index={index}
                isReversed={index % 2 === 1}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

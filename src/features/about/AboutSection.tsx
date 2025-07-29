/**
 * @file AboutSection.tsx
 * @description About section with dramatic animations and modern design.
 * @summary Showcases personal bio and technical skills with stunning
 * scroll-triggered animations and improved typography.
 */

import { AnimatedSection } from '@/components/shared/AnimatedSection'

/**
 * About section component with enhanced animations and design.
 */
export function AboutSection() {
  const technologies = [
    'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 
    'PostgreSQL', 'AWS', 'Docker', 'OpenAI API', 'Tailwind CSS'
  ]

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <AnimatedSection animation="dramatic" delay={0.2}>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl md:text-2xl text-subtle-gray max-w-3xl mx-auto leading-relaxed">
              Building the future with AI-first development principles
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Bio content */}
          <div className="space-y-8">
            <AnimatedSection animation="slideLeft" delay={0.4}>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-xl md:text-2xl font-medium">
                  I'm a software engineer passionate about creating innovative solutions that push the boundaries of what's possible with modern technology.
                </p>
                <p className="text-subtle-gray">
                  My approach to development centers around AI-first principles, clean architecture, and building tools that genuinely improve people's lives. Every line of code is an opportunity to craft something extraordinary.
                </p>
                <p className="text-subtle-gray">
                  With experience across the full stack—from React and Next.js frontends to Node.js backends and cloud infrastructure—I focus on creating applications that are not just functional, but delightful to use.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.6}>
              <div className="pt-8 border-t border-subtle-gray/20">
                <h3 className="text-2xl font-bold mb-6">Core Philosophy</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                    <p className="text-subtle-gray">Clean, maintainable code that scales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                    <p className="text-subtle-gray">AI-first development approach</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                    <p className="text-subtle-gray">User-centered design thinking</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Technologies */}
          <div>
            <AnimatedSection animation="slideRight" delay={0.5}>
              <h3 className="text-3xl font-bold mb-8">Technologies I Love</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <AnimatedSection 
                    key={tech} 
                    animation="scale" 
                    delay={0.7 + index * 0.1}
                  >
                    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {tech}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

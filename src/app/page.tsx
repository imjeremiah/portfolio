/**
 * @file page.tsx
 * @description Main landing page for the portfolio website.
 * @summary This is the primary page that contains all sections of the
 * portfolio including Hero, Projects, and Footer sections. It provides
 * a complete scrolling narrative experience showcasing Jeremiah's work.
 */

import { HeroSection } from '@/features/hero/HeroSection'
import { ProjectShowcase } from '@/features/project-showcase/ProjectShowcase'
import { Footer } from '@/features/footer/Footer'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - First impression with greeting and tagline */}
      <HeroSection />

      {/* Project Showcase - Curated collection of work */}
      <ProjectShowcase />

      {/* Footer - Contact information and social links */}
      <Footer />
    </>
  )
}

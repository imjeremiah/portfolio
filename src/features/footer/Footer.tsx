/**
 * @file Footer.tsx
 * @description Footer component for the portfolio website.
 * @summary This component renders the site footer with social media links,
 * resume download, and copyright information. It serves as the final section
 * of the scrolling narrative and provides key contact actions.
 */

import Link from 'next/link'
import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { EmailIcon } from '@/components/icons/EmailIcon'
import { ThemeToggle } from '@/components/shared/ThemeToggle'

/**
 * Footer component with social links and contact information.
 */
export function Footer() {
  return (
    <footer className="border-t border-subtle-gray/20 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Contact Section */}
        <div className="mb-12 space-y-8 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-black via-gray-700 to-black dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">Let's Connect</h2>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl text-subtle-gray leading-relaxed">
            Interested in working together or have a question?<br />
            I&apos;d love to hear from you.
          </p>

          {/* Resume Download */}
          <div className="pt-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-accent-blue px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>View Resume</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-blue-600 transition-transform duration-300 group-hover:scale-105" />
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8 flex justify-center gap-6">
          <Link
            href="https://github.com/imjeremiah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-subtle-gray transition-colors hover:text-accent-blue"
            aria-label="Visit GitHub profile"
          >
            <GitHubIcon size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/jeremiahcandelaria"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-subtle-gray transition-colors hover:text-accent-blue"
            aria-label="Visit LinkedIn profile"
          >
            <LinkedInIcon size={24} />
          </Link>
          <Link
            href="mailto:jeremiahcandelaria@gmail.com"
            className="p-3 text-subtle-gray transition-colors hover:text-accent-blue"
            aria-label="Send email"
          >
            <EmailIcon size={24} />
          </Link>
          <ThemeToggle />
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-subtle-gray">
          <p>
            &copy; {new Date().getFullYear()} Jeremiah Candelaria. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

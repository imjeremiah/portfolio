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
          <h2 className="text-2xl font-bold md:text-3xl">Let's Connect</h2>
          <p className="mx-auto max-w-2xl text-lg text-subtle-gray">
            Interested in working together or have a question? I&apos;d love to
            hear from you.
          </p>

          {/* Resume Download */}
          <div className="pt-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-accent-blue px-6 py-3 font-medium text-white transition-colors hover:bg-accent-blue/90"
            >
              Download Resume
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

/**
 * @file ContactSection.tsx
 * @description Contact section component with form for the portfolio website.
 * @summary This component renders a contact form using shadcn/ui components.
 * During the MVP phase, the form is visually complete but non-functional.
 * It will be connected to backend services in Phase 4.
 */

'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/**
 * Contact form section with name, email, and message fields.
 */
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission in Phase 4
    console.log('Form submission:', formData)
    alert('Thank you for your message! (Form submission coming in Phase 4)')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <AnimatedSection>
      <section className="bg-subtle-gray/5 px-4 py-24 dark:bg-subtle-gray/5">
        <div className="mx-auto max-w-2xl">
          {/* Section Header */}
          <div className="mb-16 space-y-6 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Get In Touch</h2>
            <p className="text-lg text-subtle-gray md:text-xl">
              Have a project in mind? Let&apos;s discuss how we can work
              together.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-current"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white dark:bg-black"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-current"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white dark:bg-black"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-current"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="resize-none bg-white dark:bg-black"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent-blue text-white hover:bg-accent-blue/90"
              size="lg"
            >
              Send Message
            </Button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 border-t border-subtle-gray/20 pt-8 text-center">
            <p className="mb-4 text-subtle-gray">
              Prefer to reach out directly?
            </p>
            <a
              href="mailto:jeremiah@jeremiahcandelaria.com"
              className="font-medium text-accent-blue hover:underline"
            >
              jeremiah@jeremiahcandelaria.com
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

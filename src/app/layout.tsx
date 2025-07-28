/**
 * @file layout.tsx
 * @description Root layout component for the portfolio website.
 * @summary This component provides the main HTML structure, metadata, and
 * global styling for the entire application. It includes theme support and
 * proper semantic HTML structure.
 */

import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Jeremiah Candelaria - Software Engineer',
  description:
    'AI-First Software Engineer building innovative projects. Portfolio showcasing 4-6 curated GitHub projects with clean, minimalist design.',
  keywords: [
    'Software Engineer',
    'AI',
    'Next.js',
    'React',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Jeremiah Candelaria' }],
  creator: 'Jeremiah Candelaria',
  metadataBase: new URL('https://jeremiahcandelaria.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeremiahcandelaria.com',
    title: 'Jeremiah Candelaria - Software Engineer',
    description: 'AI-First Software Engineer building innovative projects.',
    siteName: 'Jeremiah Candelaria Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-black dark:bg-black dark:text-white">
        <ThemeProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

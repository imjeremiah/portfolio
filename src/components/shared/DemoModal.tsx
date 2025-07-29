/**
 * @file DemoModal.tsx
 * @description Modal component for displaying project demos in-app.
 * @summary Beautiful modal with app styling that embeds Loom videos,
 * Google Slides, and Google Drive files without external redirects.
 */

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface DemoModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Function to close the modal */
  onClose: () => void
  /** Project title for the modal header */
  title: string
  /** Demo URL to embed */
  demoUrl: string
}

/**
 * Converts various demo URLs to embeddable formats
 */
function getEmbedUrl(url: string): string {
  // Loom video URLs
  if (url.includes('loom.com/share/')) {
    const videoId = url.split('/').pop()?.split('?')[0]
    return `https://www.loom.com/embed/${videoId}`
  }
  
  // Google Slides URLs
  if (url.includes('docs.google.com/presentation')) {
    // Extract presentation ID and convert to embed format
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
    if (match) {
      return `https://docs.google.com/presentation/d/${match[1]}/embed?start=false&loop=false&delayms=3000`
    }
  }
  
  // Google Drive URLs
  if (url.includes('drive.google.com/file')) {
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`
    }
  }
  
  // Fallback to original URL
  return url
}

/**
 * Modal component for displaying project demos with beautiful animations
 */
export function DemoModal({ isOpen, onClose, title, demoUrl }: DemoModalProps) {
  const embedUrl = getEmbedUrl(demoUrl)

  // Handle escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {title} Demo
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close modal"
                >
                  <svg 
                    className="w-6 h-6 text-gray-600 dark:text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={embedUrl}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${title} Demo`}
                />
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Esc</kbd> to close
                  </p>
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:text-blue-600 font-medium text-sm transition-colors"
                  >
                    Open in new tab →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 
/**
 * @file DemoModal.tsx
 * @description Modal component for displaying project demos in-app.
 * @summary Beautiful modal with app styling that embeds Loom videos,
 * Google Slides, and Google Drive files without external redirects.
 */

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

type ModalType = 'demo' | 'code' | 'paper'

interface DemoModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Function to close the modal */
  onClose: () => void
  /** Project title for the modal header */
  title: string
  /** Content URL to embed */
  contentUrl: string
  /** Type of content being displayed */
  type: ModalType
}

/**
 * Converts various URLs to embeddable formats based on content type
 */
function getEmbedUrl(url: string, type: ModalType): string {
  if (type === 'demo') {
    // Loom video URLs
    if (url.includes('loom.com/share/')) {
      const videoId = url.split('/').pop()?.split('?')[0]
      return `https://www.loom.com/embed/${videoId}`
    }
    
    // Google Slides URLs
    if (url.includes('docs.google.com/presentation')) {
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
  }
  
  if (type === 'code') {
    // GitHub repository URLs - embed the repo
    if (url.includes('github.com')) {
      // Use GitHub's embed format or just load the repo directly
      return url
    }
  }
  
  if (type === 'paper') {
    // Google Drive research papers
    if (url.includes('drive.google.com/file')) {
      const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
      if (match) {
        return `https://drive.google.com/file/d/${match[1]}/preview`
      }
    }
  }
  
  // Fallback to original URL
  return url
}

/**
 * Gets the appropriate modal title based on content type
 */
function getModalTitle(title: string, type: ModalType): string {
  switch (type) {
    case 'demo':
      return `${title} Demo`
    case 'code':
      return `${title} Code`
    case 'paper':
      return `${title} Research Paper`
    default:
      return `${title} Demo`
  }
}

/**
 * Gets the appropriate footer text based on content type
 */
function getFooterText(type: ModalType): string {
  switch (type) {
    case 'demo':
      return 'Open in new tab'
    case 'code':
      return 'Open in GitHub'
    case 'paper':
      return 'Open full paper'
    default:
      return 'Open in new tab'
  }
}

/**
 * Modal component for displaying project content with beautiful animations
 */
export function DemoModal({ isOpen, onClose, title, contentUrl, type }: DemoModalProps) {
  const embedUrl = getEmbedUrl(contentUrl, type)
  const modalTitle = getModalTitle(title, type)
  const footerText = getFooterText(type)

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
                  {modalTitle}
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
              <div className="relative" style={{ paddingBottom: type === 'code' ? '75%' : '56.25%', height: 0 }}>
                <iframe
                  src={embedUrl}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={modalTitle}
                />
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Esc</kbd> to close
                  </p>
                  <a
                    href={contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:text-blue-600 font-medium text-sm transition-colors"
                  >
                    {footerText} →
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
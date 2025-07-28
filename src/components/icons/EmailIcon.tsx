/**
 * @file EmailIcon.tsx
 * @description Email icon component.
 * @summary SVG icon component for email contact link in the footer.
 * Follows the minimalist design principles with proper accessibility.
 */

interface EmailIconProps {
  /** Icon size in pixels */
  size?: number
  /** Additional CSS classes */
  className?: string
}

/**
 * Email icon component.
 * @param size - Icon size in pixels (default: 24)
 * @param className - Additional CSS classes for styling
 */
export function EmailIcon({ size = 24, className = '' }: EmailIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

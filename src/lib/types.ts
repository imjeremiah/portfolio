/**
 * @file types.ts
 * @description Type definitions and interfaces for the portfolio website.
 * @summary This file contains all TypeScript type definitions, interfaces,
 * and enums used throughout the application for consistent typing.
 */

/**
 * Represents a portfolio project with all necessary display information.
 */
export interface Project {
  /** Unique identifier for the project */
  id: string
  /** Display title of the project */
  title: string
  /** Brief description of the project (2-4 sentences) */
  description: string
  /** Array of technology names used in the project */
  techStack: string[]
  /** URL to the live demo or project video */
  demoUrl: string
  /** URL to the GitHub repository */
  repoUrl: string
  /** Path to the project screenshot/image */
  imagePath: string
  /** Alt text for the project image */
  imageAlt: string
  /** Optional URL to published research paper or academic publication */
  paperUrl?: string
  /** Optional URL to playable game or live application */
  playUrl?: string
}

/**
 * @file project-data.ts
 * @description Static project data for the portfolio showcase.
 * @summary This file contains the hardcoded array of projects displayed
 * in the portfolio. During Phase 4, this could be moved to a CMS or API,
 * but for the MVP it serves as a manageable data source.
 */

import { Project } from '@/lib/types'

/**
 * Array of portfolio projects to showcase.
 * Each project represents a curated GitHub repository with complete metadata.
 */
export const projects: Project[] = [
  {
    id: 'ai-chat-app',
    title: 'AI Chat Application',
    description:
      'A modern chat application powered by OpenAI GPT models with real-time messaging, conversation history, and customizable AI personas. Built to explore the intersection of AI and human communication.',
    techStack: [
      'Next.js',
      'TypeScript',
      'OpenAI API',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
    ],
    demoUrl: 'https://ai-chat-demo.vercel.app',
    repoUrl: 'https://github.com/jeremiahcandelaria/ai-chat-app',
    imagePath: '/projects/ai-chat-app.jpg',
    imageAlt:
      'AI Chat Application interface showing conversation with AI assistant',
  },
  {
    id: 'task-automation-platform',
    title: 'Task Automation Platform',
    description:
      'A workflow automation tool that connects various APIs and services to streamline repetitive tasks. Features a visual flow builder and supports complex conditional logic for business process automation.',
    techStack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Docker',
      'AWS Lambda',
    ],
    demoUrl: 'https://automation-platform-demo.com',
    repoUrl: 'https://github.com/jeremiahcandelaria/task-automation',
    imagePath: '/projects/automation-platform.jpg',
    imageAlt:
      'Task automation platform dashboard with workflow builder interface',
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Real-time Analytics Dashboard',
    description:
      'Interactive dashboard for visualizing complex datasets with real-time updates. Supports multiple chart types, custom filters, and data export functionality for business intelligence applications.',
    techStack: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Redis', 'WebSockets'],
    demoUrl: 'https://analytics-dashboard-demo.netlify.app',
    repoUrl: 'https://github.com/jeremiahcandelaria/analytics-dashboard',
    imagePath: '/projects/analytics-dashboard.jpg',
    imageAlt:
      'Analytics dashboard showing various charts and real-time data visualizations',
  },
  {
    id: 'mobile-fitness-tracker',
    title: 'Mobile Fitness Tracker',
    description:
      'Cross-platform mobile application for tracking workouts, nutrition, and health metrics. Includes social features, progress analytics, and integration with popular fitness devices and apps.',
    techStack: [
      'React Native',
      'Expo',
      'Firebase',
      'TypeScript',
      'Redux Toolkit',
    ],
    demoUrl: 'https://fitness-tracker-demo.expo.dev',
    repoUrl: 'https://github.com/jeremiahcandelaria/fitness-tracker',
    imagePath: '/projects/fitness-tracker.jpg',
    imageAlt:
      'Mobile fitness tracker app showing workout logging and progress charts',
  },
]

/**
 * @file project-data.ts
 * @description Static project data for the portfolio showcase.
 * @summary This file contains the ranked array of AI-first projects displayed
 * in the portfolio. Projects are ordered by AI impressiveness, technical depth,
 * and relevance to AI-First Software Engineer branding.
 */

import { Project } from '@/lib/types'

/**
 * Array of portfolio projects to showcase, ranked by AI-first impressiveness.
 * Each project represents a curated repository demonstrating advanced AI integration,
 * sophisticated technical architecture, and real-world impact.
 */
export const projects: Project[] = [
  /** 
   * #1 - TradeFlow AI Mobile: AI-driven mobile optimization leader
   * Showcases GPT-4o spatial reasoning, 2-step edge function architecture,
   * and sophisticated business workflow automation.
   */
  {
    id: 'tradeflow-ai-mobile',
    title: 'TradeFlow AI Mobile',
    description:
      'AI-powered mobile application that revolutionizes service workflow optimization using GPT-4o spatial reasoning. Features intelligent job prioritization, automated inventory analysis, and dynamic route optimization through a sophisticated 2-step edge function architecture. Transforms complex business logistics into streamlined, AI-driven workflows.',
    techStack: [
      'React Native',
      'TypeScript', 
      'Supabase',
      'OpenAI GPT-4o',
      'Expo',
      'TanStack Query',
    ],
    demoUrl: 'https://docs.google.com/presentation/d/1NllK48niln0D-ASrWC82_SYy362wuMv0ZQD-wUkEK1M/edit?slide=id.g344ba1186e2_0_1#slide=id.g344ba1186e2_0_1',
    repoUrl: 'https://github.com/tradeflow-ai/mobile',
    imagePath: '/projects/tradeflow-ai-mobile.jpg',
    imageAlt:
      'TradeFlow AI Mobile interface showing AI-optimized job prioritization and route optimization dashboard',
  },

  /** 
   * #2 - Word Rush: Real-time UX mastery with competitive multiplayer
   * Demonstrates advanced Socket.io synchronization, Phaser 3 game mechanics,
   * and AI-first development philosophy.
   */
  {
    id: 'word-rush',
    title: 'Word Rush',
    description:
      'Real-time competitive multiplayer word game that combines strategic depth with addictive, polished feedback loops. Built with AI-first development philosophy, featuring seamless Socket.io real-time synchronization and "juicy" game mechanics powered by Phaser 3. Demonstrates mastery of modern real-time web architecture and engaging user experience design.',
    techStack: [
      'React',
      'Phaser 3', 
      'Socket.io',
      'TypeScript',
      'Node.js',
      'Express',
    ],
    demoUrl: 'https://www.loom.com/share/9d8ce7586b6745b9b6c501f6a4f42534',
    repoUrl: 'https://github.com/imjeremiah/word-rush',
    imagePath: '/projects/word-rush.jpg',
    imageAlt:
      'Word Rush game interface showing real-time multiplayer word game with competitive scoring and social features',
  },

  /** 
   * #3 - Essay Elevate: NLP excellence with specialized AI writing coaches
   * Features 6 AI-powered writing assistants using OpenAI GPT-4o for
   * sophisticated text analysis and academic improvement.
   */
  {
    id: 'essay-elevate',
    title: 'Essay Elevate',
    description:
      'AI-powered writing assistant that transforms student writing through sophisticated NLP analysis. Features 6 specialized AI coaches including thesis evolution, evidence integration, and critical thinking prompting using OpenAI GPT-4o. Goes beyond grammar checking to provide deep structural feedback on argument sophistication and academic voice development.',
    techStack: [
      'Next.js',
      'OpenAI GPT-4o',
      'Supabase',
      'TypeScript', 
      'Tailwind CSS',
      'Shadcn/ui',
    ],
    demoUrl: 'https://www.loom.com/share/513ce55539034f23857e07992475b5ba',
    repoUrl: 'https://github.com/imjeremiah/essay-elevate',
    imagePath: '/projects/essay-elevate.jpg',
    imageAlt:
      'Essay Elevate interface showing AI writing coaches providing real-time feedback on academic writing',
  },

  /** 
   * #4 - Doyen Client: Institutional credibility with published research
   * Commissioned by Harvard and Pfizer, resulted in published paper on
   * AI-driven expert matching methodologies.
   */
  {
    id: 'doyenclient',
    title: 'Doyen Client',
    description:
      'Professional expert-matching platform commissioned by Harvard and Pfizer for academic and pharmaceutical research collaboration. Features sophisticated search algorithms, expert profiling, and filtering systems to connect researchers with domain specialists. Resulted in published research paper on AI-driven expert matching methodologies, demonstrating real-world impact in institutional research environments.',
    techStack: [
      'Next.js',
      'React',
      'Firebase',
      'Tailwind CSS',
      'Cypress',
      'JavaScript',
    ],
    demoUrl: 'https://drive.google.com/file/d/1rYCxKMJS3DFBz9bhGxr7onma9NpWbByU/view',
    repoUrl: 'https://github.com/DoyenTeam/doyenclient',
    imagePath: '/projects/doyenclient.jpg',
    imageAlt:
      'Doyen Client platform interface showing expert search and matching system for Harvard and Pfizer research',
    paperUrl: 'placeholder-for-published-paper-url',
  },

  /** 
   * #5 - Dry Prompt: Niche AI innovation with desktop automation
   * Features LangGraph.js workflow orchestration, DBSCAN clustering,
   * and native macOS integration for intelligent productivity automation.
   */
  {
    id: 'dry-prompt',
    title: 'Dry Prompt',
    description:
      'AI-powered macOS desktop application that revolutionizes productivity through intelligent typing habit analysis. Uses LangGraph.js workflow orchestration and DBSCAN clustering to automatically identify repetitive text patterns, then creates native macOS keyboard shortcuts. Features advanced privacy protection with macOS Keychain integration and seamless system-level automation.',
    techStack: [
      'Electron',
      'LangGraph.js',
      'OpenAI GPT-4',
      'TypeScript',
      'Supabase',
      'DBSCAN Clustering',
    ],
    demoUrl: 'https://www.loom.com/share/3a4f19a51c1948318db60b1d3638a03f',
    repoUrl: 'https://github.com/imjeremiah/dry-prompt',
    imagePath: '/projects/dry-prompt.jpg',
    imageAlt:
      'Dry Prompt desktop application showing AI-powered keyboard shortcut generation and system tray integration',
  },

  /** 
   * #6 - Foodie Snap: ML variety with computer vision and RAG
   * Demonstrates multiple ML disciplines including computer vision,
   * semantic search with pgvector, and personalized AI recommendations.
   */
  {
    id: 'foodie-snap',
    title: 'Foodie Snap',
    description:
      'AI-first mobile application combining social media with intelligent nutrition tracking through cutting-edge Retrieval-Augmented Generation (RAG). Features computer vision food scanning, semantic search with pgvector embeddings, AI caption generation, and personalized health insights. Demonstrates mastery of modern ML techniques including computer vision, NLP, and recommendation systems in a polished mobile experience.',
    techStack: [
      'React Native',
      'OpenAI GPT-4o',
      'pgvector (RAG)',
      'Expo',
      'Supabase',
      'TypeScript',
    ],
    demoUrl: 'https://www.loom.com/share/61acc8eef5ff425e81cafe093fde98f8',
    repoUrl: 'https://github.com/imjeremiah/foodie-snap',
    imagePath: '/projects/foodie-snap.jpg',
    imageAlt:
      'Foodie Snap mobile app showing AI-powered food scanning, nutrition analysis, and social sharing features',
  },
]

# Project Overview: Jeremiah Candelaria Portfolio Website

## 1. Overview
**Project Name**: Jeremiah Candelaria Portfolio  
**Domain**: jeremiahcandelaria.com (hosted via Cloudflare)  
**Description**: A personal portfolio website to showcase your software development work, particularly select GitHub projects, while demonstrating your skills through the site's own UI/UX design. The site will blend a minimalist, scrolling narrative flow inspired by Robb Owen's site with practical project showcasing from Annie Liew's format, all underpinned by Apple's design principles of simplicity, elegance, and intuitive user experience. The site itself will be a "project" that highlights your technical prowess (e.g., clean code, performance, interactivity).  

Inspiration from Robb Owen's site ([robbowen.digital](https://robbowen.digital/)) for flow, design, and feel; Annie Liew's work showcasing format ([anniebombanie.com/#work](https://anniebombanie.com/#work)) for practical project presentation; Apple-inspired principles of minimalism, elegance, and UX excellence; the super-minimal black-and-white color palette with a single Apple Blue accent; the tech stack (Next.js with React/TypeScript, Tailwind, Shadcn/UI); and core features like curated GitHub project highlights with screenshots, demo videos, links, descriptions, and tech stacks. The PRD is designed to be actionable, serving as a blueprint for building jeremiahcandelaria.com—a site that's not just a portfolio but a meta-showcase of your software development skills.

## 2. Goals and Objectives
- **Primary Goal**: Create an awesome, professional online presence that attracts job opportunities, collaborations, or clients by showcasing 4-6 curated GitHub projects in an engaging, visual way.
- **Secondary Goals**:
  - Demonstrate your dev skills meta-style (e.g., through the site's code, performance, and subtle interactions).
  - Achieve a clean, minimalist aesthetic that's intuitive and delightful, with high performance (e.g., Lighthouse scores >95).
  - Ensure the site is accessible, mobile-first, and easy to maintain/iterate.
- **Success Criteria**: Site launches on domain; garners positive feedback; drives traffic to GitHub repos (track via analytics); personal satisfaction with the "awesome display" of UI/UX.

## 3. Target Audience
- **Primary**: Recruiters, hiring managers, and tech companies (e.g., for software dev roles, potentially FAANG-level).
- **Secondary**: Fellow developers (for open-source networking), potential clients (freelance opportunities), and general visitors (e.g., via search or social shares).
- **User Needs**: Quick scanning of your skills/projects; easy contact; inspiration from the site's design. Assume tech-savvy users on desktop/mobile, with varying accessibility needs.

## 4. Features and Requirements
### Must-Have Features
- **Site Structure (Robb-Inspired Scrolling Narrative)**:
  - Single-page vertical scroll with smooth sections: Hero/Intro → About → Work/Projects → Contact/Resume → Footer.
  - Subtle scroll prompts (e.g., "S c r o l l") for engagement.
- **Hero/Intro Section**:
  - Bold greeting (e.g., "Hi, my name is Jeremiah") with tagline (e.g., "AI-First Software Engineer building innovative [niche] projects").
  - Optional illustrated portrait or photo, with subtle animation on load.
- **About Section**:
  - Personal bio, background, and narrative (e.g., "I'm passionate about [dev focus]").
  - Highlight how the site itself demonstrates your skills.
- **Work/Projects Section (Annie-Inspired Format, Blended with Robb)**:
  - Curated 4-6 GitHub projects, presented in stacked, full-width "chapters" within the scroll.
  - Per project: Title, brief description (2-4 sentences: problem solved, role, impact), tech stack badges (minimal icons), device mockup screenshots, short demo video embed (responsive, lazy-loaded), dual buttons ("View Demo" for video demo of project, maybe a link to a live site, "View on GitHub" for repo).
- **Contact/Resume Section**:
  - Downloadable PDF resume link.
  - Social links (GitHub, LinkedIn, email).
- **Footer**: Copyright, social icons.
- **Global Features**:
  - Mobile-first responsiveness.
  - Accessibility (WCAG 2.1: alt text, ARIA labels, keyboard nav).
  - Performance optimizations (lazy-loading, image compression, <2s load time).
  - Dark mode toggle (auto-detect user preference).

### Nice-to-Have Features
- Subtle animations (e.g., fade-ins on scroll, hover effects on cards).
- Analytics integration (e.g., Google Analytics for engagement tracking).
- Multilingual support or SEO enhancements (meta tags, sitemap).
- Interactive "Try It" modals for project demos.

### Non-Functional Requirements
- **Performance**: Aim for 100% Lighthouse scores in performance/accessibility/best practices.
- **Security**: HTTPS via Cloudflare; no user data storage beyond forms.
- **Scalability**: Easy to add projects/pages without redesign.
- **Browser Support**: Latest Chrome, Firefox, Safari, Edge; mobile iOS/Android.

## 5. Design Principles
- **Aesthetic**: Super minimalist black-and-white with one accent—elegant, timeless, and Apple-inspired (clean lines, generous whitespace, intuitive navigation).
- **Color Palette**:
  - Black (#000000): Primary text/headers.
  - White (#FFFFFF): Main backgrounds.
  - Accent Blue (#007AFF): Interactive elements only (e.g., buttons, hovers, links).
  - Optional Gray (#6B7280): Secondary text/borders for subtle hierarchy.
- **Typography**: Sans-serif fonts (e.g., system fonts like San Francisco for performance); large, bold headers for impact (Robb-style).
- **UI/UX Guidelines**:
  - Robb-Inspired: Fluid scrolling narrative, subtle interactivity, artistic restraint.
  - Annie-Inspired: Visual, scannable project showcases with device mockups.
  - Apple Principles: Simplicity (less is more), mobile-first, high-fidelity (smooth transitions, no clutter).
  - Interactivity: Use accent sparingly for delight (e.g., blue glow on hover); ensure fast, seamless experience.

## 6. Technical Requirements
- **Frontend Framework**: Next.js (with React for components).
- **Language**: TypeScript (for type safety and maintainability).
- **Styling**: Tailwind CSS (utility-first for rapid, custom styling with the palette).
- **UI Components**: Shadcn/UI (customizable, accessible primitives like cards/buttons).
- **Optional Libraries**: Framer Motion (subtle animations); React Player (video embeds).
- **Integrations**:
  - GitHub API (for dynamic project data).
  - Cloudflare Workers (for form handling).
- **Deployment**: Cloudflare Pages (free, fast, integrated with your domain).
- **Development Tools**: Git for version control.
- **Testing**: Manual (cross-browser/device); automated (e.g., Jest for components).
- **Dependencies**: Minimize to essentials; no heavy libraries.

## 7. User Flows
- **Main Flow**: Visitor lands on home → Scrolls through intro/about → Explores projects (views screenshots/video, clicks GitHub/demo links) → Contacts you or downloads resume.
- **Project Interaction Flow**: Hover on project card → Accent highlight → Click button → Redirect to GitHub/live demo.
- **Diagrams**: (Sketch in tools like Figma: Simple wireframes with scroll arrows and accent highlights.)

## 8. Timeline and Milestones
- **Week 1**: Setup (scaffold Next.js project, integrate Tailwind/Shadcn, define palette).
- **Week 2**: Build core structure (hero, about, projects, contact) + static content.
- **Week 3**: Add interactivity (API fetches, animations) + testing/optimizations.
- **Week 4**: Polish, deploy to Cloudflare, domain setup, launch.
- **Total Timeline**: 1 month (part-time); flexible for iterations.

## 9. Risks and Assumptions
- **Risks**: Scope creep (e.g., adding too many features); performance issues with videos (mitigate with optimization); design feeling too stark (test with feedback).
- **Assumptions**: You have basic web dev experience (React/TS); access to assets (e.g., project screenshots, resume PDF); no budget constraints (all tools free/open-source).
- **Dependencies**: GitHub account for repos; Cloudflare for domain/hosting.

## 10. Success Metrics
- **Quantitative**: >95 Lighthouse scores; <2s average load time; 100+ visitors/month (via analytics); increased GitHub traffic.
- **Qualitative**: Positive user feedback (e.g., "clean and intuitive"); personal pride in the site's design as a skill showcase.
- **Monitoring**: Post-launch, track with Google Analytics; iterate based on data.
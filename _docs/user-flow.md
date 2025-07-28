# User Flow: Portfolio Website

This document outlines the user journey through the Jeremiah Candelaria portfolio website, based on the project overview. It defines the path a user takes to navigate the site and interact with its features.

## 1. Primary User Journey: The Recruiter or Hiring Manager

This user's goal is to quickly evaluate Jeremiah's skills and project work to determine if he is a suitable candidate for a software development role.

1.  **Entry Point**: The user arrives at the site, most likely by navigating directly to `jeremiahcandelaria.com` or through a link from a professional profile like LinkedIn.

2.  **Hero/Intro Section**:
    *   The user is immediately greeted by a concise, high-impact statement (e.g., "Hi, my name is Jeremiah") and a professional tagline (e.g., "AI-First Software Engineer...").
    *   This section sets a professional tone and provides immediate context.
    *   A subtle "Scroll" prompt guides the user to continue down the page.

3.  **Scrolling Narrative (About Section)**:
    *   As the user scrolls, they transition to the "About" section.
    *   Here, they read a brief personal bio that outlines Jeremiah's background, passion, and key skills. The narrative also highlights how the portfolio site itself is a demonstration of his technical abilities.

4.  **Work/Projects Section**:
    *   This is the most critical part of the journey for this user. They encounter a curated list of 4-6 key projects.
    *   For each project, the user can:
        *   Read a clear title and a concise description outlining the problem solved, Jeremiah's role, and the project's impact.
        *   Quickly scan the technologies used via tech stack icons.
        *   View screenshots or mockups that provide a visual representation of the project.
        *   Watch a short, embedded demo video to see the project in action without leaving the site.
        *   Click "View Demo" to see a live version or "View on GitHub" to inspect the source code, opening these in a new tab.

5.  **Contact/Resume Section**:
    *   After reviewing the projects, the user, now interested in moving forward, scrolls to the final section.
    *   They have clear calls-to-action:
        *   Download a PDF of the resume.
        *   Access professional links (GitHub, LinkedIn) for further vetting.

6.  **Footer**:
    *   The journey concludes at the footer, which reinforces the professional links and provides copyright information.

## 2. Secondary User Journey: The Fellow Developer or Collaborator

This user is typically interested in the technical implementation, code quality, and specific tools used. They may be looking for collaboration opportunities or inspiration.

1.  **Entry Point**: This user may arrive from a shared link, a GitHub repository, or a technical forum.

2.  **Deeper Technical Exploration**:
    *   This user is more likely to interact with the site's "meta" features. They might toggle dark mode, inspect page source, or check performance metrics (e.g., Lighthouse scores).
    *   In the "Work/Projects" section, they are highly likely to click "View on GitHub" to analyze the codebase, architecture, and coding style.
    *   The "About" section is valuable for understanding Jeremiah's technical philosophy and skillset.

## 3. Feature-Specific Flows

### 3.1. Project Interaction
1.  **Hover**: User hovers over a project card. The UI responds with a subtle highlight (e.g., a blue glow) to indicate interactivity.
2.  **Click "View Demo"**: User clicks the button. This action either opens a modal with a responsive, lazy-loaded video player or directs the user to a live demo URL in a new tab.
3.  **Click "View on GitHub"**: User clicks the button. A new browser tab opens, taking the user directly to the project's GitHub repository.

### 3.2. Dark Mode Toggle
1.  **Initial State**: The website automatically detects and applies the user's preferred system theme (light or dark).
2.  **Toggle**: The user finds and clicks the dark mode toggle icon (likely in the header or footer).
3.  **Transition**: The site smoothly transitions between the light (white background, black text) and dark (black background, white text) themes. The primary accent color (#007AFF) remains consistent across both modes. 
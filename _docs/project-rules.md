# Project Rules

This document outlines the mandatory rules and conventions for the portfolio website's codebase. The primary goal is to create an **AI-first**, modular, scalable, and highly maintainable project. Adherence to these rules is non-negotiable.

---

## 1. Guiding Philosophy: AI-First Development

An AI-first codebase is one that is optimized for comprehension by both humans and artificial intelligence. This means:
*   **Clarity over cleverness**: Code should be simple, explicit, and easy to follow.
*   **Modularity**: Features are self-contained and decoupled.
*   **Explicitness**: File names, directory structures, and comments should leave no room for ambiguity.
*   **Brevity**: Files are kept short and focused on a single responsibility.

---

## 2. Directory Structure

We will use a feature-based architecture that complements the Next.js App Router. The `src` directory is mandatory.

```
/
├── _docs/                  # Project documentation (Markdown files)
│   └── design-assets/      # Non-code design assets (e.g., illustrations, mood boards)
├── public/                 # Static assets (images, fonts, resume.pdf)
│   └── projects/           # Placeholder screenshots for portfolio projects
└── src/
    ├── app/                # Next.js App Router: routing, layouts, pages
    ├── components/
    │   ├── icons/          # Standalone SVG icon components
    │   ├── shared/         # General, reusable components (e.g., Logo)
    │   └── ui/             # Unstyled primitives from shadcn/ui (e.g., Button, Card)
    ├── features/
    │   ├── contact/        # Components and logic for the Contact section
    │   ├── footer/         # Components and logic for the Footer
    │   ├── hero/           # Components and logic for the Hero section
    │   ├── project-showcase/ # Components and logic for the Work/Projects section
    │   └── ...             # etc. for each major site section
    ├── hooks/              # Custom React hooks
    ├── lib/                # Utility functions, helpers, and type definitions
    │   └── utils.ts
    ├── store/              # Zustand store definitions for global state
    └── styles/
        └── globals.css     # Global styles and Tailwind directives
```

---

## 3. File Naming Conventions

*   **Directories**: `kebab-case` (e.g., `project-showcase`).
*   **Components & TSX files**: `PascalCase.tsx` (e.g., `ProjectCard.tsx`). The filename must match the default exported component name.
*   **All other files (`.ts`, `.css`, etc.)**: `kebab-case` (e.g., `theme-rules.md`, `api-handler.ts`).

---

## 4. Code Documentation & Style

This is the most critical section for ensuring an AI-first codebase.

### **Rule 1: File Header Comments (Mandatory)**
Every `.ts` and `.tsx` file must begin with a block comment that explains its purpose and place within the application.

*Example (`src/features/project-showcase/ProjectCard.tsx`):*
```typescript
/**
 * @file ProjectCard.tsx
 * @description A card component to display a single project in the work section.
 * @summary This component is responsible for rendering the project's title,
 * description, tech stack, and links to the demo and GitHub repository. It is
 * used by the ProjectShowcase feature.
 */
```

### **Rule 2: Function & Component Documentation (Mandatory)**
Every function, method, and React component must have a TSDoc comment block explaining its purpose, parameters, and return value.

*Example (`src/lib/utils.ts`):*
```typescript
/**
 * Formats a given date into a "Month Day, Year" string.
 * @param date - The date to format.
 * @returns The formatted date string.
 * @example formatDate(new Date("2023-10-27")) // "October 27, 2023"
 */
export function formatDate(date: Date): string {
  // ... implementation
}
```

*Example (React Component Props):*
```typescript
interface ProjectCardProps {
  /** The title of the project. */
  title: string;
  /** A short description of the project. */
  description: string;
  /** URL to the project's live demo or video. */
  demoUrl: string;
  /** URL to the project's source code on GitHub. */
  repoUrl: string;
}

export function ProjectCard({ title, description, demoUrl, repoUrl }: ProjectCardProps) {
  // ... component implementation
}
```

### **Rule 3: File Length Limit (Mandatory)**
**No file may exceed 500 lines.** This is a hard limit. A file approaching this limit is a clear indicator that it is doing too much and must be refactored into smaller, more focused modules. This rule maximizes compatibility with modern AI tools and improves human readability.

### **Rule 4: Code Formatting**
We will use Prettier and ESLint to automatically enforce a consistent code style. Configuration will be committed to the repository. All code must be formatted correctly before being committed.

---

## 5. Version Control

*   **Commit Messages**: All commit messages must follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/). This creates an explicit and easily parsable commit history.
    *   **Examples**:
        *   `feat: add dark mode toggle to header`
        *   `fix: prevent layout shift in project cards`
        *   `docs: update project-rules.md with file header examples`
        *   `style: format code with latest prettier rules`
        *   `refactor: split ProjectCard into smaller components`
*   **Branching**: All new work must be done on a feature branch, named descriptively (e.g., `feat/contact-form`, `fix/mobile-hero-layout`). All branches must be created from the `main` branch.
*   **Pull Requests (PRs)**: All code must be reviewed via a PR before being merged into `main`. The PR description should clearly explain the "what" and "why" of the changes. 
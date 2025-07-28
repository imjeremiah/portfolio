# Phase 1: Setup

*   **Phase Objective**: To establish the foundational codebase for the project.
*   **Scope**: This phase covers the initialization of the Next.js project, configuration of the core technology stack (TypeScript, Tailwind CSS), setup of code quality tools, and creation of the mandatory directory structure.
*   **Deliverable**: A runnable, barebones Next.js application with all foundational tools configured and the project structure in place. The output is a "Hello World" style page, ready for feature development.

---

### **1. Initialize Next.js Project**
*   **Description**: Create a new Next.js application using the official CLI.
*   **Steps**:
    1.  Run `npx create-next-app@latest` with the project name.
    2.  Select options for TypeScript, ESLint, and Tailwind CSS integration.
    3.  Choose to use the `src/` directory.
    4.  Confirm the initial setup runs correctly with `npm run dev`.

### **2. Configure Tailwind CSS**
*   **Description**: Configure Tailwind to match our design system as defined in `_docs/theme-rules.md`.
*   **Steps**:
    1.  Open `tailwind.config.ts`.
    2.  Extend the `theme.colors` object with our palette: `white`, `black`, `accent-blue` (`#007AFF`), and `subtle-gray` (`#6B7280`).
    3.  Ensure the font stack is configured to use system fonts as per `theme-rules.md`.
    4.  Add the `dark:` variant strategy (class-based) to the configuration file.

### **3. Set Up Code Quality Tools**
*   **Description**: Configure Prettier and ESLint to enforce our coding standards automatically.
*   **Steps**:
    1.  Create a `.prettierrc.json` file with our chosen formatting rules (e.g., single quote, semi-colons).
    2.  Create a `.prettierignore` file to exclude non-code directories (e.g., `_docs`, `.next`).
    3.  Install the Prettier plugin for Tailwind CSS to auto-sort classes.
    4.  Configure ESLint rules in `eslint.json` to work alongside Prettier without conflicts.

### **4. Establish Directory Structure**
*   **Description**: Create the empty directories for our feature-based architecture as defined in `_docs/project-rules.md`.
*   **Steps**:
    1.  Inside `src/`, create the following directories: `components/ui`, `components/shared`, `components/icons`.
    2.  Create the `features/` directory and sub-directories for each main section: `hero`, `project-showcase`, `contact`, `footer`.
    3.  Create the `hooks/`, `lib/`, `store/`, and `styles/` directories.
    4.  Verify the `src/app/` directory contains a basic `layout.tsx` and `page.tsx`. 
# Phase 2: MVP (Minimal Viable Product)

*   **Phase Objective**: To build the core, usable version of the portfolio website.
*   **Scope**: This phase focuses on building the essential, static components of the site. It includes the main page structure, the hero section, a statically defined project showcase, and a simple footer. Interactivity will be minimal.
*   **Deliverable**: A functional, single-page website that showcases your core information and projects. It will be responsive, accessible, and styled according to our theme, but will lack advanced animations and backend integrations.

---

### **1. Build Root Layout**
*   **Description**: Create the main app layout that provides the overall page structure, including metadata, fonts, and theme setup.
*   **Steps**:
    1.  Modify `src/app/layout.tsx` to include proper HTML metadata (title, description).
    2.  Ensure the system font class from Tailwind is applied to the `<body>` tag.
    3.  Implement the basic structure for the dark/light mode provider (using React Context or Zustand).
    4.  Add a `<main>` element to wrap the page content.

### **2. Develop Hero Section**
*   **Description**: Build the static "Hero" section, which is the first thing a visitor sees.
*   **Steps**:
    1.  Create a `HeroSection` component in `src/features/hero/`.
    2.  Add the main headline ("Hi, my name is Jeremiah") and professional tagline.
    3.  Style the section using our typography and spacing rules from `theme-rules.md`.
    4.  Ensure the component is fully responsive.
    5.  Add the `HeroSection` to the main `src/app/page.tsx`.

### **3. Implement Project Showcase (Static)**
*   **Description**: Build the project showcase section with hardcoded project data. This requires gathering all project assets and links beforehand.
*   **Steps**:
    1.  Create a `ProjectCard` component in `src/features/project-showcase/`. This card will display a project's title, description, and tech stack.
    2.  Define a `Project` type/interface for the data structure (title, description, links, screenshot path, etc.).
    3.  Create a temporary, hardcoded array of `Project` objects within the `ProjectShowcase` component using the gathered data.
    4.  The `ProjectShowcase` component will map over this array and render a `ProjectCard` for each.
    5.  Add styled links for "View Demo" and "View on GitHub" to the `ProjectCard`, linking to the URLs provided in the data.
    6.  Add the `ProjectShowcase` to the main `src/app/page.tsx`.

### **4. Create Footer**
*   **Description**: Develop the simple, static site footer.
*   **Steps**:
    1.  Create a `Footer` component in `src/features/footer/`.
    2.  Add the copyright notice and links to your social profiles (GitHub, LinkedIn).
    3.  Use SVG icons for the social links, placing them in `src/components/icons/`.
    4.  Style the footer according to our design rules.
    5.  Add the `Footer` to the main `src/app/page.tsx`. 
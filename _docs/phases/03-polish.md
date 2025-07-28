# Phase 3: Polish & Interactivity

*   **Phase Objective**: To enhance the MVP with animations, micro-interactions, and fully implemented UI components.
*   **Scope**: This phase is focused on bringing the site to life. We will add subtle animations with Framer Motion, implement the dark mode toggle, and add the "About" and "Contact" sections with a non-functional form.
*   **Deliverable**: A visually polished and interactive website that feels dynamic and engaging. All frontend components are complete, and the site is ready for backend integration.

---

### **1. Implement Dark Mode**
*   **Description**: Add a fully functional dark mode toggle.
*   **Steps**:
    1.  Set up a Zustand store to manage the theme state (`'light'`, `'dark'`, `'system'`).
    2.  Create a `ThemeToggle` button component that allows the user to cycle through the theme options.
    3.  Create a custom hook (e.g., `useTheme`) to apply the theme class to the `<html>` element and persist the user's choice in local storage.
    4.  Place the `ThemeToggle` button in a logical location, such as the header or footer.

### **2. Add Scroll Animations**
*   **Description**: Integrate Framer Motion to add subtle "fade-in-on-scroll" animations to the main sections.
*   **Steps**:
    1.  Install `framer-motion`.
    2.  Create a reusable `AnimatedSection` wrapper component that uses the `motion` API.
    3.  Configure the wrapper to animate children from a slight vertical offset and zero opacity to their final state when they enter the viewport.
    4.  Wrap the `HeroSection`, `ProjectShowcase`, and other main sections in this `AnimatedSection` component.
    5.  Ensure animations respect the `prefers-reduced-motion` setting.

### **3. Develop About Section**
*   **Description**: Build the "About" section with your personal bio and narrative.
*   **Steps**:
    1.  Create an `AboutSection` component in a new `src/features/about/` directory.
    2.  Add the text content for your bio, background, and skills.
    3.  Style the section according to the theme and UI rules.
    4.  Add the `AboutSection` to the main `page.tsx` in the correct narrative order.

### **4. Build Contact & Links Section**
*   **Description**: Create the contact section with a visually complete but non-functional contact form.
*   **Steps**:
    1.  Create a `ContactSection` component in `src/features/contact/`.
    2.  Use `shadcn/ui` to generate the `Input`, `Textarea`, and `Button` components needed for the form.
    3.  Assemble the form UI within the `ContactSection`, including fields for Name, Email, and Message.
    4.  Add the link to download your resume.
    5.  Add the `ContactSection` to the main `page.tsx`.

### **5. Create Project Illustrations**
*   **Description**: Replace the placeholder project screenshots with on-brand, distilled UI illustrations.
*   **Steps**:
    1.  For each project, identify a key UI element from its screenshot.
    2.  Use the "UI Distillation Method" (defined in `_docs/ui-rules.md`) to create a stylized, minimalist vector illustration of that element.
    3.  Ensure the illustration adheres to our color palette and design principles.
    4.  Save the final illustrations as SVG components in `src/components/icons/projects/`.
    5.  Update the `ProjectCard` component to use these new illustration components instead of the placeholder screenshots. 
# Tech Stack: Portfolio Website

This document outlines the official technology stack for the Jeremiah Candelaria portfolio website. It includes best practices, conventions, and limitations for each technology to ensure a high-quality, maintainable, and performant application.

---

## 1. Core Framework & Language

### **Next.js**
*   **Role**: The foundation of the project, providing a production-ready React framework with features like file-based routing, server-side rendering (SSR), and static site generation (SSG).

*   **Best Practices & Conventions**:
    *   **App Router**: We will use the App Router for its modern features like Server Components, Layouts, and simplified data fetching.
    *   **Server Components**: Use Server Components by default to keep client-side JavaScript minimal. Only use the `"use client"` directive for components that require interactivity or browser APIs.
    *   **Data Fetching**: Prefer static generation for performance. Use `generateStaticParams` for dynamic routes that can be determined at build time. Fetch data in Server Components where possible.
    *   **Image Optimization**: Always use the `next/image` component for automatic image optimization, resizing, and serving in modern formats like WebP.
    *   **API Routes**: For backend logic like the contact form handler, use API Routes within the App Router's Route Handlers.

*   **Considerations & Pitfalls**:
    *   **Server vs. Client**: Be mindful of the boundary between Server and Client Components. Trying to use hooks or browser APIs in a Server Component will result in errors.
    *   **Bundle Size**: While Next.js is highly optimized, be cautious about importing large libraries into Client Components, as this will increase the client-side bundle size. Use a bundle analyzer (`@next/bundle-analyzer`) if needed.

### **TypeScript**
*   **Role**: The primary programming language. TypeScript adds static typing to JavaScript, enhancing code quality and maintainability.

*   **Best Practices & Conventions**:
    *   **Strict Mode**: Enable `"strict": true` in `tsconfig.json` to enforce strong type-checking rules.
    *   **Explicit Types**: Define clear, explicit types for function arguments, return values, component props, and API payloads.
    *   **`type` vs. `interface`**: Use `type` for general-purpose type definitions and `interface` for defining the shape of objects, especially for component props (e.g., `interface ProjectCardProps { ... }`).
    *   **Utility Types**: Leverage built-in utility types like `Partial`, `Pick`, `Omit`, and `Record` to create new types from existing ones without redundancy.
    *   **Avoid `any`**: The use of `any` should be a last resort. If you must use it, prefer `unknown` for better type safety.

*   **Considerations & Pitfalls**:
    *   **Type Complexity**: Avoid creating overly complex or deeply nested types that are difficult to read and maintain.
    *   **Third-Party Libraries**: Some JavaScript libraries may have outdated or missing TypeScript definitions. In such cases, you may need to install `@types/package` or write your own declaration files.

### **React**
*   **Role**: The UI library for building the user interface with its component-based architecture.

*   **Best Practices & Conventions**:
    *   **Component Co-location**: Keep related components, hooks, and utility functions within the same feature directory to improve organization.
    *   **Composition**: Favor component composition over deep inheritance or complex prop structures.
    *   **Hook Usage**: Understand the `useEffect` dependency array to prevent infinite loops or stale closures. Use `useCallback` and `useMemo` to memoize functions and values, but only when profiling reveals a performance bottleneck.
    *   **Single Responsibility**: Keep components small and focused on a single responsibility. A component should do one thing and do it well.

*   **Considerations & Pitfalls**:
    *   **Prop Drilling**: For state shared across many levels of components, we will use Zustand instead of passing props down manually.
    *   **Client-Side State**: Be deliberate about what state needs to be managed on the client. For a largely static site, most "state" is derived from the URL or is global UI state (like theme).

---

## 2. Styling & UI

### **Tailwind CSS**
*   **Role**: A utility-first CSS framework for rapidly building the site's custom, minimalist aesthetic.

*   **Best Practices & Conventions**:
    *   **Configuration**: Define all design system values (colors, fonts, spacing) in `tailwind.config.js`. This is our single source of truth for styling. We will use the palette from `project-overview.md`.
    *   **Class Ordering**: For consistency, group classes logically (e.g., layout, spacing, typography, colors, effects). Prettier plugins can automate this.
    *   **Don't Overuse `@apply`**: Use `@apply` very sparingly. Its use should be reserved for small, repeated patterns where creating a component is not justified. Prefer creating reusable React components instead.
    *   **Dark Mode**: Use the `dark:` variant for all dark mode styles, driven by a class on the `<html>` element.

*   **Considerations & Pitfalls**:
    *   **HTML Clutter**: Long class strings are expected. This is managed by creating abstracted React components (e.g., `<Button>`, `<Card>`) so that the utility classes are encapsulated within them.

### **shadcn/ui**
*   **Role**: Provides the foundational, accessible, and unstyled building blocks for our UI components.

*   **Best Practices & Conventions**:
    *   **Customization**: Treat the components generated by the CLI as a starting point. They are meant to be modified to fit our exact design requirements.
    *   **Directory Structure**: Keep the generated components within the `src/components/ui` directory as per convention.
    *   **Composability**: Build more complex UI elements by composing these primitives together.
    *   **Understand Radix**: Since shadcn/ui is built on Radix UI, having a basic understanding of Radix primitives will be helpful for advanced customization and accessibility.

*   **Considerations & Pitfalls**:
    *   **Not a Library**: It is not a dependency you update via `npm`. You own the code. If shadcn/ui releases updates, they must be manually incorporated if desired. This is a feature, as it prevents unwanted breaking changes.

### **Framer Motion**
*   **Role**: A production-ready animation library for adding the subtle, high-fidelity animations mentioned in the design principles.

*   **Best Practices & Conventions**:
    *   **Keep it Subtle**: Animations should enhance the user experience, not distract from it. Use them for scroll-based reveals, micro-interactions on hover/focus, and smooth layout transitions.
    *   **Variants**: Use `variants` to define and orchestrate complex animation sequences in a clean, declarative way.
    *   **Hardware Acceleration**: Ensure animations are performant by animating CSS properties that are hardware-accelerated (`transform`, `opacity`).
    *   **Reduced Motion**: Respect user preferences by using the `useReducedMotion` hook to disable or reduce animations for users who have enabled this setting in their OS.

*   **Considerations & Pitfalls**:
    *   **Performance**: Over-animating or animating non-performant properties can lead to jank and a poor user experience, especially on mobile devices.
    *   **Bundle Size**: Framer Motion is a comprehensive library. For simple animations, ensure we are only importing the parts we need to keep bundle size down.

---

## 3. Backend & Services

### **Zustand**
*   **Role**: A lightweight state management library for global UI state, such as the theme (dark/light mode).

*   **Best Practices & Conventions**:
    *   **One Store**: For a project of this size, a single store is likely sufficient. If state grows, split it into "slices" within the same store.
    *   **Selectors**: Use selectors to ensure components only re-render when the specific state they subscribe to changes.
    *   **Immutability**: Avoid mutating state directly. The store's actions should always return new state objects.

*   **Considerations & Pitfalls**:
    *   **Overuse**: Do not put all state into Zustand. Most state should be local to components (`useState`). Only use Zustand for state that truly needs to be shared globally.

### **Vercel Analytics**
*   **Role**: To track website traffic, user engagement, and performance with a focus on privacy.

*   **Best Practices & Conventions**:
    *   **Integration**: Add the Vercel Analytics script to the root layout.
    *   **Monitoring**: Regularly check the dashboard for Core Web Vitals and identify any pages that are performing poorly.

*   **Considerations & Pitfalls**:
    *   **Not a Replacement for Deep Analytics**: It is not as feature-rich as Google Analytics. It provides high-level, privacy-first metrics, which is sufficient for this project's goals.

---

## 4. Deployment & Hosting

### **Cloudflare Pages**
*   **Role**: The platform for continuous integration, deployment, and hosting.

*   **Best Practices & Conventions**:
    *   **Git Integration**: Connect the GitHub repository for automatic builds and deployments on every push to the `main` branch.
    *   **Preview Deployments**: Use preview deployments for all pull requests to test changes in a production-like environment before merging.
    *   **Environment Variables**: Configure environment variables in the Cloudflare Pages dashboard for different environments (production vs. preview).
    *   **Custom Domain**: Set up the custom domain and ensure SSL/TLS encryption mode is set to "Full (Strict)" for maximum security.

*   **Considerations & Pitfalls**:
    *   **Build Environment**: Be aware of the build resources and limits. If the build process becomes too complex, we may need to optimize it.
    *   **Next.js Support**: While Cloudflare Pages has excellent support for Next.js, some advanced or bleeding-edge features may have better support on Vercel. For this project, Cloudflare is a perfect fit. 
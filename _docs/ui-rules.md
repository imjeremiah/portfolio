# UI Rules

This document outlines the core design principles and user interface rules for the portfolio website. These rules ensure a consistent, accessible, and high-quality user experience that aligns with our project goals.

## 1. Core Principles

*   **Mobile-First & Responsive**: All components and layouts must be designed for mobile screens first and then scaled up to larger viewports. The experience must be seamless on all common devices (phones, tablets, desktops).
*   **Accessible by Default**: We will adhere to WCAG 2.1 Level AA guidelines. This is non-negotiable and includes:
    *   **Keyboard Navigation**: All interactive elements must be reachable and operable via the keyboard alone.
    *   **Semantic HTML**: Use HTML elements for their intended purpose (e.g., `<nav>`, `<button>`, `<main>`).
    *   **ARIA Roles**: Use ARIA attributes where necessary to enhance accessibility for screen readers.
    *   **Alt Text**: All meaningful images must have descriptive alt text.
*   **Performant Interactivity**: Animations and transitions should be subtle, meaningful, and performant. They must not hinder the user's ability to access content. We will respect the `prefers-reduced-motion` user setting.

## 2. Layout and Structure

*   **Visual Hierarchy**: The layout must guide the user's eye to the most important content first. This is achieved through:
    *   **Size**: Headlines are significantly larger than body text.
    *   **Weight**: Key information is bolder.
    *   **Spacing**: Generous whitespace is used to separate and group related content, reducing cognitive load.
*   **Narrative Flow**: The site is a single-page, vertical scroll. Sections should transition smoothly into one another, telling a cohesive story from the introduction to the final call-to-action.
*   **Whitespace**: Treat whitespace as an active element. It should be used deliberately to create a clean, uncluttered, and sophisticated feel, allowing content to breathe.

## 3. Typography

*   **Typography as UI**: In our minimalist design, typography is a primary visual element. The contrast between large, impactful headlines and clean, readable body text defines the site's character.
*   **Readability**: Body text must be highly legible with sufficient line height and contrast.
*   **Consistency**: Typographic styles (font size, weight, and color) for headers, sub-headers, and body text will be defined in the theme and applied consistently.

## 4. Iconography

*   **Minimalist Approach**: Icons will be used sparingly and only when they add significant value or clarity (e.g., social media links, tech stack badges).
*   **Consistency**: All icons must share a consistent style (e.g., line weight, solid vs. outline) and come from a single, high-quality library.
*   **Purpose over Decoration**: Icons should primarily serve a functional purpose rather than a decorative one. Our primary strategy for creating project icons is the **"UI Distillation Method,"** where a key element from the project's screenshot is isolated and redrawn in our minimalist, on-brand style.

### UI Distillation Method: Step-by-Step Process

This process will be followed during Phase 3 to replace placeholder screenshots with on-brand illustrations.

1.  **Identify the "Hero" Element**: For each project, review the UI screenshot and identify the single most recognizable or important visual element (e.g., a unique chart, a primary button, a key form component).
2.  **Isolate and Simplify**: Mentally or in a simple drawing tool, trace the essential lines of the chosen element. Abstract its core shape and ignore surrounding components, text, and colors.
3.  **Generate the Illustration**: Use the project screenshot as a reference image with the following AI prompt to generate the stylized icon:

    > Create a minimalist, 2D vector illustration of a specific element from the uploaded screenshot. Focus ONLY on the [Describe the element, e.g., 'the main data chart', 'the search bar and button'].
    >
    > The artistic style must be a complete transformation into a flat, monochrome icon. Do not copy the screenshot's style. Instead, redraw the element using clean, consistent-weight black linework.
    >
    > The final image's color palette is MANDATORY and must be strictly limited to only these three colors:
    > - Black (`#000000`) for lines or fills.
    > - White (`#FFFFFF`) for the background or negative space.
    > - Neutral gray (`#6B7280`) for any secondary fills or tones.
    >
    > The final image must be centered on a solid white background, completely isolated from the rest of the UI.
    >
    > --no text, gradients, shadows, 3d, realism, textures, color 
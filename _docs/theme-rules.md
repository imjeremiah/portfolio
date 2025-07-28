# Theme Rules

This document defines the visual theme of the portfolio website, covering our design style, color palette, and typography. These rules ensure a consistent and high-quality brand identity.

## 1. Design Style: Refined Minimalism

Our theme is **Refined Minimalism**, with a **Brutalist influence on its typography**.

*   **Refined Minimalism**: This means our design is clean, uncluttered, and focuses entirely on the content. We achieve this with a limited color palette and generous whitespace. Every element has a purpose.
*   **Brutalist Influence**: This comes through in our typography. We use large, bold, and confident headlines that serve as a primary design element, making a strong and immediate statement.

## 2. Color Palette

The color palette is intentionally strict to create a high-contrast, focused, and professional experience. It will be implemented for both light and dark modes.

*   **Primary Background**:
    *   **Light Mode**: White (`#FFFFFF`)
    *   **Dark Mode**: Black (`#000000`)
*   **Primary Text**:
    *   **Light Mode**: Black (`#000000`)
    *   **Dark Mode**: White (`#FFFFFF`)
*   **Accent Color**:
    *   **Identifier**: Interactive Blue
    *   **Hex Code**: `#007AFF`
    *   **Usage**: **Exclusively** for interactive elements. This includes links, buttons, hover/focus states, and key call-to-action highlights. This color's purpose is to signal "you can interact with this." It should never be used for static text or backgrounds.
*   **Secondary Text / Borders**:
    *   **Identifier**: Subtle Gray
    *   **Hex Code**: `#6B7280`
    *   **Usage**: For less important text that needs to recede visually, such as ancillary details or timestamps. Can also be used for subtle borders or dividers where a full black/white line would be too harsh.

## 3. Typography

Typography is a cornerstone of our design. We will use a high-performance, sans-serif font system.

*   **Font Family**: System Fonts
    *   **Rationale**: We will leverage the native system fonts of the user's operating system (e.g., San Francisco for Apple devices, Segoe UI for Windows, Roboto for Android). This is the most performant option, requiring zero font downloads and ensuring the site feels native to the user's environment.
    *   **Tailwind Configuration**: `font-sans: ['ui-sans-serif', 'system-ui', ...]`
*   **Headlines (H1, H2)**:
    *   **Weight**: Bold (`font-bold`) to Extra-Bold (`font-extrabold`).
    *   **Style**: Large, impactful, and with tight letter spacing for a modern look. They embody the "Brutalist influence."
*   **Sub-Headers (H3, H4)**:
    *   **Weight**: Semi-Bold (`font-semibold`).
    *   **Style**: Smaller than primary headlines but clearly distinct from body text. Used for section titles or project card titles.
*   **Body Text**:
    *   **Weight**: Regular (`font-normal`).
    *   **Style**: Optimized for readability with a comfortable font size and line height (`leading-relaxed`).

## 4. Components & Interactivity

*   **Buttons**:
    *   **Primary CTA**: Solid background using the **Accent Blue** with white text.
    *   **Secondary CTA**: A more subtle style, such as white/black with a blue border or blue text, to avoid competing with the primary action.
*   **Hover & Focus States**:
    *   Interactive elements must have clear hover and focus states.
    *   For example, links could subtly transition to the **Accent Blue** on hover. SVG icons and illustrations within interactive elements should also transition their stroke or fill color to Accent Blue. Buttons should have a visible outline on focus for accessibility.
*   **Shadows & Gradients**: These will not be used. Our design is flat and relies on color, typography, and spacing for hierarchy. 
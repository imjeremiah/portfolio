Below is a **detailed checklist** for implementing the updated project list and ranking on your portfolio site (jeremiahcandelaria.com). This is based on the ranking we discussed, which prioritizes AI-first impressiveness, technical depth, and relevance to your branding as an AI-First Software Engineer. We'll include all 6 projects for completeness (as you mentioned it doesn't matter if we list 2 or all 6), but focus on integrating the top 4 as "must-haves" in the initial rollout, with the bottom 2 as optional add-ons. This keeps your ProjectShowcase curated (4-6 projects per your current structure in `src/lib/project-data.ts`), while allowing flexibility.

The checklist follows an iterative, phased approach inspired by your project's `_docs/phases/` (e.g., setup, MVP, polish). It adheres to your user rules: AI-first modularity (e.g., <500 lines per file, descriptive names, TSDoc comments), functional/declarative patterns, and tools like TypeScript/Tailwind/shadcn/ui. Assume you're working in your current workspace (/Users/jeremiahcandelaria/portfolio), with the site running via `npm run dev` (as shown in the attached logs).

I'll mark items as:
- **Must-Do**: Essential for core implementation.
- **Optional**: Nice-to-have for polish or if adding bottom-ranked projects.
- **Verification**: Steps to test/confirm.

### Phase 1: Preparation and Planning (Gather Assets and Plan Integration)
Before coding, ensure alignment with your site's structure (e.g., Hero → About → ProjectShowcase → Footer in `src/app/page.tsx`).
- [ ] **Review Ranking and Selection**: Confirm the 6 projects and their order. Top 4 are imperative (tradeflow-ai/mobile #1 for AI optimization; word-rush #2 for real-time UX; essay-elevate #3 for NLP; doyenclient #4 for credibility via Harvard/Pfizer/paper). Dry-prompt (#5) and foodie-snap (#6) are optional for niche AI/ML variety. Decide on 4-6 total (e.g., top 4 to start). **Must-Do**.
- [ ] **Collect Project Details**: For each, gather: title, 2-4 sentence description (emphasize AI/impressiveness), tech stack (3-6 items), demo URL (or placeholder), repo URL, image path (e.g., '/projects/[id].jpg'), alt text. Use repo insights (e.g., from GitHub READMEs/commits). Add unique hooks (e.g., for doyenclient: "Published paper: [link to paper]"). **Must-Do**.
- [ ] **Asset Audit**: Check/create images in `public/projects/` (e.g., download screenshots from repos or mockups). Ensure WebP/AVIF formats via Next.js image optimization (per `next.config.js`). If adding videos/demos, plan lazy-loading with Framer Motion for animations. **Must-Do**.
- [ ] **Backup Current Site**: Run `git commit -m "Backup before project updates"` to save the existing state (e.g., placeholder projects in `project-data.ts`). **Must-Do**.
- [ ] **Optional: Wireframe Updates**: Sketch how the new projects fit in ProjectShowcase (e.g., alternating layouts via `isReversed` in ProjectCard). Use Figma or paper to visualize.

**Verification**: Run `npm run dev` and navigate to localhost:3000. Confirm current ProjectShowcase renders placeholders without errors (per logs: GET / 200).

### Phase 2: Data and Code Updates (Implement in src/lib/project-data.ts and Related Files)
Focus on modular updates—edit one file at a time, keeping under 500 lines.
- [ ] **Update src/lib/project-data.ts**: Replace the array with the ranked projects. Use TSDoc comments for each (e.g., "/** AI-optimized mobile app... */"). Structure per your Project type (id, title, etc.). Example snippet (top 4):
  ```typescript
  export const projects: Project[] = [
    // #1: tradeflow-ai/mobile
    { id: 'tradeflow-ai-mobile', title: 'TradeFlow AI Mobile', description: 'AI-driven app for service optimization...', techStack: ['React Native', 'Supabase', 'AI Edge Functions'], /* etc. */ },
    // #2: word-rush
    { id: 'word-rush', title: 'Word Rush', description: 'Real-time multiplayer game with AI-first design...', techStack: ['React', 'Phaser 3', 'Socket.io'], /* etc. */ },
    // #3: essay-elevate
    { id: 'essay-elevate', title: 'Essay Elevate', description: 'NLP tool for writing enhancement using GPT...', techStack: ['Next.js', 'OpenAI API'], /* etc. */ },
    // #4: doyenclient
    { id: 'doyenclient', title: 'Doyen Client', description: 'Harvard/Pfizer-commissioned platform with published paper...', techStack: ['React', 'GraphQL'], /* etc. */ },
    // Optional #5-6 if adding
  ];
  ```
  **Must-Do** for top 4; **Optional** for #5-6.
- [ ] **Enhance Descriptions for Impressiveness**: Ensure each highlights ranking rationale (e.g., for doyenclient: "Commissioned by Pfizer, resulted in published paper on AI matching"). Throw errors if data is invalid (per rules: no fallbacks). **Must-Do**.
- [ ] **Update Related Components if Needed**:
  - In `src/features/project-showcase/ProjectCard.tsx`: Add conditional logic for paper links (e.g., if project has 'paperUrl', render a button with Framer Motion hover).
  - In `src/features/project-showcase/ProjectShowcase.tsx`: Adjust grid/space-y for 4-6 cards; add stagger delays via AnimatedSection for polish.
  - Follow rules: Use functional components, descriptive vars (e.g., `hasPaper = !!project.paperUrl`), no classes. **Optional** unless UI breaks.
- [ ] **Add Types if Missing**: In `src/lib/types.ts`, extend Project interface if needed (e.g., optional 'paperUrl: string' for doyenclient). **Optional**.

**Verification**: Run `npm run lint` and `npm run format:check`. Restart dev server and scroll to ProjectShowcase—confirm new projects render with correct tech badges, images, and links (e.g., no 404s).

### Phase 3: Asset and UI Polish (Enhance Visuals and Interactivity)
- [ ] **Add/Optimize Images**: Place JPG/PNGs in `public/projects/` (e.g., tradeflow-ai-mobile.jpg from repo screenshots). Use Next.js Image component in ProjectCard for lazy-loading/resizing. Compress via tools like TinyPNG for performance. **Must-Do**.
- [ ] **Incorporate Animations**: In ProjectCard, add Framer Motion variants for hover (e.g., scale 1.02 on AI badges for top-ranked projects). Respect reduced motion via useReducedMotion. **Optional** for extra "juiciness" (e.g., on word-rush card).
- [ ] **Theme and Responsiveness**: Test dark mode (via ThemeToggle) on new cards; ensure mobile views (e.g., stack layouts) work per Tailwind config. **Must-Do**.
- [ ] **Accessibility Check**: Add ARIA labels (e.g., aria-label="View Pfizer paper" for doyenclient). Run Lighthouse audit for >95 scores. **Must-Do**.

**Verification**: Open dev server on mobile emulator (e.g., Chrome DevTools). Hover/click cards—confirm smooth animations and no console errors (per logs: Compiled / in 1455ms).

### Phase 4: Testing and Validation (Ensure Quality)
- [ ] **Unit/Functional Tests**: Add basic tests in a new file (e.g., `src/tests/project-data.test.ts`) using Jest (add if not present: `npm i -D jest ts-jest`). Test array length (4-6), types, and uniqueness. **Optional** but aligns with rules.
- [ ] **Manual Testing**: 
  - Load site: Confirm projects display in ranked order (e.g., #1 first).
  - Click links: Verify repo/demo URLs open correctly.
  - Edge Cases: Test with system theme toggle, slow network (DevTools), and accessibility (screen reader).
  **Must-Do**.
- [ ] **Performance Check**: Run `npm run build` then `npm run start`; use Vercel Analytics (if integrated) or Lighthouse for load times (<2s). **Must-Do**.
- [ ] **Cross-Browser Test**: Check Chrome, Safari, Firefox (per tsconfig libs: dom, es6). **Must-Do**.

**Verification**: Monitor dev logs for errors (e.g., no 404s like in attached). If adding #5-6, re-run to confirm scalability.

### Phase 5: Deployment and Final Polish (Launch Updates)
- [ ] **Commit and PR**: Git commit with conventional message (e.g., "feat: update projects with ranked AI-first showcases"). Create a GitHub PR for review. **Must-Do**.
- [ ] **Deploy**: Push to main; if using Vercel/Cloudflare (per tech-stack.md), trigger build. Update domain if needed. **Must-Do**.
- [ ] **Post-Launch Monitoring**: Add Vercel Analytics tracking for project clicks. Review for feedback (e.g., add paper link analytics). **Optional**.
- [ ] **Documentation Update**: In `_docs/project-overview.md` or README.md, note the new projects and ranking rationale. **Optional**.

**Verification**: Visit live site; confirm all projects load (e.g., GET / 200 in ~1s).

### Overall Timeline and Tips
- **Estimated Time**: 2-4 hours for core (Phases 1-3), +1-2 hours for testing/polish if experienced with your stack.
- **Potential Blocks**: Missing images/demos—use placeholders initially. If adding #5-6, ensure ProjectShowcase doesn't overflow (adjust space-y in Tailwind).
- **Rules Adherence**: All edits use functional patterns, throw errors on invalid data, and add TSDoc (e.g., "/** Renders ranked project card with AI highlights */").
- **Next Steps**: After this, we could add interactive demos (e.g., embed videos) or A/B test the order.

This checklist is self-contained and actionable—start with Phase 1 and mark off as you go. If any step needs code examples or tool calls (e.g., to read a file), let me know!
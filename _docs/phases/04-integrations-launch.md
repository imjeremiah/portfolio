# Phase 4: Integrations & Launch

*   **Phase Objective**: To integrate backend services, add dynamic data, and prepare the project for launch.
*   **Scope**: This final phase focuses on making the website fully functional. We will implement the contact form's backend logic, shift project data from static to a dynamic source, add analytics, and perform final optimizations before deployment.
*   **Deliverable**: A complete, production-ready portfolio website deployed to Cloudflare Pages on your custom domain.

---

### **2. Dynamic Project Data**
*   **Description**: Decouple project data from the UI by moving it to a manageable data source.
*   **Steps**:
    1.  Create a file at `src/lib/project-data.ts` to hold the array of project objects.
    2.  Define a clear `Project` type in this file that matches the data structure.
    3.  Refactor the `ProjectShowcase` component to import data from this file instead of using a hardcoded array.
    4.  This allows for easy updates to projects without changing component code.

### **3. Add Analytics**
*   **Description**: Integrate Vercel Analytics to track site performance and visitor engagement.
*   **Steps**:
    1.  Install the `@vercel/analytics` package.
    2.  Import the `Analytics` component into the root `src/app/layout.tsx`.
    3.  Add the `<Analytics />` component just before the closing `</body>` tag.

### **4. Final Audit & Deployment**
*   **Description**: Perform final checks and deploy the website to Cloudflare Pages.
*   **Steps**:
    1.  Run a Lighthouse audit on the production build (`npm run build` then `npm start`) and address any outstanding performance, accessibility, or SEO issues.
    2.  Ensure all images in `/public` are optimized and compressed.
    3.  Connect the project's GitHub repository to your Cloudflare Pages account.
    4.  Configure the build settings and add any necessary environment variables (like the Resend API key).
    5.  Trigger a deployment, set up the custom domain, and launch the site. 
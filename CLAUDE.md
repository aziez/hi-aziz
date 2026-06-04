# CLAUDE.md - Development & Prompting Guidelines

This file serves as a guide for AI agents (like Claude) working on this repository to maintain consistent coding standards, architectural patterns, and prompting instructions.

---

## 🛠️ Build and Development Commands

* **Start development server:** `npm run dev`
* **Build production bundle:** `npm run build`
* **Run production server:** `npm run start`
* **Run linter:** `npm run lint`
* **Install dependencies:** `npm install`

---

## 🏗️ Project Architecture & Tech Stack

This is a modern, interactive 3D portfolio website built with:
* **Framework:** Next.js 14.2.6 (App Router)
* **Styling:** Tailwind CSS (v3) + `tailwindcss-animate`
* **UI Components:** Shadcn UI (Radix UI primitives, Class Variance Authority, Clsx, Tailwind Merge)
* **Animations:** GSAP (ScrollTrigger), Lenis (Smooth Scroll), Framer Motion
* **3D/WebGL:** Three.js, React Three Fiber (R3F), `@react-three/drei` (physics: `@react-three/cannon`)
* **Icons:** Lucide React & custom icons in `src/components/icons.tsx`
* **Data Layer:** Static resume content is centralized in `src/data/resume.tsx` and referenced dynamically.

### Folder Structure
* `src/app/` - Next.js App Router routes, layouts, and page wrappers
* `src/components/ui/` - Atomic/primitive design system components (buttons, cards, badges, text effects, inputs)
* `src/components/` - Feature-specific components (e.g., interactive cursors, scroll animation controls)
* `src/layouts/` - Major section templates (Hero, About, Projects, Experience, Contact)
* `src/webGL/` - 3D scenes, avatars, models, and R3F components
* `src/hooks/` - Custom React hooks (e.g., input controllers, window/scroll hooks)
* `src/lib/` - Utility functions (e.g., standard `cn` class merger in `utils.ts`)
* `src/data/` - Static JSON/JS portfolio data sources

---

## 🧠 AI Prompting Instructions: Component Guidelines

When asked to build, modify, or extend components in this project, **always think like a senior frontend engineer** and adhere to the following principles:

### 1. Core Engineering Pillars
* **Reusable UI Components:** Build modular, highly customizable components with clear interfaces. Use composition patterns instead of monolithic designs.
* **Accessible (A11y):** Integrate keyboard accessibility, appropriate semantic HTML tags, ARIA roles, and screen reader compatibility. Standardize on Radix UI primitives.
* **Production-Ready:** Code must be performance-optimized, clean, type-safe (no `any`), and free of logs or mock values that cannot be configured.

### 2. Design & Edge-Case Considerations
* **Loading States:** Provide smooth skeleton structures, spinners, or suspense fallbacks. For 3D elements, use a loaders fallback page utilizing Drei's `useProgress`.
* **Edge Cases:** Handle empty datasets gracefully, clamp excessively long text, manage network/load errors, and handle null/undefined properties.
* **Responsive Design:** Implement mobile-first layouts with responsive Tailwind modifiers (`sm:`, `md:`, `lg:`). Verify readability across phone, tablet, and desktop viewports.
* **Accessibility:** Maintain high contrast ratios, focus outline states (using focus-visible rings), and proper tag hierarchies (e.g., only one `h1` per page).

### 3. Required Output Deliverables
Any component design or implementation request must return:
1. **Component Architecture:** Explanation of folder placement, Client vs. Server Component selection, imports/exports, and composition design.
2. **Props Design:** A typed TypeScript interface extending standard HTML elements where applicable, complete with default value declarations.
3. **Implementation:** Fully realized, clean, lint-compliant code referencing project path structures (e.g., `@/lib/utils`, `@/components/ui/...`).
4. **Usage Examples:** Clear, practical code snippets showing how to render the component with common prop configurations.

---

## 🎨 Component Development Best Practices

### Client vs Server Components
* Mark interactive elements (state, effects, event listeners) with `"use client";` at the top of the file.
* Use Server Components for static layouts and page skeletons to optimize initial paint and SEO.

### Styling & Class Merging
* Combine dynamic or conditional styles using the `cn` helper:
  ```tsx
  import { cn } from "@/lib/utils";
  
  export function CustomComponent({ className, isActive }: Props) {
    return (
      <div className={cn("px-4 py-2 text-white transition-all", isActive && "bg-blue-600", className)}>
        Content
      </div>
    );
  }
  ```

### 3D & R3F (React Three Fiber) Integration
* Always load large 3D components using Next.js `dynamic` imports with `ssr: false` to avoid hydration issues and improve initial load performance:
  ```tsx
  const Scene3D = dynamic(() => import("@/components/hero/Scene"), {
    ssr: false,
    loading: () => <Loader />,
  });
  ```
* Use `<Suspense>` wrappers around Canvas and 3D subcomponents.
* Place 3D models under `src/webGL/` and reuse instances or load assets asynchronously. Avoid redundant heavy state updates in the R3F render loop.

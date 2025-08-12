# AI Development Rules

This document provides guidelines for the AI assistant to follow when developing and modifying this application. The goal is to maintain consistency, readability, and best practices throughout the codebase.

## Tech Stack

This project is built with a modern, type-safe, and efficient technology stack:

-   **Framework:** React with Vite for a fast development experience.
-   **Language:** TypeScript for robust type-safety.
-   **UI Components:** shadcn/ui, a collection of beautifully designed, accessible, and customizable components built on Radix UI and Tailwind CSS.
-   **Styling:** Tailwind CSS for all styling needs. Utility-first classes are the standard.
-   **Routing:** React Router (`react-router-dom`) for all client-side navigation.
-   **Data Fetching & Server State:** TanStack Query (`@tanstack/react-query`) is used for fetching, caching, and managing server state.
-   **Forms:** React Hook Form for building performant and flexible forms, paired with Zod for schema validation.
-   **Icons:** Lucide React for a comprehensive and consistent set of icons.
-   **Linting:** ESLint and TypeScript ESLint to enforce code quality and catch errors early.

## Library Usage Guidelines

### 1. UI and Components

-   **Primary Component Library:** ALWAYS use components from the `shadcn/ui` library (`@/components/ui/*`). These are the building blocks of our application.
-   **Custom Components:** When a `shadcn/ui` component doesn't fit the need, create new, reusable components in the `src/components/` directory. These components should be small, focused, and styled with Tailwind CSS.
-   **File Structure:** Place general-purpose, reusable components in `src/components/`. Page-specific components can be co-located if not used elsewhere.

### 2. Styling

-   **Styling Engine:** Use Tailwind CSS exclusively for styling. Do NOT write custom CSS files or use CSS-in-JS libraries.
-   **Class Merging:** Use the `cn` utility from `src/lib/utils.ts` to conditionally apply and merge Tailwind CSS classes. This is especially important when creating component variants.
-   **Design System:** Adhere to the design tokens (colors, spacing, typography) defined in `tailwind.config.ts` and `src/index.css`.

### 3. Routing

-   **Router:** Use `react-router-dom` for all routing.
-   **Route Definitions:** All top-level routes should be defined in `src/App.tsx`. This provides a central location to understand the application's structure.
-   **Page Components:** Each route should correspond to a component in the `src/pages/` directory.

### 4. State Management

-   **Server State:** For any data fetched from an API, ALWAYS use TanStack Query (`useQuery`, `useMutation`, etc.). This handles caching, re-fetching, and loading/error states automatically.
-   **Client State:**
    -   For state local to a single component, use React's built-in hooks (`useState`, `useReducer`).
    -   For state shared across a few nested components, use React Context.
    -   Do NOT introduce complex global state libraries like Redux or Zustand unless the application's complexity absolutely requires it.

### 5. Forms

-   **Form Logic:** Use `react-hook-form` to manage form state, validation, and submissions.
-   **Validation:** Use `zod` to define validation schemas. Connect Zod schemas to `react-hook-form` using the `@hookform/resolvers/zod` package.

### 6. Icons

-   **Icon Library:** Use icons from `lucide-react` exclusively to maintain visual consistency.

### 7. Code Quality

-   **TypeScript:** Write all new code in TypeScript. Use specific types over `any`.
-   **File Naming:** Use PascalCase for component files (e.g., `MyComponent.tsx`) and kebab-case for utility/hook files (e.g., `use-my-hook.ts`).
-   **Simplicity:** Keep code simple, elegant, and easy to understand. Avoid over-engineering solutions.
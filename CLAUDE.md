# CLAUDE.md - Guidelines for Agentic Coding in this Repository

## Build/Lint/Test Commands
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm start:standalone` - Start standalone server
- `pnpm lint` - Run ESLint for code linting
- `pnpm analyze` - Analyze bundle size

## Code Style Guidelines
- **Imports**: Order - React/Next.js core, external libraries, internal components/utils
- **Component Structure**: Use React function components with TypeScript types
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Types**: Use TypeScript interfaces for complex objects (see lib/types.ts)
- **CSS**: Use Tailwind CSS with utility classes and conditional classNames with clsx/tailwind-merge
- **Paths**: Use absolute imports with @ alias (e.g., @/components, @/lib)
- **Error Handling**: Use try/catch for async operations with proper error feedback
- **File Structure**: Page components in app/, reusable components in components/
- **Formatting**: Follow consistent indentation (2 spaces) and line breaks

## Libraries & Architecture
- Next.js 15 (App Router) with TypeScript
- Tailwind CSS for styling
- Shadcn UI + Radix UI for components
- WordPress integration for content management
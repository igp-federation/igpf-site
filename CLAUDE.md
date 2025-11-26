# Islington GP Federation Website

## Project Overview
NHS healthcare federation website migrated from Squarespace to Next.js. Deployed on Vercel.

## Tech Stack
- Next.js 16 with App Router
- TypeScript
- SCSS Modules for styling
- ESLint 9 (flat config) + Prettier for code quality

## Project Structure
```
src/
  app/                    # Next.js App Router pages
    layout.tsx            # Root layout
    page.tsx              # Homepage
    what-we-do/           # Services section (16 sub-pages)
    who-we-are/           # Team section (8 sub-pages)
    our-gp-members/       # GP practices listing
    join-the-team/        # Careers
    contact-us/           # Contact info
    your-data/            # Privacy policies (5 sub-pages)
  components/             # Reusable components
    Header/
    Footer/
    PageHeader/
    SideNav/
  styles/                 # Global styles and variables
    globals.scss
    variables.scss
```

## Development Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run lint:fix  # Run ESLint with auto-fix
npm run format    # Format code with Prettier
```

## Code Conventions
- Use SCSS modules for component-specific styles (`*.module.scss`)
- Mobile-first responsive design
- NHS color palette with federation branding (see `src/styles/variables.scss`)
- Components use barrel exports (`index.ts`)
- Server Components by default, `'use client'` only when needed

# Islington GP Federation Website

## Project Overview
NHS healthcare federation website migrated from Squarespace to Next.js.

## Tech Stack
- Next.js 16 with App Router
- TypeScript
- SCSS Modules for styling
- ESLint + Prettier for code quality

## Project Structure
```
src/
  app/                    # Next.js App Router pages
    (routes)/             # Route groups for pages
    layout.tsx            # Root layout
    page.tsx              # Homepage
  components/             # Reusable components
    Header/
    Footer/
    Navigation/
  styles/                 # Global styles and variables
    globals.scss
    variables.scss
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Key Pages
- `/` - Homepage
- `/what-we-do` - Services overview (16 sub-pages)
- `/who-we-are` - About the organization (8 team sub-pages)
- `/our-gp-members` - List of 25 GP practices
- `/join-the-team` - Careers page
- `/contact-us` - Contact information
- `/your-data` - Privacy and data policies (5 sub-pages)

## Styling Guidelines
- Use SCSS modules for component-specific styles
- Mobile-first responsive design
- NHS color palette with federation branding
- Consistent spacing using CSS variables

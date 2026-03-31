# Personal Website

Portfolio site built with Next.js, TypeScript, and Tailwind CSS.
Deployed at: https://theomalaper.vercel.app/

## Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Blog**: MDX via next-mdx-remote
- **Deploy**: Vercel

## Project Structure
```
app/              # Pages and layouts
components/       # UI and section components
content/blog/     # MDX write-up files
data/             # Typed static data (projects, experience, etc.)
lib/              # MDX utilities
public/           # Static assets
```

## Running locally
```bash
npm install
npm run dev       # localhost:3000
npm run build     # Production build
npm run lint      # ESLint
```

## Adding content
- **New blog post**: add an `.mdx` file to `content/blog/` with frontmatter
- **New project**: add an entry to `data/projects.ts`
- **Update experience**: edit `data/experience.ts`

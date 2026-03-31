# CLAUDE.md — Personal Website

## Project Overview
Theo Malaper's personal portfolio website. A clean, minimal dark-themed site built with Next.js, TypeScript, and Tailwind CSS. Includes sections for bio, tech stack, projects, experience, write-ups/blog, social links, and contact.

## Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Blog**: MDX with gray-matter for frontmatter
- **Icons**: react-icons (tech stack), lucide-react (UI icons)
- **Deploy**: Vercel

## Project Structure
```
app/
  layout.tsx          # Root layout — font, metadata, nav, footer
  page.tsx            # Homepage — assembles all section components
  globals.css
  blog/
    page.tsx          # Blog post list
    [slug]/page.tsx   # Individual post
components/
  sections/           # One file per homepage section (Hero, Projects, etc.)
  ui/                 # Shared primitives (Badge, SectionHeader)
content/blog/         # MDX write-up files
data/                 # Typed static data (projects.ts, experience.ts, social.ts)
lib/
  mdx.ts              # getAllPosts(), getPostBySlug()
public/
```

## Coding Guidelines

### General
- The simpler the better
- Use TypeScript strictly — no `any`, no implicit types on exported interfaces
- Prefer named exports over default exports for components
- Keep components small and focused — one responsibility per file
- No unnecessary abstractions: don't build for hypothetical future use
- No comments unless logic is genuinely non-obvious
- Name variables and functions descriptively — meaning should be clear from the name alone
- Consistent spacing and indentation (enforced by ESLint + Prettier)
- Linting and type checking must pass before committing
- Constant variables in `UPPER_SNAKE_CASE`, defined at the top of the file
- Include tests; test behaviour not implementation

### Naming
- Components in `PascalCase`, filename matches component name (`ProjectCard.tsx`)
- Hooks prefixed with `use` (`useScrollPosition`)
- Booleans prefixed with `is/has/should` (`isOpen`, `hasError`)
- Event handlers prefixed with `handle` (`handleClick`, `handleSubmit`)
- Types/interfaces in `PascalCase` — use `[Name]Props` for component props, `[Name]` for domain types

### TypeScript
- No `any` — use `unknown` and narrow, or define a proper type
- No non-null assertions (`!`) unless the value is guaranteed non-null at that point
- Explicit return types on all exported functions
- Prefer `interface` for object shapes; use `type` for unions and primitives

### Components
- Props interface defined directly above the component, named `[ComponentName]Props`
- Destructure props in the function signature
- No inline function definitions in JSX when the handler has any logic — extract to `handle*`
- One component per file

### File Organisation
- Imports ordered: 1) React/Next, 2) third-party, 3) internal (`@/...`), 4) relative
- No barrel `index.ts` re-exports

### Styling
- Tailwind utility classes only — no separate CSS files except `globals.css`
- Use `cn()` (clsx + tailwind-merge) for all conditional class logic — never string interpolation
- Class strings sorted: layout → spacing → typography → color → interactivity
- No arbitrary values — use Tailwind's scale where possible
- Dark theme base: `bg-stone-950 text-stone-100` (stone palette for warm tones, not neutral)
- Section headers: `text-xs tracking-widest uppercase font-mono text-neutral-400`
- Body font: monospace via `--font-mono` CSS variable (JetBrains Mono or Geist Mono)

### Data
- Structured content (projects, experience, social links) lives in `data/*.ts` as typed arrays
- Long-form prose lives in `content/blog/*.mdx` with frontmatter
- Never put project/experience data inside MDX — keep data and prose separate

### MDX / Blog
- Frontmatter fields: `title`, `date` (ISO string), `description`, `tags` (string[]), `published` (boolean)
- `lib/mdx.ts` exposes `getAllPosts()` and `getPostBySlug(slug)` — use these everywhere
- Blog post pages must include `generateStaticParams()` for static pre-rendering
- Wrap blog content in `prose prose-invert prose-neutral` for dark-mode typography

### SEO
- Use Next.js Metadata API (no external libraries)
- Every page exports a `metadata` object or `generateMetadata()` function

### Testing
- Test behaviour, not implementation (what it renders/does, not how)
- One `describe` block per component/function
- Test file co-located with the file it tests (`ProjectCard.test.tsx` next to `ProjectCard.tsx`)

### Git
- Commit messages: imperative present tense (`add hero section`, not `added`)
- One logical change per commit

### Gotchas
- `html { scroll-padding-top: 64px; }` in globals.css — prevents content hiding under sticky header
- Import react-icons from sub-paths: `import { SiTypescript } from 'react-icons/si'`
- Use `prose prose-invert prose-neutral` on blog post containers (not just `prose`)
- Availability badge pulsing dot: use Tailwind `animate-ping` on a nested `<span>`
- `Badge` accepts a `variant` prop: `default | active | sold | archived | in-progress`
- Each homepage section needs an `id` for anchor nav (`id="projects"`, etc.)

## Content
- **Owner**: Theo Malaper
- **Email**: theomalaper.cognez@gmail.com
- **GitHub**: https://github.com/theomalaper
- **LinkedIn**: https://www.linkedin.com/in/theo-malaper/

## Running Locally
```bash
npm run dev     # Start dev server at localhost:3000
npm run build   # Production build (verify all routes are static ○)
npm run lint    # ESLint
```

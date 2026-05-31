# Dubai Pet Relocation

> Premium pet transport & relocation landing site for dogs and cats moving to or from Dubai.

A fast, single-page marketing site built with React, Vite, and Tailwind CSS, deployed on Vercel.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| Routing | wouter (client-side) |
| Language | TypeScript 5.9 (strict) |
| Icons | lucide-react, react-icons |
| Hosting | Vercel |
| Package manager | pnpm |

## Project Structure

```
.
├── index.html              # App entry HTML (SEO meta + JSON-LD schema)
├── public/                 # Static assets (WebP images, favicon, robots, sitemap)
├── src/
│   ├── main.tsx            # React entry
│   ├── App.tsx             # Router
│   ├── index.css           # Tailwind + design tokens
│   ├── pages/              # HomePage, not-found
│   ├── components/ui/      # Shared UI primitives
│   └── lib/                # Utilities
├── vite.config.ts
├── tsconfig.json
└── vercel.json             # Vercel build + SPA rewrites
```

## Getting Started

```bash
pnpm install      # install dependencies
pnpm dev          # start dev server → http://localhost:5173
pnpm typecheck    # type-check the project
pnpm build        # production build → dist/
pnpm preview      # preview the production build locally
```

Requirements: Node.js 22+ and pnpm 10+.

## Deployment

Deployed on Vercel. Pushes to `main` trigger an automatic production deploy
(`framework: vite`, output `dist/`). SPA rewrites are configured in
[vercel.json](./vercel.json) so all routes serve `index.html`.

## License

MIT

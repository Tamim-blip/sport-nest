<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# sport-nest

Early-stage Next.js 16 App Router app (`src/app`) — React 19, TypeScript strict, npm as the package manager (only `package-lock.json` exists). `src/app/page.tsx` is the only real page; everything else in `src/` is shadcn UI primitives, hooks, and `lib/utils`.

## Commands

- `npm run dev` / `npm run build` / `npm start` — standard Next.js scripts (dev and build run on Turbopack).
- `npm run lint` — plain ESLint CLI. In Next 16, `next build` no longer runs linting, so lint must be run separately.
- `npx tsc --noEmit` — focused typecheck (there is no `typecheck` script).
- No test runner is configured.

## Framework quirks

- `cacheComponents: true` in `next.config.ts`: any uncached/dynamic data read must be inside a `<Suspense>` boundary or cached with `use cache`, or the dev overlay flags a blocking-route error. Also enables partial prefetching. See `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`.
- React Compiler is enabled (`reactCompiler: true`) — don't add manual `useMemo`/`useCallback` by default.
- Tailwind v4 with no `tailwind.config` file — theme tokens are defined CSS-first in `@theme inline` in `src/app/globals.css`.

## shadcn/ui

- Configured in `components.json` with style `base-nova` built on `@base-ui/react` primitives, **not** Radix — component APIs may differ from the Radix-based shadcn examples in older training data.
- Add components with `npx shadcn add <name>`; they land in `src/components/ui`.
- Aliases: `@/components`, `@/components/ui`, `@/lib` (`cn` lives in `@/lib/utils`), `@/hooks`.

## Git gotcha

- The enclosing git repo root is `~/Desktop/All-Projects` (several levels up, still on its first commit). Running `git status`/`git add` from here sweeps in thousands of unrelated files — always scope git operations to explicit `sport-nest/` paths.

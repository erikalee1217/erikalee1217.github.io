# Erika Lee — Astro portfolio V1

Static Astro + TypeScript personal website with local photographs and Markdown writing.

## Local development and verification

Use Node.js 24.19.0 (see `.node-version`) and npm:

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run check
npm run build
npm run preview -- --host 127.0.0.1
```

The build writes to `dist/`. Dependencies, build output, and Astro caches are ignored.
See `WRITING.md` for draft and article routing rules.

## Migration and publishing safety

Production currently publishes the legacy Vue site from `main` / `(root)`.
This migration is prepared locally on `migration/astro-v1`; it has not been deployed.
Do not merge it into `main` while branch-based publishing remains active.

Recovery commits recorded before preparation:

- Legacy main: `68f7693eb635011eb4712fced7e99763ec0cf915`
- Legacy gh-pages: `667dc3bdf4937f699eb80cff4f5a38a5af8573d7`

The repository history and existing LICENSE are retained. Project summaries originated
from the legacy portfolio; the approved Astro copy, personal images, and article content
are preserved in this migration.

`.github/workflows/checks.yml` validates pull requests to main without deployment.
`.github/workflows/deploy.yml` runs manually on main only, validates and uploads `dist`,
and uses the official Pages deployment action. There is no push-triggered deployment.

Before cutover, preserve the legacy published artifact and recovery references.
Changing Pages to GitHub Actions, merging, and triggering deployment require separate
approval. A rollback can redeploy the preserved legacy static artifact; do not rely on
rebuilding the old Vue dependencies. Never run the old Vue publishing script.

Production configuration uses the root URL `https://erikalee1217.github.io` and permits
indexing. The local preview is for review; no public preview deployment is configured.

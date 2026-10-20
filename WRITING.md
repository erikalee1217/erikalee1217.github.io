# Writing foundation

Articles belong in `src/content/articles/` as Markdown (`.md`). The first approved English article is integrated for local review. The other two planned series entries remain unlinked and have no article files or routes.

Frontmatter fields:
- `title`: required nonempty string; the layout supplies the only H1.
- `description`: required nonempty string.
- `series`: optional series title.
- `draft`: defaults to `true`. Only an explicit `false` allows routing.
- `publicationDate`: optional date. Future dates exclude articles until a build after that date.

A nonempty body is also required for a public route. Both the index and route generator use `getPublishedArticles()`, in development and production. No draft preview routes exist. Keep unapproved articles marked as drafts. Do not publish just to preview a layout.

Use H2 sections and H3 subsections, fenced code blocks, normal Markdown lists and links, and descriptive alt text for images. Code blocks scroll horizontally; images keep their aspect ratio. Markdown is sufficient; no MDX integration is installed.

Before release: obtain content approval, explicitly set `draft: false`, optionally set the real publication date, then run `npm run check` and `npm run build`. This changes local generated output only; deployment remains a separate decision. Production metadata permits indexing; draft exclusion is enforced by the content loader and route generator.

# Harbur Playbook

The Harbur Playbook, live at [docs.harbur.io](https://docs.harbur.io).

Built with [Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev).
All content lives in `content/docs/` as MDX.

## Development

```sh
bun install
bun run dev
```

Open http://localhost:3000 to see the result.

```sh
bun run build        # production build
bun run types:check  # type check
```

## Structure

| Path                       | Description                                       |
| -------------------------- | ------------------------------------------------- |
| `content/docs/`            | All documentation content, one MDX file per page  |
| `content/docs/meta.json`   | Explicit, ordered navigation                       |
| `app/[[...slug]]/`         | The docs page route                                |
| `app/api/search/route.ts`  | The route handler for search                       |
| `lib/source.ts`            | Fumadocs content source adapter                    |
| `lib/layout.shared.tsx`    | Shared layout options                              |
| `source.config.ts`         | Frontmatter and `meta.json` schemas                |

## Adding a page

1. Create the `.mdx` file under `content/docs/` with a `title` in the frontmatter.
2. Add its slug to `meta.json`, in reader order. Pages not listed there do not
   appear in the navigation.

Employees also have access to our [internal docs](https://docs.pro.harbur.io).

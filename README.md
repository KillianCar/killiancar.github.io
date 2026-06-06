# killianc.com

Personal dev blog built with [Astro](https://astro.build), deployed to GitHub Pages
at [killianc.com](https://killianc.com). Theme based on [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## Local development

```sh
npm install
npm run dev       # http://localhost:4321 — drafts are visible
npm run build     # production build into ./dist (drafts excluded)
npm run preview   # serve the production build locally
```

## Writing posts

Posts live in `src/content/blog/` as `.md` / `.mdx`. Frontmatter schema
(`src/content.config.ts`):

```yaml
---
title: 'Post title'
description: 'Short summary used for SEO and the OG image.'
pubDate: 2026-06-06        # interpreted as UTC
updatedDate: 2026-06-07    # optional
heroImage: ../../assets/blog-placeholder-1.jpg   # optional
tags: ['astro', 'web']     # optional
draft: false               # true → hidden from prod build, RSS, and sitemap
---
```

A social-share (OG) image is generated automatically per post at `/og/<slug>.png`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes via `actions/deploy-pages`. In the repo:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Custom domain (one-time setup)

`public/CNAME` pins the domain to `killianc.com`. Configure these records at the
DNS registrar:

| Type  | Host  | Value                  |
| ----- | ----- | ---------------------- |
| A     | `@`   | `185.199.108.153`      |
| A     | `@`   | `185.199.109.153`      |
| A     | `@`   | `185.199.110.153`      |
| A     | `@`   | `185.199.111.153`      |
| AAAA  | `@`   | `2606:50c0:8000::153`  |
| AAAA  | `@`   | `2606:50c0:8001::153`  |
| AAAA  | `@`   | `2606:50c0:8002::153`  |
| AAAA  | `@`   | `2606:50c0:8003::153`  |
| CNAME | `www` | `killianc.github.io`   |

Then, in GitHub: **Settings → Pages** → set the custom domain to `killianc.com`
and enable **Enforce HTTPS** once the certificate provisions. Verify the domain
under your GitHub **account** settings (Pages) to prevent takeover.

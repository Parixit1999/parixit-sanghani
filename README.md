# Parixit Sanghani Portfolio

Source for [parixitsanghani.com](https://parixitsanghani.com): a single-page portfolio with a space-themed background and an animated illustration for each role.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) for scroll and illustration animations
- [lucide-react](https://lucide.dev) icons

## Project Structure

```text
src/
  app/                  layout (metadata, fonts, JSON-LD), page, global styles
  components/           page sections, starfield, nav, footer
    illustrations/      animated SVG illustration per company
  data/profile.ts       all site content: experience, projects, skills, education
  lib/motion.ts         shared animation variants
public/                 favicons, CNAME, robots.txt, sitemap.xml, manifest
```

To update content, edit `src/data/profile.ts`. Components read everything from there.

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: build the static site into `out/`
- `npm start`: serve the built `out/` folder locally
- `npm run lint`: run ESLint

## Deployment

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which builds the static export and publishes `out/` to GitHub Pages. The custom domain is set by `public/CNAME`.

## Accessibility

All motion respects the `prefers-reduced-motion` setting: illustrations render in their final state, and the starfield and looping effects stop.

## License

The source code in this repository is licensed under the MIT License.
See [LICENSE](./LICENSE) for details.

Portfolio content (including personal biography text, project descriptions,
branding, and media assets) is © Parixit Sanghani and remains all rights reserved
unless explicitly stated otherwise.

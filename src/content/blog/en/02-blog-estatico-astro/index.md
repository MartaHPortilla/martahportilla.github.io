---
title: "How to create a static blog with Astro step by step"
description: "Detailed guide for creating a static blog using Astro, utilizing Markdown, static generation, and best practices in web architecture."
date: 2026-02-24
tags: ["Astro", "Blog", "Static Site Generation", "Frontend"]
lang: "en"  
draft: true
---

> *The other day I was re-reading some of my old articles and I was struck by a strange nostalgia for the solidness of paper. On the web, everything feels ephemeral, almost liquid—a tangle of requests and databases that can crumble at the slightest breath of a server. That’s why, when I set out to build this portfolio, I was looking for exactly the opposite: an architecture that felt almost carved in stone, but flowed with the lightness of the digital wind.*

How do you achieve that paradox of sturdiness and speed? It wasn’t an immediate realization, but the result of a pragmatic deep dive that led me to static generation. In this post, I want to break down, step by step, how I built this blog using Astro, turning that nostalgia for the enduring into a sophisticated technical decision.

## The Pillar of Static: Why SSG?

Generating a static blog—or **Static Site Generation (SSG)**—means producing HTML documents during the compilation phase (*build time*). Unlike traditional dynamic websites, there’s no waiting around while a server queries a database; everything is already primed and ready to be served.

I decided to adopt this approach for several compelling reasons that I find irrefutable for a project like this:

- **Superior Performance**: By serving pre-built files, server response times are drastically minimized. Astro is, at its core, a tool designed for speed.
- **Increased Security**: By ditching databases and complex real-time backend logic, we wipe out most common attack vectors in one fell swoop.
- **Ease of Deployment**: The resulting artifacts can be hosted with effortless ease on static distribution platforms like GitHub Pages.

## Initialization: The Blank Canvas

To overcome that "fear of the empty canvas" I mentioned in my previous post, Astro provides a remarkably agile Command Line Interface (CLI). The process starts with a simple command:

```bash
npm create astro@latest
```

During this phase, the wizard lets us pick a solid foundation to build upon. After setting up TypeScript and the dependencies, we can fire up our local environment:

```bash
npm install
npm run dev
```

With the server running at `http://localhost:4321`, our scaffolding is ready for us to start "writing" the structure.

## Architecture: The Map of Our Library

In Astro, organization isn't optional—it's intrinsic to the system. The directory structure follows a clear convention that makes scaling a breeze:

- `src/pages/`: Where the heart of our routing lives. Every file is a gateway for the user.
- `src/layouts/`: Structural components that ensure visual coherence (my digital "paper" and "margins").
- `src/components/`: Reusable UI pieces—our islands of interactivity.
- `src/content/`: The sacred repository of our texts, where we store content in Markdown or MDX.

## Content Collections: The Discipline of Metadata

For a blog to function with the precision of a newsroom, content must be perfectly structured. This is where **Content Collections** come in. This tool allows us to validate the metadata (*frontmatter*) of every article with almost academic rigor.

We define our collection in `src/content/config.ts` to ensure no post goes live without its date, title, or correct description:

```typescript
import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      lang: z.enum(["es", "en"]),
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional()
    })
  })
};
```

## The Art of Writing with Markdown

Writing articles happens organically in `.md` files within `src/content/blog/`. Thanks to Astro’s i18n capabilities, we organize our texts into `es/` and `en/` subdirectories, ensuring seamless bilingual management.

Each file kicks off with its metadata header, the starting gun for the Astro engine:

```markdown
---
title: "Impactful Entry Title"
description: "A summary that encourages reading and boosts SEO."
date: 2026-03-04
tags: ["Astro", "Development"]
lang: "en"
---
```

## Dynamic Routes: Distributing Content

Since our articles aren't in the `pages` folder, we need a template to act as an automatic distributor. In Astro, this is solved through dynamic routes (like `src/pages/[lang]/blog/[...slug].astro`) and the asynchronous `getStaticPaths()` function.

This function takes care of instantiating each route during compilation, making sure every "island" of content has its exact place on the site map before the user even thinks about visiting.

## Concluding: Carving in Digital

Once everything is verified, the final step is consolidating our work:

```bash
npm run build
```

This command is what truly "carves the stone." It processes the routes, optimizes resources, and drops the final website into the `/dist` directory, ready to be served to the world with irrefutable speed.

That initial desire to find something solid in the liquid world of the web found its answer in this workflow. Setting the foundation with Astro and Content Collections has given me a robust and elegant architecture, letting me focus on what really matters: telling stories.

In the next installment, we’ll break down how to automate this entire process so that every time I finish writing a new adventure, the world can read it immediately.

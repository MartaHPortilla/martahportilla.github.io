---
title: "How to create a static blog with Astro step by step"
description: "Detailed guide for creating a static blog using Astro, utilizing Markdown, static generation, and best practices in web architecture."
date: 2026-02-24
tags: ["Astro", "Blog", "Static Site Generation", "Frontend"]
lang: "en"  
draft: true
---

# How to create a static blog with Astro step by step

> In this document we will outline the technical procedure for building a static blog using Astro. We will analyze the use of Markdown, static site generation, and the application of organizational best practices.

---

## 1. Justification for a static blog

Generating a static blog entails producing the HTML documents during the compilation phase (*build time*), as opposed to dynamic generation upon each client request.

We have decided to adopt this approach for the following technical reasons:
- **Superior Performance**: By serving pre-built files, server response times are heavily minimized.
- **Increased Security**: The lack of a database or runtime backend logic eliminates numerous attack vectors.
- **Deployment Simplicity**: The resulting artifact files can be effortlessly hosted on static distribution platforms (such as GitHub Pages or Vercel).

This architectural framework is known within the industry as **Static Site Generation (SSG)**.

🔎 **References:**
- Static Site Generation (Astro Docs): https://docs.astro.build/en/core-concepts/rendering-modes/

---

## 2. Project initialization with Astro

To begin configuring a new project, we utilize the official Command Line Interface (CLI) provided by Astro:

```bash
npm create astro@latest
```

During this interactive configuration process, the wizard allows us to define:
1. The initial base template.
2. The integration and strictness level of TypeScript.
3. The automatic installation of necessary project dependencies.

Once the wizard completes, we proceed to initiate the local development server:

```bash
npm install
npm run dev
```

The local environment will act, by default, on the address `http://localhost:4321`.

🔎 **References:**
- Getting Started (Astro Docs): https://docs.astro.build/en/getting-started/

---

## 3. Architecture and directory structure

Upon instantiating a baseline Astro project, we encounter a directory structure composed of well-defined purposes:

- `src/pages/`: The directory responsible for routing. Each file generated herein corresponds to a public route of the site.
- `src/layouts/`: Structural UI components designed for reusability (headers, footers, shared meta tags).
- `src/components/`: Functional or visual user interface components.
- `src/content/`: A dedicated directory to store the site's structured content (Markdown, MDX, and JSON files).

Routing in Astro operates through a *file-based routing* ecosystem, which significantly simplifies the creation of new views.

🔎 **References:**
- Routing in Astro: https://docs.astro.build/en/core-concepts/routing/

---

## 4. Configuring Content Collections

For the management of blog articles, we have opted to implement the **Content Collections** system. This technical decision allows us to:

- Strictly validate the metadata (*frontmatter*) of each article using TypeScript and Zod.
- Guarantee structural uniformity across all published content.
- Facilitate the scalability and maintainability of the underlying data model.

Below, we detail the configuration established within the `src/content/config.ts` file:

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

🔎 **References:**
- Content Collections: https://docs.astro.build/en/guides/content-collections/

---

## 5. Article Creation via Markdown

The writing process for the articles occurs within the respective collection directory, which in our case is `src/content/blog/`. Given our internationalization support, we subdivide this into the `es/` and `en/` subdirectories.

The standard layout for declaring metadata (*frontmatter*) in Markdown is as follows:

```markdown
---
title: "Structured article title"
description: "A precise summary intended for the meta description tag."
date: 2026-02-24
tags: ["Astro", "Blog"]
lang: "en"
---

The subsequent article content correctly formatted using native Markdown syntax or MDX.
```

🔎 **References:**
- Markdown in Astro: https://docs.astro.build/en/guides/markdown-content/

---

## 6. Dynamic Route Generation

Given that Markdown files from Content Collections are not hosted directly within `src/pages/`, it is imperative to generate a dynamic route template capable of individually rendering each article within the collection.

To accomplish this, we utilize a file such as `src/pages/[lang]/blog/[...slug].astro` or equivalent. Inside, we invoke the asynchronous function `getStaticPaths()`. This function strictly executes during the compilation (*build*) process, explicitly returning the exact paths Astro must construct. Consequently, we ensure that the generated site remains 100% statically served.

🔎 **References:**
- getStaticPaths API Reference: https://docs.astro.build/en/reference/api-reference/#getstaticpaths

---

## 7. Compilation and Final Optimization

Once all elements and content have been rigorously verified in the local server, we proceed to output the final production-optimized build using the command:

```bash
npm run build
```

The static engine processes all established routes, hydrates any required conditional components, minifies the assets, and places the resulting website within the `/dist` directory. These final generated artifacts are the payloads that will be distributed identically in the hosting ecosystem.

---

## 8. Conclusion

Utilizing a Static Site Generator does not imply restricting a blog's functional complexity, but rather strictly ensuring that such complexity is resolved entirely during development time.

For this portfolio, laying the foundations utilizing Astro, Content Collections, and Markdown has provided us with a deterministic, highly secure, and intrinsically zero-maintenance architecture. In our forthcoming technical analysis, we will thoroughly explore the configuration of GitHub Actions to accomplish the automated deployment of this exact infrastructure.

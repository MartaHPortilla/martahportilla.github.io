import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["es", "en"]),
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["es", "en"]),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

export const collections = { pages, blog, work, projects };

import { z, defineCollection } from 'astro:content';

const highlightEntry = z.object({
  time: z.number(),
  drawer: z.string(),
  sort: z.string(),
  chapter: z.string(),
  text: z.string(),
  page: z.number(),
  note: z.string().optional(),
});

const document = z.object({
  title: z.string(),
  number_of_pages: z.number(),
  file: z.string(),
  author: z.string(),
  entries: z.array(highlightEntry),
});

const highlights = defineCollection({
  type: 'data',
  schema: z.object({
    version: z.string(),
    documents: z.array(document),
  }),
});

export const collections = { highlights };
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const highlights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string().optional(),
  }),
});

export const collections = { blog }
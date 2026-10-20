import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    series: z.string().trim().min(1).optional(),
    publicationDate: z.coerce.date().optional(),
    draft: z.boolean().default(true),
  }),
});
export const collections = { articles };

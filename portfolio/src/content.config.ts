import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const architecture = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/architecture' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    type: z.string(),
    location: z.string(),
    area: z.string(),
    budget: z.string().optional(),
    duration: z.string(),
    status: z.string(),
    role: z.string(),
    heroColor: z.string(),
    photos: z.array(z.string()),
    descriptionEn: z.array(z.string()),
    descriptionEs: z.array(z.string()),
    results: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    isPM: z.boolean().optional(),
    order: z.number(),
  }),
});

export const collections = { architecture };

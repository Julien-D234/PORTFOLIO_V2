import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z
      .object({
        fr: z.string(),
        en: z.string(),
      })
      .optional(),
    description: z
      .object({
        fr: z.string(),
        en: z.string(),
      })
      .optional(),
    techs: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

export const collections = { projects };

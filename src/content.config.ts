import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({
      fr: z.string(),
      en: z.string(),
    }),
    description: z.object({
      fr: z.string(),
      en: z.string(),
    }),
    techs: z.array(z.string()),
    link: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

export const collections = { projects };

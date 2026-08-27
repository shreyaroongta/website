import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({ title:z.string(), summary:z.string(), date:z.coerce.date().optional(), course:z.string().optional(), category:z.string().optional(), featured:z.boolean().default(false), thumbnail:z.string().optional(), tools:z.array(z.string()).optional(), skills:z.array(z.string()).optional(), draft:z.boolean().default(false) })
});
export const collections = { projects };

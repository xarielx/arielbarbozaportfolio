import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        category: z.string(),
        github: z.string().url(),
        external: z.string().url(),
        tags: z.array(z.string()),
        visible: z.boolean().default(true),
        position: z.number(),
    }),
})

export const collections = { projects }

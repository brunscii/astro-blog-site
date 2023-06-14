import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
        // Title and description
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
        // The date of publication
		pubDate: z
			.string()
			.optional()
			.transform((val) => (val ? new Date(val) : undefined)),
        // The date the post was updated
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		// This is whether or not a post is a draft
    draft: z
			.boolean()
			.optional(),

		heroImage: z
      .string()
      .optional(),
      
    category: z
      .string()
      .optional(),
	}),
});

export const collections = { blog };

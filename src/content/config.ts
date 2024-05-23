import { defineCollection, reference, z } from 'astro:content';

const footerSocialsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        url: z.string().url(),
        icon: z.string(),
    }),
});

const footerLinksCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        items: z.array(z.object({
            title: z.string(),
            slug: z.string(),
        })),
    }),
});

const navLinksCollection = defineCollection({
    type: 'data',
    schema: z.object({
        links: z.array(z.object({
            title: z.string(),
            slug: z.string(),
        })),
    }),
});

const metaInfoCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        canonicalURL: z.string().url(),
        imageUrl: z.string(),
        name: z.string(),
    }),
});

const projectsCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        id: z.number(),
        author: z.string(),
        imageUrl: image(),
        projectName: z.string(),
    }),
});

export const collections = {
    'footersocials': footerSocialsCollection,
    'footerlinks': footerLinksCollection,
    'navlinks': navLinksCollection,
    'metaheadinfo': metaInfoCollection,
    "projects": projectsCollection,
};
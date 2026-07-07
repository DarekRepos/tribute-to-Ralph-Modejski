import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const footerSocialsCollection = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/footersocials' }),
    schema: z.object({
        name: z.string(),
        url: z.string().url(),
        icon: z.string(),
    }),
});

const footerLinksCollection = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/footerlinks' }),
    schema: z.object({
        title: z.string(),
        items: z.array(z.object({
            title: z.string(),
            slug: z.string(),
        })),
    }),
});

const navLinksCollection = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/navlinks' }),
    schema: z.object({
        links: z.array(z.object({
            title: z.string(),
            slug: z.string(),
        })),
    }),
});

const metaInfoCollection = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/metaheadinfo' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        canonicalURL: z.string().url(),
        imageUrl: z.string(),
        name: z.string(),
    }),
});

const projectsCollection = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
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

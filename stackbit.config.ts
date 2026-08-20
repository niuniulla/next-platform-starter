import { defineConfig } from '@stackbit/types';

export default defineConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs', // Tells Netlify this is a Next.js project
    nodeVersion: '18',
    contentSources: [],
    modelExtensions: []
});

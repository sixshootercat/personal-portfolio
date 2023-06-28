import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas/schema';
import { visionTool } from '@sanity/vision';

export default defineConfig([
  {
    name: 'personal-portfolio-prod',
    title: 'Personal Portfolio',
    projectId: 'uxxoqaxi',
    dataset: 'production',
    plugins: [deskTool(), visionTool(), vercelDeployTool()],
    schema: {
      types: schemaTypes,
    },
    basePath: '/prod',
  },
  {
    name: 'personal-portfolio-dev',
    title: 'Personal Portfolio',
    projectId: 'uxxoqaxi',
    dataset: 'dev',
    plugins: [deskTool(), visionTool(), vercelDeployTool()],
    schema: {
      types: schemaTypes,
    },
    basePath: '/dev',
  },
]);

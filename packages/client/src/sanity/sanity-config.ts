import { ClientConfig } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

export const sanityConfig: ClientConfig = {
  dataset,
  projectId,
  apiVersion: 'v1',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
  studioUrl: 'https://personal-portfolio-studio.vercel.app',
};

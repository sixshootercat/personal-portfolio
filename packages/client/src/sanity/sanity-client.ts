import { createClient } from '@sanity/preview-kit/client';
import { sanityConfig } from './sanity-config';

// as any type assertion is required else the build will fail
export const client = createClient(sanityConfig as any);

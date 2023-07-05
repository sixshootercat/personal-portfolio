import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity-config';

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

/**
 *  Custom hook for fetching preview data client-side. Requires authenticating to
 *  local sanity studio app.
 **/
export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});

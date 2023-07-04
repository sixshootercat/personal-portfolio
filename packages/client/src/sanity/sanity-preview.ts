import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity-config';

// function onPublicAccessOnly() {
//   throw new Error(`Unable to load preview as you're not logged in`);
// }

/**
 *  custom hook for fetching preview data client-side
 * */
export const usePreview = definePreview({
  projectId,
  dataset,
  //TODO: add this back when we know why it is throwing if we are authed
  // onPublicAccessOnly,
});

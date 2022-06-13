import { ClientConfig } from "next-sanity";

export const sanityConfig: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "v1",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
};

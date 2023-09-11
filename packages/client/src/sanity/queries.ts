import { groq } from "next-sanity";
import { z } from "zod";

export const technologiesSchema = z.array(
  z.object({
    _id: z.string(),
    name: z.string().nullable(),
    url: z.string().optional(),
  })
);

export type Technologies = z.infer<typeof technologiesSchema>;

export const TECHNOLOGIES_QUERY = groq`*[_type == 'technologies']{
  _id,
  name,
  url
}`;

export const ABOUT_ME_QUERY = groq`*[_type == 'aboutMe']`;

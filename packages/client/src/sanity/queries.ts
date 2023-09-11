import { groq } from 'next-sanity';

export const TECHNOLOGIES_QUERY = groq`*[_type == 'technologies']`;
export const ABOUT_ME_QUERY = groq`*[_type == 'aboutMe']`;

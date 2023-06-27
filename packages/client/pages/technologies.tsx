import { Technologies as TechContent } from '@/containers/technologies/Technologies';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { client } from '@/sanity/sanity-client';
import Head from 'next/head';
import { isDevEnv } from 'src/helpers';
import { lazy } from 'react';
import { PreviewSuspense } from 'next-sanity/preview';

const PreviewTechContent = lazy(
  () => import('../src/containers/technologies/PreviewTechnologies')
);

const query = groq`*[_type == 'technologies']`;

const Technologies = ({
  technologies,
  preview,
}: {
  technologies: any;
  preview: boolean;
}) => {
  return preview ? (
    <PreviewSuspense fallback='...loading'>
      <div className='mt-24'>
        <Head>
          <title>Technologies & Tools</title>
        </Head>
        <PreviewTechContent query={query} />
      </div>
    </PreviewSuspense>
  ) : (
    <TechContent content={technologies} />
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  console.log({ preview });
  if (preview) {
    return { props: { preview } };
  }

  let technologies = isDevEnv() ? await client.fetch(query) : [];

  return {
    props: {
      preview,
      technologies,
    },
  };
};

export default Technologies;

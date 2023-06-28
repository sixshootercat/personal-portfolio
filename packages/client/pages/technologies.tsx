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
  return (
    <div className='mt-24'>
      <Head>
        <title>Technologies & Tools</title>
      </Head>
      {preview ? (
        <PreviewSuspense fallback='...loading'>
          <PreviewTechContent query={query} />
        </PreviewSuspense>
      ) : (
        <TechContent content={technologies} />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  // fetch data only in dev mode to prevent rendering data in production
  let technologies = isDevEnv() ? await client.fetch(query) : [];

  return {
    props: {
      preview,
      technologies,
    },
  };
};

export default Technologies;

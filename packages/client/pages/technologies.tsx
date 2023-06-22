import { Technologies as TechContent } from '@/containers/Technologies';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { client } from '@/sanity/sanity-client';
import Head from 'next/head';

const Technologies = ({ technologies }: { technologies: any }) => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Technologies & Tools</title>
      </Head>
      <TechContent content={technologies} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'technologies']`;
  const technologies = await client.fetch(query);

  return {
    props: {
      technologies,
    },
  };
};

export default Technologies;

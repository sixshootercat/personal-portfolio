import { Experience as ExperienceContent } from '@/containers/Experience';
import { client } from '@/sanity/sanity-client';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';

const Experience = ({ experiences }: { experiences: any }) => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Experience</title>
      </Head>
      <ExperienceContent data={experiences} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'experiences']`;
  const experiences = await client.fetch(query);

  return {
    props: {
      experiences,
    },
  };
};

export default Experience;

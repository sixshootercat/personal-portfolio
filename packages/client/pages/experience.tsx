import { Experience as ExperienceContent } from '@/components/experience';
import { client } from '@/sanity/sanity-client';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';

const Experience = ({ experience }: { experience: any }) => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Experience</title>
      </Head>
      <ExperienceContent data={experience} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'experience']`;
  const experience = await client.fetch(query);

  return {
    props: {
      experience,
    },
  };
};

export default Experience;

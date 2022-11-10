import { MainLayout } from '@/components/layouts';
import { Experience as ExperienceContent } from '@/containers/Experience';
import { client } from '@/sanity/sanity-client';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';
import { ReactElement } from 'react';

const Experience = ({ experiences }: { experiences: any }) => {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <ExperienceContent data={experiences} />
    </>
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

Experience.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Experience;

import { MainLayout } from '@/components/layouts';
import { About as AboutContent } from '@/containers/About';
import { client } from '@/sanity/sanity-client';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { ReactElement } from 'react';

const About = ({ data }: { data: any }) => {
  return (
    <>
      <AboutContent data={data} />
    </>
  );
};

About.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const query = groq`*[_type == 'about']`;
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
};

export default About;

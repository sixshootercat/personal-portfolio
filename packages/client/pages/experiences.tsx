import { MainLayout } from '@/components/layouts';
import { Experiences as ExperiencesContent } from '@/containers/Experiences';
import { client } from '@/sanity/sanity-client';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { ReactElement } from 'react';

const Experiences = ({ experiences }: { experiences: any }) => {
  return (
    <div>
      <ExperiencesContent data={experiences} />
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

Experiences.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Experiences;

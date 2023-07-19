import { Home as HomeContent } from '@/components/home';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { client } from '@/sanity/sanity-client';

import Head from 'next/head';

const Home = ({ technologies }: { technologies: any }) => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContent items={technologies} />
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

export default Home;

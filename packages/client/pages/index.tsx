import { Home as HomeContent } from '@/components/home';
import { GetStaticProps } from 'next';
import { client } from '@/sanity/sanity-client';

import Head from 'next/head';
import { TECHNOLOGIES_QUERY, ABOUT_ME_QUERY } from '@/sanity/queries';
import { AboutMe, ContactMe, Technologies } from '@/components/home/components';

type HomeProps = {
  technologies: any;
  aboutMe: any;
};

const Home = ({ technologies, aboutMe }: HomeProps) => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContent>
        <div className='mb-8 flex items-center justify-center flex-col mt-10 md:px-20 max-w-[1440px] w-full m-auto'>
          <AboutMe sanityData={aboutMe} />
          <Technologies sanityData={technologies} />
          <ContactMe />
        </div>
      </HomeContent>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getTechnologies = async () => await client.fetch(TECHNOLOGIES_QUERY);
  const getAboutMe = async () => await client.fetch(ABOUT_ME_QUERY);

  const [technologies, aboutMe] = await Promise.all([
    getTechnologies(),
    getAboutMe(),
  ]);

  console.log({ aboutMe });

  return {
    props: {
      technologies,
      aboutMe,
    },
  };
};

export default Home;

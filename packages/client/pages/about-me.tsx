import { AboutMe as AboutMeContent } from '@/containers/AboutMe';
import Head from 'next/head';

const AboutMe = () => {
  return (
    <div className='mt-24'>
      <Head>
        <title>About Me</title>
      </Head>
      <AboutMeContent />
    </div>
  );
};

export default AboutMe;

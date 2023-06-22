import { Contact as ContactContent } from '@/containers/Contact';
import Head from 'next/head';

const AboutMe = () => {
  return (
    <div className='mt-24'>
      <Head>
        <title>About Me</title>
      </Head>
      <ContactContent />
    </div>
  );
};

export default AboutMe;

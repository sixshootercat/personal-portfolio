import { Contact as ContactContent } from '@/containers/Contact';
import Head from 'next/head';

const Contact = () => {
  return (
    <div className='mt-24'>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactContent />
    </div>
  );
};

export default Contact;

import { MainLayout } from '@/components/layouts';
import { Contact as ContactContent } from '@/containers/Contact';
import Head from 'next/head';
import { ReactElement } from 'react';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <ContactContent />
    </>
  );
};

Contact.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Contact;

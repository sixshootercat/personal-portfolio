import { MainLayout } from '@/components/layouts';
import { Contact as ContactContent } from '@/containers/Contact';
import { ReactElement } from 'react';

const Contact = () => {
  return <ContactContent />;
};

Contact.getLayout = (page: ReactElement) => {
  return <MainLayout height={100}>{page}</MainLayout>;
};

export default Contact;

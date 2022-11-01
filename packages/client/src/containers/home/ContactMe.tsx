import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { ContactLinkItem } from './ContactLinkItem';
import { SectionTitle } from './SectionTitle';

export const ContactMe = () => {
  return (
    <>
      <SectionTitle title='📲 Contact Me' />
      <section className='flex flex-col py-6 gap-3'>
        <ContactLinkItem
          text='kevin.ruhl92@gmail.com'
          href='mailto:kevin.ruhl92@gmail.com'
          icon={<MdEmail size={30} className='inline' />}
        />
        <ContactLinkItem
          text='My LinkedIn Website'
          href='https://www.linkedin.com/in/kevin-ruhl-b19b80166/'
          icon={<AiFillLinkedin size={30} className='inline' />}
        />
      </section>
    </>
  );
};

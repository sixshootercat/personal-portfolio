import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

export const AboutMe = () => {
  return (
    <>
      <SectionTitle title='👨‍💻 About Me' />
      <div className='my-10 rounded-full overflow-hidden'>
        <Image
          src='/images/profile-kevin.jpg'
          alt='man with sunglasses'
          width='200px'
          className='rounded-full'
          height='200px'
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/images/profile-kevin.jpg'
        />
      </div>
      <section className='flex flex-col'>
        <p>
          I&apos;ve been designing and writing software since 2016. Currently
          working with React and Typescript on the frontend. Doing backend
          development with Node and Go. I&apos;m a pragmatic thinker and
          technology agnostic. When I&apos;m not programming, some other
          activities I enjoy doing in my free time are listening to philosophy
          podcasts, doing physical training, and traveling.
        </p>
        <br />
        <p className='mb-6'>
          Contact me to help you build slick UIs for your business needs.
        </p>
      </section>
    </>
  );
};

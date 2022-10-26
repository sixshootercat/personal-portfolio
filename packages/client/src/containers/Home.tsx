import { Text } from '@mantine/core';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export const Home = () => {
  return (
    <div className='mb-24 sm:mb-56 flex items-center justify-center flex-col mt-10'>
      <h1 className='mb-10'>A Bit About Me</h1>
      <div className='mb-10 rounded-full overflow-hidden'>
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
      <section className='sm:w-2/3 flex flex-col'>
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
        <p className='text-lg self-center'>📲 How to reach me</p>
        <br />
        <div className='mb-3 flex gap-2 items-center'>
          <MdEmail size={30} className='inline' />{' '}
          <a
            className='hover:text-cyan-400'
            href='mailto:kevin.ruhl92@gmail.com'
          >
            kevin.ruhl92@gmail.com
          </a>
        </div>
        <div className='flex gap-2 items-center'>
          <AiFillLinkedin size={30} className='inline hover:text-cyan-400' />{' '}
          <a
            className='hover:text-cyan-400'
            href='https://www.linkedin.com/in/kevin-ruhl-b19b80166/'
          >
            https://www.linkedin.com/in/kevin-ruhl-b19b80166/
          </a>
        </div>
      </section>
    </div>
  );
};

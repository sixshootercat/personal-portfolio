import { Text } from '@mantine/core';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export const Home = () => {
  return (
    <div className='mb-24 sm:mb-56 rounded-lg flex items-center justify-center flex-col mt-10  border-2 border-solid border-gray-600'>
      <div className='mb-10 flex justify-center items-center h-16 border-b-2 border-solid border-gray-600 w-full'>
        <h1 className='text-white text-2xl'>👨‍💻 A Bit About Me</h1>
      </div>
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
      <section className='sm:w-2/3 flex flex-col px-4'>
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
      <div className='flex border-y-2 border-solid border-gray-600 justify-center items-center h-14 w-full'>
        <h2 className='text-xl text-white'>📲 How to reach me</h2>
      </div>
      <section className='flex flex-col py-6'>
        <a
          className='hover:text-cyan-400 mb-3 flex gap-2 items-center'
          href='mailto:kevin.ruhl92@gmail.com'
        >
          <MdEmail size={30} className='inline' /> kevin.ruhl92@gmail.com
        </a>
        <a
          className='hover:text-cyan-400 flex gap-2 items-center'
          href='https://www.linkedin.com/in/kevin-ruhl-b19b80166/'
        >
          <AiFillLinkedin size={30} className='inline' /> My LinkedIn Website
        </a>
      </section>
    </div>
  );
};

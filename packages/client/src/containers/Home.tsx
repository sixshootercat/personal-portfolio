import Image from 'next/image';
import React from 'react';

export const Home = () => {
  return (
    <div className='mb-24 sm:mb-56 flex items-center justify-center flex-col mt-10'>
      <h1 className='mb-10'>Bio</h1>
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
      <div className='sm:w-2/3'>
        <p>
          I&apos;ve been designing and writing software since 2016. Currently
          working with React and Typescript on the frontend. Doing backend
          development with Node and Go. I&apos;m a pragmatic thinker and
          technology agnostic. When I&apos;m not programming, some other
          activities I enjoy doing in my free time are listening to philosophy
          podcasts, doing physical training, and traveling.
        </p>
        <br />
        <p>Contact me to help you build slick UIs for your business needs.</p>
        <br />
        <p>
          email:{' '}
          <a className='text-cyan-400' href='mailto:kevin.ruhl92@gmail.com'>
            kevin.ruhl92@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

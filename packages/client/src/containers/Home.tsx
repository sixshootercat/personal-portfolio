import Image from 'next/image';
import React from 'react';

export const Home = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-10 mb-56'>
      <h1 className='mb-10'>Bio</h1>
      <div className='mb-10'>
        <Image
          src='/images/profile-kevin.jpg'
          alt='man with sunglasses'
          width={200}
          className='rounded-full'
          height={200}
          objectFit='cover'
        />
      </div>

      <p className='w-2/3'>
        I&apos;ve been designing and writing software since 2016. Currently
        working with React and Typescript on the frontend. Doing backend
        development with Node and Go. I&apos;m a pragmatic thinker and
        technology agnostic. When I&apos;m not programming and solving problems,
        You can find me delving into philosophy podcasts, doing physical
        training, and traveling.
      </p>
      <br />
      <p className='w-2/3'>
        Contact me to help you build slick and delightful UXs for your business
        needs.
      </p>
    </div>
  );
};
